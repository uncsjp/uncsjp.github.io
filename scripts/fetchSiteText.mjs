import puppeteer from 'puppeteer'
import fs from 'fs/promises'

const crytpad_to_obj = async () => {
    // *** Helper Functions *** //
    const log = async (text, path = 'scripts/output.txt') => {
        if (!(text instanceof String) && text instanceof Object) {
            text = JSON.stringify(text)
        }

        try {
            text = String(text)
        } catch (err) {
            throw new RangeError(
                `Argument to parameter text must be convertable to a string. An error occured while trying to convert: ${String(err)}`
            )
        }

        let d = new Date()
        await fs.appendFile(
            path,
            `${String(d.getMonth())}/${String(d.getDate())} ${String(d.getHours())}:${String(d.getMinutes())} ${text}\r\n`
        )
        console.log(
            `Saved line starting with "${text.slice(0, 10)}" to file at path ${path}`
        )
    }

    // Returns all inner contents of an ElementHandle
    const get_inner_html = async (element_handle) => {
        return await element_handle.evaluate((e) => e.innerHTML)
    }

    // Remove comments in format specified by parameter, span tags, br tags, p tags, and style tags (essentially preprocessing)
    const remove_comments_span_style = (text, comment_format = '---') => {
        text = String(text)
        let to_remove = []

        const instances_of_comment_format = [
            ...text.matchAll(new RegExp(comment_format, 'g')),
        ] // Creates RegExp, matches all instances, turns resulting iterator into list
        let l = instances_of_comment_format // Just being lazy

        if (l.length % 2 !== 0) {
            throw new Error(
                `Comment potentially left unclosed or comment_format parameter "${comment_format}" used elsewhere in text! Found odd number of instances (${l.length})`
            )
        }

        // Find substrings within comment parameters
        for (let i = 0; i < l.length; i += 2) {
            to_remove.push(
                text.substring(
                    l[i].index,
                    l[i + 1].index + comment_format.length
                )
            )
        }

        // Find instances of span
        get_tag_contents_no_children(text, 'span').map((instance) =>
            to_remove.push(instance)
        )

        // Add br, p to list of removals
        let to_add = [
            ...text.matchAll(new RegExp('(<br>)|(<\/?p>)|(&nbsp;)', 'g')),
        ]
        to_add.forEach((inst) => to_remove.push(inst[0]))

        // Remove strings from text
        to_remove.map((unremoved) => {
            text = text.replace(unremoved, '')
        })

        return text
    }

    // Parse editor and split by given headers
    // Returns somethings that looks like {header_1: text, header_2: text,...,header_n: text}
    const split_by_header = (headers, text) => {
        // Check to make sure all headers occur once
        for (let header of headers) {
            let all_matches = [...text.matchAll(new RegExp(header, 'g'))].length
            if (all_matches !== 1) {
                throw new Error(
                    `Error while splitting text by headers. Header ${header} found ${all_matches} times in text.`
                )
            }
        }

        var split_array = [text.split(headers[0])[1]] // There is an <h1> tag before the first header, this removes that. Kinda janky
        for (let i = 1; i < headers.length; i++) {
            let header = headers[i]
            var post_split = []
            for (let subset of split_array) {
                subset.split(header).map((section) => {
                    if (section !== '') {
                        post_split.push(section)
                    }
                })
            }
            split_array = post_split
        }

        // Making the assumption that headers are correctly in order, construct array into new object
        const r_obj = {}
        for (let i = 0; i < headers.length; i++) {
            r_obj[headers[i]] = split_array[i]
        }

        return r_obj
    }

    // Get tag contents (tag can't contain children that are the same elt)
    const get_tag_contents_no_children = (text, tagname) => {
        // Explanation of below line:
        // - Args to RegExp: first one is the regexp itself. \/? means match / zero or one times. Second one is "g", the global flag, which doesn't really do anything but is required
        // - text.matchAll(): takes in the created RegExp, returns an iterator for a list of objs, each with properties index, input, and group
        // - [...]: turns the iterator into a list
        const instances_of_tag = [
            ...text.matchAll(new RegExp(`<\/?${tagname}.*?>`, 'g')),
        ]
        const r_arr = []
        // Find tags within text
        instances_of_tag.map((l) => r_arr.push(l[0]))
        return r_arr
    }

    // Get tag contents
    const get_elts = (text, format) => {
        var keys_in_format = Object.keys(format)

        let ids = [...text.matchAll(new RegExp('id: [0-9]+', 'g'))].map(
            (match) => match.index
        )
        const potential_elts = []
        for (let i in ids) {
            i = Number(i) // Why the fuck wouldn't js make it a number lmao
            if (i === ids.length - 1) {
                potential_elts.push(text.slice(ids[i], ids[-1]))
            } else {
                potential_elts.push(text.slice(ids[i], ids[i + 1]))
            }
        }

        // Returns true if elt matches format, false otherwise
        const matches_format = (elt) => {
            let valid = true
            keys_in_format.forEach((key) => {
                if (
                    [...elt.matchAll(new RegExp(`${key}:`, 'g'))].length !== 1
                ) {
                    valid = false
                }
            })
            return valid
        }

        // const sorted_tag_text = find_matching_tags()

        return potential_elts.filter(matches_format)
    }

    // Takes a list of elts and a format and converts to json object
    const elts_to_objects = (elts, format) => {
        const get_text_from_regexp = (elt, val) => {
            const regexp = elt.match(new RegExp(`<li>${val}:.*?</li`))
            if (regexp) {
                // 6 and -4 represent li tags
                return regexp[0].slice(6 + val.length, -4)
            } else {
                return ''
            }
        }

        const get_text_from_array_of_objs = (elt, val) => {
            const r_arr = []
            Object.keys(val).forEach((key, i) => {
                let is_first = true
                if (i >= 1) {
                    is_first = false
                }
                const regexp = new RegExp(`<li>${key}:.*?<`, 'g')
                let interm = [...elt.matchAll(regexp)]
                interm.forEach((inst, idx) => {
                    if (is_first) {
                        var new_obj = {}
                        new_obj[key] = inst[0].slice(6 + key.length, -1)
                        r_arr.push(new_obj)
                    } else {
                        r_arr[idx][key] = inst[0].slice(6 + key.length, -1)
                    }
                })
            })
            return r_arr
        }

        const get_text_from_array = (elt, val) => {
            r_arr = []
            const regexp = new RegExp(`<li>${val}:.*?<`, 'g')
            let interm = [...elt.matchAll(regexp)]
            interm.forEach((inst) => {
                r_arr.push(inst[0].slice(6 + val.length, -1))
            })
            return r_arr
        }

        const r_arr = []
        var obj = {}
        var keys = Object.keys(format)
        elts.forEach((elt) => {
            Object.values(format).forEach((val, idx) => {
                if (val instanceof Array) {
                    if (val[0] instanceof Object) {
                        obj[keys[idx]] = get_text_from_array_of_objs(
                            elt,
                            val[0]
                        )
                    } else {
                        obj[keys[idx]] = get_text_from_array(elt, val)
                    }
                } else if (val instanceof Object) {
                    Object.keys(val).forEach((val2) => {
                        if (!obj[keys[idx]]) {
                            obj[keys[idx]] = {}
                        }
                        obj[keys[idx]][val2] = get_text_from_regexp(elt, val2)
                    })
                } else {
                    obj[keys[idx]] = get_text_from_regexp(elt, keys[idx])
                }
            })
            r_arr.push(obj)
            obj = {}
        })

        // Had to remove id so add back here :)
        r_arr.map((elt, idx) => (elt['id'] = idx))

        return r_arr
    }

    const color_print = (text) => {
        console.log('  ' + '%c' + text, 'color: #6a7337;')
    }
    // *** End Helper Functions *** //

    // *** Constants *** //
    const CRYPTAD_DOC_HASH = process.env.TEXT_URL

    if (!CRYPTAD_DOC_HASH) {
        throw new Error('TEXT_URL environment variable is not set')
    }

    const FORMATS = [
        {
            id: 0,
            text: '',
        },
        {
            id: 0,
            header: '',
            text: '',
        },
        {
            id: 0,
            date: {
                day: '',
                month: '',
                year: '',
            },
            title: '',
            rationale: '',
            outcome: '',
            photos: [
                {
                    url: '',
                    description: '',
                },
            ],
        },
    ]

    const HEADERS = ['--About Us--', '--Points of Unity--', '--SJP On Campus--']

    // *** End Constants *** //

    // Main Script //
    color_print('Beginning run...')

    const browser = await puppeteer.launch({
        slowMo: 500,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()

    color_print('Browser opened, navigating to page...')

    await page.goto(CRYPTAD_DOC_HASH)

    // Now that we've navigated to the page, we need to:
    // - Observe DOM changes
    // - Filter for the creation of new iframes, as cryptpad sandboxing uses iframes
    // - Select the innermost iframe
    // - Spit out its contents

    // Resources:
    // - https://pptr.dev/guides/page-interactions
    // - https://pptr.dev/api/puppeteer.elementhandle

    // Wait for the page to load some stuff; hopefully prevent TimeoutErrors while waiting for iframe
    const body = await page.waitForSelector('body')

    // Select the editor iframe
    color_print('Naviated to page, waiting for iframe to load...')
    const editor_frame = await page.waitForFrame(async (frame) => {
        const frame_elt = await frame.frameElement()
        if (!frame_elt) {
            return false
        }
        const title = await frame_elt.getProperty('title')
        return title.toString().includes('Editor')
    })

    // Select the body
    const editor_body = await editor_frame.$('[contenteditable="true"]')

    // Get the text from in the body
    color_print('Found iframe, selecting text...')
    const editor_text = await get_inner_html(editor_body)

    // The inner html of the editor is now in editor_text. Now we need to:
    // - Get rid of the comments (currently in the form of preceding and postceding ---)
    // - Split the text by its headers
    // - Parse the text within the headers

    // Create object with format of objects we're creating (MUST BE IN SAME ORDER AS CRYPTPAD)

    // Remove the comments, span tags, style tags
    color_print('Text found, preprocessing...')
    const editor_text_no_comments = remove_comments_span_style(editor_text)

    // Split according to the given headers
    color_print('Finished preprocessing, splitting...')
    const editor_text_header_split = split_by_header(
        HEADERS,
        editor_text_no_comments
    )

    // For each header, get the elts from the corresponding text, create list of objs, assign objs to header
    color_print('Split finished, creating objects...')
    const full_text = {}
    for (let i = 0; i < HEADERS.length; i++) {
        let elts = get_elts(editor_text_header_split[HEADERS[i]], FORMATS[i])
        let list_of_objs = elts_to_objects(elts, FORMATS[i])
        full_text[HEADERS[i]] = list_of_objs
    }

    // Save to location that hooks will look for it in
    color_print('Objects created, saving...')
    fs.writeFile('public/text/text.json', `${JSON.stringify(full_text)}`)

    await browser.close()
    color_print('Saved and closed browser.')

    return 0
}

for (let i = 1; i <= 3; i++) {
    console.log(`Running script (Attempt ${i} out of 3)...`)
    try {
        var res = await crytpad_to_obj()
    } catch (error) {
        console.error('An error was thrown:', error)
        // Process failed 3 times
        if (i === 3) {
            console.error('Three errors were thrown. Exiting unsuccesfully.')
            process.exit(1)
        }
    }
    if (res === 0) {
        console.log('Script finished without errors, exiting.')
        break
    }
}

// Tell github actions process exited succesfully
process.exit(0)

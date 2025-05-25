import { useState } from 'react';

import ReactPaginate from 'react-paginate';

import Container from '../utilities/Container'
import TextBox from '../utilities/TextBox'

// Any other object attributes will be ignored!
// Only icons for a google_form, instagram, linktree, substack, telegram, mailchimp, cryptpad and website exist at the moment
const triangle_orgs_init = [
    {
        "name": "community justice & abolition collective",
        "logohref": "/logos/cjac.jpg",
        "description": "abolition and mutual aid in chapel hill",
        "links": {
            "instagram" : "https://www.instagram.com/cjacollective/",
            "website" : "https://cjacollective.carrd.co/"
        }
    },
    {
        "name": "Triangle Branch of the Party For Socialism and Liberation",
        "logohref": "/logos/trianglepsl.jpg",
        "description": "The Triangle, NC Branch of the Party for Socialism and Liberation, fighting for socialism in the South!",
        "links": {
            "instagram": "https://www.instagram.com/psltrianglenc/",
            "website": "https://pslweb.org/join"
        }
    },
    {
        "name": "Monsoon",
        "logohref": "/logos/monsoon.jpg",
        "description": "UNC's foremost South Asian American-interest (but not exclusive) magazine, community & advocacy platform 🥭",
        "links": {
            "instagram": "https://www.instagram.com/uncmonsoon/",
            "linktree": "https://linktr.ee/uncmonsoon"
        }
    },
    {
        "name": "PalYouthNC",
        "logohref": "/logos/palyouthnc.jpg",
        "description": "Palestinian & Arab youth in the RTP committed to the liberation of our homeland!🇵🇸",
        "links": {
            "instagram": "https://www.instagram.com/palyouthnc/",
            "linktree": "https://linktr.ee/ncpaliyouth"
        }
    },
    {
        "name": "UNC Graduate Students for the Liberation of Palestine",
        "logohref": "/logos/gslp.jpg",
        "description": "We are graduate and professional students at UNC–CH standing in solidarity with the Palestinian people against apartheid, genocide, and occupation.",
        "links": {
            "instagram": "https://www.instagram.com/uncgslp/",
            "linktree": "https://linktr.ee/uncgslp"
        }
    },
    {
        "name": "transparUNCy",
        "logohref": "/logos/transparuncy.jpg",
        "description": "Who controls your education, how they do it, and what they don’t want you to know.",
        "links": {
            "instagram": "https://www.instagram.com/transparuncy/",
            "substack": "https://uncaffirmativeactioncoalition.substack.com"
        }
    },
    {
        "name": "UNC Faculty for Justice in Palestine",
        "logohref": "/logos/fjp.jpg",
        "description": "Collective of UNC faculty and staff organizing for Palestinian liberation and self-determination.",
        "links": {
            "instagram": "https://www.instagram.com/uncfjp/",
            "google_form": "https://docs.google.com/forms/d/e/1FAIpQLSc1NQwkvcB8vWoiGqoRDSABP0-IAoP1IaA0OoY5lMN9VOGcBQ/viewform"
        }
    },
    {
        "name": "Siembra UNC",
        "logohref": "/logos/siembranc.jpg",
        "description": "UNC Chapter of Siembra NC. We fight for the rights of our community. Your favorite student org’s student org.",
        "links": {
            "instagram": "https://www.instagram.com/siembraunc/",
            "linktree": "https://linktr.ee/siembraunc"
        }
    },
    {
        "name": "The Southern Student Action Coalition (SSAC)",
        "logohref": "/logos/ssac.jpg",
        "description": "Creating intersectional, intergenerational, and anti-imperialist action, rooted in the South's progressive history. UNC & BEYOND! 🍉",
        "links": {
            "instagram": "https://www.instagram.com/siembraunc/"
        }
    },
    {
        "name": "The Workers Union At UNC (UE Local 150)",
        "logohref": "/logos/wu.jpg",
        "description": "We are a chapter of UE Local 150 representing workers at UNC Chapel Hill.",
        "links": {
            "instagram": "https://www.instagram.com/workersunionatunc/",
            "linktree": "https://linktr.ee/workersunionunc"
        }
    },
    {
        "name": "NC State SJP",
        "logohref": "/logos/ncsusjp.jpg",
        "description": "NC State's chapter of Students for Justice in Palestine. A political organization fighting for the freedom of Palestine and its people #FreePalestine",
        "links": {
            "instagram": "https://www.instagram.com/ncsusjp/",
            "linktree": "https://linktr.ee/ncsusjp"
        }
    },
    {
        "name": "the outside agitator",
        "logohref": "/logos/outsideag.jpg",
        "description": "a new radical tradition. @cjacollective publication. chapel hill & beyond",
        "links": {
            "instagram": "https://www.instagram.com/theoutsideagitator/",
            "website": "https://theoutsideagitator.com"
        }
    },
    {
        "name": "Amazon Cause",
        "logohref": "/logos/cause.jpg",
        "description": "Carolina Amazonians United for Solidarity and Empowerment",
        "links": {
            "instagram": "https://www.instagram.com/amazoncause/",
            "website": "https://amazoncause.com"
        }
    }
];

// Sort based on name
triangle_orgs_init.sort((a, b) => { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; });

const OrgCard = ({org}) => {
    return (
        <Container bg_color={"bg-red-300"}>
            <div className="flex flex-row shrink-0 justify-between">

                <div className="flex flex-row">
                    {/* Org logo */}
                    <div className="m-0.5 mr-2 flex items-center shrink-0">
                        <img className="rounded-full h-12 w-12" src={org.logohref} alt={org.name} />
                    </div>
                    {/* Org name and description */}
                    <div className="flex flex-col">
                        <div className="m-0.5 text-lg">
                            {org.name}
                        </div>
                        <div className="m-0.5 text-sm">
                            {org.description}
                        </div>
                    </div>
                </div>

                {/* Org links */}
                <div className="flex items-center shrink-0">
                    <div className="m-0.5 flex items-center">
                        {Object.keys(org.links).map((key, index) => {
                            return (
                                <a href={org.links[key]}>
                                    <img className="w-8 h-8" src={`/icons/${key}.png`} alt={`${org.name} ${key} link`}/>
                                </a>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}

// Taken from https://www.npmjs.com/package/react-paginate
const PaginatedItems = ({ items_per_page }) => {
    const [item_offset, set_item_offset] = useState(0);

    const end_offset = item_offset + items_per_page;
    const current_items = triangle_orgs_init.slice(item_offset, end_offset);
    const page_count = Math.ceil(triangle_orgs_init.length / items_per_page);

    const handle_page_click = (event) => {
        const new_offset = (event.selected * items_per_page) % triangle_orgs_init.length;
        set_item_offset(new_offset);
    }

    return (
        <>
            <Container bg_color={"bg-red-300"}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handle_page_click}
                    pageRangeDisplayed={5}
                    pageCount={page_count}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    className="react-paginate"
                />
            </Container>
            {current_items.map(org => <OrgCard org={org} />)}
        </>
    )
}

const JoinTheOrg = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center">
            <link href="/paginate_css/react-paginate.css" rel="stylesheet" />
            <div className="contents md:flex md:flex-col w-3/5">
                <TextBox
                    header={"Join SJP!"}
                />

                {/* Interest Form */}
                <TextBox
                    header_size='2xl'
                    header={"Interested in organizing with SJP?"}
                    text={"Fill out our interest form!"}
                >
                    <div className="flex justify-center">
                        <a href={"https://www.instagram.com/uncsjp/"} className="w-full">
                            <Container bg_color={"bg-red-300"} styles={"flex items-center"}>
                                <img className="w-8 h-8 inline mr-1" src={`/icons/cryptpad.png`} alt={"UNC SJP cryptpad interest form"}/>
                                Cryptpad Interest Form
                            </Container>
                        </a>
                    </div>

                </TextBox>

                {/* Newsletter */}
                <TextBox
                    header_size='2xl'
                    header={"Interested in receiving the newsletter?"}
                    text={"Sign up on mailchimp!"}
                >
                    <div className="flex justify-center">
                        <a href={"https://gmail.us17.list-manage.com/subscribe?u=73a81bd71c0831f152215407f&id=f8de748d7d"} className="w-full">
                            <Container bg_color={"bg-red-300"} styles={"flex items-center"}>
                                <img className="w-8 h-8 inline mr-1" src={`/icons/mailchimp.png`} alt={"UNC SJP newsletter signup"}/>
                                Mailchimp Signup Link
                            </Container>
                        </a>
                    </div>

                </TextBox>

                {/* Coalition */}
                <TextBox
                    header_size='2xl'
                    header={"Interested in organizational partnership or want to contact us?"}
                    text={"Reach out via instagram!"}
                >
                    <div className="flex justify-center w-full">
                        <a href={"https://www.instagram.com/uncsjp/"} className="w-full">
                            <Container bg_color={"bg-red-300"} styles={"flex items-center"}>
                                <img className="w-8 h-8 inline mr-1" src={`/icons/instagram.png`} alt={"UNC SJP instagram"}/>
                                UNC SJP Instagram
                            </Container>
                        </a>
                    </div>

                </TextBox>

                {/* Linktree & Telegram */}
                <TextBox
                    header_size='2xl'
                    header={"Check out our other links"}
                >
                    <div className="flex justify-center w-full">
                        <a href={"https://linktr.ee/uncchapelhillsjp"} className="w-full">

                            <Container bg_color={"bg-red-300"} styles={"flex items-center"}>
                                <img className="w-8 h-8 inline mr-1" src={`/icons/linktree.png`} alt={"UNC SJP linktree"}/>
                                UNC SJP Linktree
                            </Container>
                        </a>
                        <a href={"https://t.me/+VZnLtNQYB2Q5NDgx"} className="w-full">
                            <Container bg_color={"bg-red-300"} styles={"flex items-center"}>
                                <img className="w-8 h-8 inline mr-1" src={`/icons/telegram.png`} alt={"UNC SJP telegram"}/>
                                UNC SJP Telegram
                            </Container>
                        </a>
                    </div>
                </TextBox>
            </div>

            {/* Other orgs */}
            <div className="contents md:flex md:flex-col w-2/5">
                <TextBox header={"Join other local orgs!"} />
                <Container>
                    <PaginatedItems items_per_page={4} />
                </Container>
            </div>
        </div>
    )
}

export default JoinTheOrg

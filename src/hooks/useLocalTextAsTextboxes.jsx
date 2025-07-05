import { useEffect } from 'react'
import TextBox from '../utilities/TextBox'

export default function useLocalTextAsTextboxes({ section, setter }) {
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('text/text.json', { signal })
            .then((response) => response.json()) // Convert body to json
            .then((response) => response[section]) // Pull out section
            .then((section) => {
                // Reformat json as textboxes
                let o = []
                for (let tb in section) {
                    o.push(
                        <TextBox
                            key={section[tb].id}
                            header={section[tb].header}
                            text={section[tb].text}
                        />
                    )
                }
                return o
            })
            .then((jsx) => {
                // Set content
                setter(jsx)
            })
            .catch((DOMException) => console.log("fetch aborted."))
        return () => { controller.abort() }
    }, [section, setter])
}

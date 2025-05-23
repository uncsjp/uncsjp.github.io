import { useEffect } from 'react'
import TextBox from '../utilities/TextBox'

export default function useLocalTextAsTextboxes({ section, setter }) {
    useEffect(() => {
        fetch('text/text.json')
            .then((response) => response.json()) // Convert body to json
            .then((response) => response[section]) // Pull out principles_and_goals
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
                console.log(jsx)
            })
            .catch((e) => console.error(e))
        return () => {}
    }, [section, setter])
}

import { useEffect } from "react"

export default function useLocalText({section, setter}) {
    useEffect(() => {
        fetch('text/text.json')
            .then((response) => response.json()) // Convert body to json
            .then((response) => response[section]) // Pull out principles_and_goals
            .then((jsx) => {
                // Set content
                setter(jsx)
            })
            .catch((e) => console.error(e))
        return () => {}
    }, [section, setter])
}

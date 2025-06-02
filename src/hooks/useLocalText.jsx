import { useEffect } from "react"

export default function useLocalText({section, setter}) {
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('text/text.json', {signal}) // Stop any ongoing requests on refresh / navigate away
            .then((response) => response.json()) // Convert body to json
            .then((response) => response[section]) // Pull out principles_and_goals
            .then((jsx) => {
                // Set content
                setter(jsx)
            })
            .catch((e) => console.error(e))
        return () => { controller.abort(); }
    }, [section, setter])
}

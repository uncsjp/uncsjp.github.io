import TextBox from "../utilities/TextBox";
import Image from "../utilities/Image";
import { useEffect, useState } from "react";

const PrinciplesAndGoals = () => {
    const [text_boxes, set_text]  = useState(
        <TextBox text={"Loading..."} header={"Loading..."} className="animate-pulse" />
    );

    // Refactor to custom hook
    useEffect(() => {
        fetch('text/text.json')
            .then(response => response.json()) // Convert body to json
            .then(response => response.principles_and_goals) // Pull out principles_and_goals
            .then(section => { // Reformat json as textboxes
                let o = []
                for (let tb in section) {
                    o.push(<div key={section[tb].id}><TextBox header={section[tb].header} text={section[tb].text} /></div>)
                }
                return o
            })
            .then(section => { // Add in images
                return [
                section.slice(0,1),
                <Image key={10} url={"protest_from_south.jpg"}/>, // Arbitrary keys cause no rerenders
                section.slice(1,3),
                <Image key={20} url={"peoples_grad.jpg"} />,
                section.slice(3)
                ]
            })
            .then(jsx => { // Set content
                set_text(jsx);
            })
            .catch((e => console.error(e)));
        return () => {}
    }, [set_text])

    return (
        <div className="
            grid grid-cols-1 md:grid-cols-2
            w-full
            justify-center
        ">
           {text_boxes}
        </div>
    );
};

export default PrinciplesAndGoals;

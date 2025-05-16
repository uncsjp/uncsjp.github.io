import TextBox from "../utilities/TextBox";
import Image from "../utilities/Image";
import { useEffect, useState } from "react";

const PrinciplesAndGoals = () => {
    const [text_boxes, set_text]  = useState(
        <TextBox text={"Loading..."} header={"Loading..."} className="animate-pulse" />
    );

    // TODO: Refactor to custom hook
    useEffect(() => {
        fetch('text/text.json')
            .then(response => response.json()) // Convert body to json
            .then(response => response.principles_and_goals) // Pull out principles_and_goals
            .then(section => { // Reformat json as textboxes
                let o = []
                for (let tb in section) {
                    o.push(<TextBox key={section[tb].id} header={section[tb].header} text={section[tb].text} />)
                }
                return o
            })
            .then(jsx => { // Set content
                set_text(jsx);
            })
            .catch((e => console.error(e)));
        return () => {}
    }, [])

    return (
        <div className="
            flex flex-col
            w-full
            justify-center
        ">
            {/* TODO: refactor to be dynamic */}
            <div className="contents md:flex md:flex-col">
                {text_boxes[0]}
                <Image key={10} url={"protest_from_south.jpg"}/>
                {text_boxes[1]}
            </div>
            <div className="contents md:flex md:flex-col">
                {text_boxes[2]}
                <Image key={20} url={"peoples_grad.jpg"} />
                {text_boxes[3]}
                {text_boxes[4]}
            </div>
        </div>
    );
};

export default PrinciplesAndGoals;

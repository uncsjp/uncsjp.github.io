import { useEffect, useRef, useState } from "react";

import useLocalText from "../hooks/useLocalText";

import TextBox from "./TextBox";

const Event = ({event}) => {
    return (
        <TextBox key={event.id} header={event.title} text={event.description}>

        </TextBox>
    )
}

const Date = ({event}) => {
    return (
        <TextBox key={event.id} header={event.date} />
    )
}

const Section = ({event, width}) => {
   return (
    <div
        className={`max-w-[${width}]`}
    >
        <Event event={event} />
        <svg width={width}>

        </svg>
        <Date event={event} />
    </div>

   )
}

const Timeline = () => {
    const [events, set_events] = useState([{"id":2, "date":"", "title":"a", "description":""}]);

    useLocalText({section: 'sjp_on_campus', setter: set_events});

    useEffect(() => console.log(events), [])


    return (
        <div className="w-full flex justify-center">
            <Section event={events[0]} width={"240px"}/>
        </div>
    )
};

export default Timeline;

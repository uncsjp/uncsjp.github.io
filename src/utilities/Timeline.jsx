import { useEffect, useRef, useState } from "react";

import useLocalText from "../hooks/useLocalText";

import TextBox from "./TextBox";

const Event = ({event, width}) => {
    return (
        <div style={{minWidth: `${width}px`, maxWidth: `${width}px`}}>
            <TextBox key={event.id} header={event.title} text={event.description} bg_color="red"/>
        </div>
    )
}

const Date = ({event, width}) => {
    return (
        <div style={{minWidth: `${width}px`, maxWidth: `${width}px`}}>
            <TextBox key={event.id} header={event.date} bg_color="red"/>
        </div>
    )
}

const Row = ({events}) => {
    const row_ref = useRef(null);
    const [width, set_width] = useState(0);
    // Get the width of the row
    useEffect(() => {
        set_width(row_ref.current.getBoundingClientRect().width)
    });

    const create_event = (event) => {
        return (<Event event={event} width={width / events.length} />)
    }

    const create_date = (event) => {
        return (<Date event={event} width={width / events.length} />)
    }

    return (
        <div ref={row_ref} className="w-[99%]">
            <div className="flex justify-center">
                {events.map(create_event)}
            </div>
            <svg width={width}>
                <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
            </svg>
            <div className="flex justify-center">
                {events.map(create_date)}
            </div>
        </div>
   )
}

const Timeline = () => {
    const [events, set_events] = useState([{"id":2, "date":"Loading...", "title":"Loading...", "description":""}]);

    useLocalText({section: 'sjp_on_campus', setter: set_events});

    return (
        <div className="w-full flex justify-center">
            <Row events={events}/>
        </div>
    )
};

export default Timeline;

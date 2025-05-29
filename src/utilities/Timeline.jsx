import { useEffect, useRef, useState } from "react";

import useLocalText from "../hooks/useLocalText";

import TextBox from "./TextBox";

const Event = ({event, width}) => {
    return (
        <div style={{minWidth: `${width}px`, maxWidth: `${width}px`}}>
            <TextBox header={event.title} text={event.description} bg_color="red"/>
        </div>
    )
}

const Date = ({event, width}) => {
    return (
        <div style={{minWidth: `${width}px`, maxWidth: `${width}px`}}>
            <TextBox header={event.date} bg_color="red"/>
        </div>
    )
}

const Draw = ({num_events}) => {
    const svg_ref = useRef(null);
    const [svg_width, set_svg_width] = useState(0);
    const [svg_height, set_svg_height] = useState(0);

    // Get heigh and width of the svg
    useEffect(() => {
        set_svg_width(svg_ref.current.getBoundingClientRect().width)
        set_svg_height(svg_ref.current.getBoundingClientRect().height)
    })

    return (
        <svg ref={svg_ref} className="w-full">
            <line x1="0" y1={`${svg_height / 2}`} x2={`${svg_width}`} y2={`${svg_height / 2}`} stroke="black" />
        </svg>
    )
}

const Row = ({events}) => {
    const row_ref = useRef(null);
    const [container_width, set_container_width] = useState(0);

    // Get the width of the row
    useEffect(() => {
        const handle_resize = () => {
            set_container_width(row_ref.current.getBoundingClientRect().width)
            console.log(`new size is: ${container_width}`);
        };
        if (row_ref.current !== null) {
            row_ref.current.addEventListener('resize', handle_resize);

        }
    });

    // fns to create events w/o scope issues (access to contaner_width)
    const create_event = (event) => {
        return (<Event key={event.id} event={event} width={container_width / events.length} />)
    }

    const create_date = (event) => {
        return (<Date key={event.id} event={event} width={container_width / events.length} />)
    }

    return (
        <div ref={row_ref} className="w-[99%]">
            <div className="flex justify-center">
                {events.map(create_event)}
            </div>
            <Draw num_events={events.length}/>
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

import { useEffect, useRef, useState } from "react";

import useLocalText from "../hooks/useLocalText";

import Container from "./Container";
import Divider from "./Divider";
import FilterInput from "./FilterInput";
import sort_by_younger_date from "./functions/sort_by_younger_date";

const ExtendedDescription = ({text}) => {
    return (
        <div className="absolute left-0 top-full p-1 bg-gray-300
            rounded-tl-xl rounded-bl-xl rounded-br-xl border-red-400 border-solid border-5
            text-base overflow-auto resize z-10">
            {text}
        </div>
    )
}

const PhotoAlbum = ({photos}) => {
    return (
        <div className="absolute left-0 top-full p-1 bg-gray-300
            rounded-tl-xl rounded-bl-xl rounded-br-xl border-red-400 border-solid border-5
            text-base overflow-y-auto overflow-x-clip resize z-10">
                {photos.map(photo => {
                    return (
                        <Container bg_color="red" display="flex" direction="row" margin="half">
                            <img src={photo.url} className="w-[60%] rounded-sm m-0.5"/>
                            <div className="text-sm">
                                {photo.description}
                            </div>
                        </Container>
                    )
                })}
        </div>
    )
}

const Event = ({event}) => {
    const [rationale_clicked, set_rationale_clicked] = useState(false)
    const [outcome_clicked, set_outcome_clicked] = useState(false)
    const [rationale_hovered, set_rationale_hovered] = useState(false)
    const [outcome_hovered, set_outcome_hovered] = useState(false)
    const [photo_gallery_clicked, set_photo_gallery_clicked] = useState(false)
    const [photo_gallery_hovered, set_photo_gallery_hovered] = useState(false)

    const rationale_ref = useRef(null)
    const outcome_ref = useRef(null)
    const photo_gallery_ref = useRef(null)

    useEffect(() => {
        const click_outside_rationale = (event) => {
            if (rationale_ref && !rationale_ref.current.contains(event.target)) {
                set_rationale_clicked(false)
            }
        }

        const click_outside_outcome = (event) => {
            if (outcome_ref && !outcome_ref.current.contains(event.target)) {
                set_outcome_clicked(false)
            }
        }

        const click_outside_photo_gallery = (event) => {
            if (photo_gallery_ref && !photo_gallery_ref.current.contains(event.target)) {
                set_photo_gallery_clicked(false)
            }
        }

        document.addEventListener('mousedown', click_outside_rationale)
        document.addEventListener('mousedown', click_outside_outcome)
        document.addEventListener('mousedown', click_outside_photo_gallery)
        return () => {
            document.removeEventListener('mousedown', click_outside_rationale)
            document.removeEventListener('mousedown', click_outside_outcome)
            document.removeEventListener('mousedown', click_outside_photo_gallery)
        }
    }, [])

    return (
        <Container display="flex" direction="column" border_color="gray" shadow="md" min_width="160" margin="mb0">

            {/* header  */}
            <Container bg_color="red" display="flex" direction="row" justify="between" padding="0" shadow="md">
                <div className="text-xl m-1">
                    {event.title}
                </div>
                <div className="flex flex-row border-l-2 border-l-gray-200 hover:border-l-gray-300">
                    <div className="text-xl inline m-1">
                        {`${event.date.month.slice(0,4)} ${event.date.year}`}
                    </div>
                </div>
            </Container>

            {/* rationale */}
            <div className="relative">
                <Container bg_color="red" display="flex" direction="row" justify="between" padding="0" shadow="md">
                    <div className="text-base m-1 line-clamp-1">
                        {event.rationale}
                    </div>
                    <div className="flex flex-row border-l-2 border-l-gray-200 hover:border-l-gray-300 justify-center"
                        onClick={() => set_rationale_clicked(true)}
                        onMouseEnter={() => set_rationale_hovered(true)}
                        onMouseLeave={() => set_rationale_hovered(false)}
                    >
                        <img src="/icons/rtriangle.svg" alt="Show more" className="min-w-[30px] m-1"/>
                    </div>
                    <div ref={rationale_ref} className="contents">
                        {(rationale_clicked || rationale_hovered) && <ExtendedDescription text={event.rationale}/>}
                    </div>
                </Container>
            </div>

            {/* outcome  */}
            <div className="relative">
                <Container bg_color="red" display="flex" direction="row" justify="between" padding="0" shadow="md">
                    <div className="text-base m-1 line-clamp-3">
                        {event.outcome}
                    </div>
                    <div className="flex flex-row border-l-2 border-l-gray-200 hover:border-l-gray-300 justify-center"
                        onClick={() => set_outcome_clicked(true)}
                        onMouseEnter={() => set_outcome_hovered(true)}
                        onMouseLeave={() => set_outcome_hovered(false)}
                    >
                        <img src="/icons/rtriangle.svg" alt="Show more" className="min-w-[30px] m-1" />
                    </div>
                    <div ref={outcome_ref} className="contents">
                        {(outcome_clicked || outcome_hovered) && <ExtendedDescription text={event.outcome} />}
                    </div>
                </Container>
            </div>

            {/* gallery */}
            <div className="relative">
                <Container bg_color="red" display="flex" direction="row" justify="between" padding="0" shadow="md">
                    <div className="text-xl m-1 flex justify-center items-center w-full">
                        <div>
                            Photos
                        </div>
                    </div>
                    <div className="flex flex-row border-l-2 border-l-gray-200 hover:border-l-gray-300 justify-center"
                        onClick={() => set_photo_gallery_clicked(true)}
                        onMouseEnter={() => set_photo_gallery_hovered(true)}
                        onMouseLeave={() => set_photo_gallery_hovered(false)}
                    >
                        <img src="/icons/rtriangle.svg" alt="Show more" className="min-w-[30px] m-1" />
                    </div>
                    <div ref={photo_gallery_ref} className="contents">
                        {(photo_gallery_clicked || photo_gallery_hovered) && <PhotoAlbum photos={event.photos} />}
                    </div>
                </Container>
            </div>
        </Container>
    );
};

const TimelineRow = ({events}) => {
    return (
        <>
            <Divider size="10"/>
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-row gap-4">
                    {events.map((e) => {
                        return <Event event={e} key={e.id} />
                    })}
                </div>
                <div className="w-full flex flex-row">
                    {events.map((e) => {
                        return (
                            <div className="w-full grid justify-items-center align-middle">
                                <img src="icons/varrow.svg" className=""/>
                            </div>
                        )
                    })}
                </div>
                <img src="icons/barrow.svg" className="w-full scale-y-150"/>
            </div>
        </>
    )
}

const Timeline = () => {
    const [events, set_events] = useState([{"id":2, "date":{"month": "", "year": "loading"}, "title":"Loading...", "rationale":"Loading...", "outcome":"Loading..."}]);
    const [filtered_events, set_filtered_events] = useState(events)
    const [rows, set_rows] = useState([[]])

    const [title_filter, set_title_filter] = useState("")
    const [date_filter, set_date_filter] = useState("")
    const [newest_first, set_newest_first] = useState(true)

    useLocalText({section: '--SJP On Campus--', setter: set_events});

    // Applies filter when events changes or filters changed
    useEffect(() => {
        let filtered = events.filter((e) => {return e.title.toLowerCase().includes(title_filter.toLowerCase()) || title_filter === ""})
            .filter((e) => {return `${e.date.month} ${e.date.year}`.toLowerCase().includes(date_filter.toLowerCase()) || date_filter === ""})
            .sort(sort_by_younger_date)

        if (!newest_first) {
            filtered.reverse()
        }

        set_filtered_events(filtered)
    }, [title_filter, date_filter, newest_first, events])

    useEffect(() => {
        // Cut events array into rows of length specified by MAX_PER_ROW
        let rows_temp = []
        const MAX_PER_ROW = 4
        for (let i = 0; i < Math.ceil(filtered_events.length / MAX_PER_ROW); i++) {
            let end_slice = (i + 1) * MAX_PER_ROW
            rows_temp.push(filtered_events.slice(
                i * MAX_PER_ROW,
                end_slice > filtered_events.length ? filtered_events.length : end_slice
            ))
        }
        set_rows(rows_temp)
    }, [filtered_events])

    const button_bg = {
        false: "bg-gray-200 hover:bg-red-400 hover:border-red-400",
        true: "bg-red-300 hover:bg-red-400 hover:border-red-400"
    }

    return (
        <Container display_bg_hover="false" overflow="auto">
            <Container display="flex">
                <Container border_color="gray" shadow="md" display="inline" width="auto">Sort by...</Container>
                <button className={`${button_bg[newest_first]} rounded-lg m-1 p-1 border-red-300 border-solid border-5`} onClick={() => {set_newest_first(true)}}>Oldest</button>
                <button className={`${button_bg[!newest_first]} rounded-lg m-1 p-1 border-red-300 border-solid border-5`} onClick={() => {set_newest_first(false)}}>Most recent</button>
                <Container border_color="gray" shadow="md" display="inline" width="auto">Filter by date...</Container>
                <FilterInput placeholder="Events with date..." setter={set_date_filter} />
                <Container border_color="gray" shadow="md" display="inline" width="auto">Filter by title...</Container>
                <FilterInput placeholder="Events with title..." setter={set_title_filter} />
            </Container>
            {rows.map((row_of_events, idx) => {
                return <TimelineRow key={idx} events={row_of_events} />
            })}
        </Container>
    )
};

export default Timeline;

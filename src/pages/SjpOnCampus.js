const SjpOnCampus = () => {
    const events = [
        { title: 'protest', body: 'today we did this' },
        { title: 'teach in', body: 'and we taught people this' },
        { title: 'actions', body: 'and then admin did this' },
    ]

    const event_jsx = events.map((event) => (
        <li>
            <h1>{event.title}</h1>
            <div>{event.body}</div>
        </li>
    ))

    return (
        <div
            className="justify-items-stretch rounded-lg
            mt-2 mb-2 ml-1 mr-1
          bg-gray-200 w-99 p-1"
        >
            <ul>{event_jsx}</ul>
        </div>
    )
}

export default SjpOnCampus

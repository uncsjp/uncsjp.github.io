const Divider = ({direction="h", size="5", bg_color="opaque"}) => {
    const d = {
        h: {
            2: "w-full h-[2px]",
            5: "w-full h-[5px]"
        },
        v: {
            2: "h-full w-[2px]",
            5: "h-full w-[5px]"
        }
    }

    const bg = {
        opaque: "bg-transparent"
    }

    return (
        <div className={`
            ${d[direction][size]}
            ${bg[bg_color]}
        `}>
        </div>
    )
}

export default Divider

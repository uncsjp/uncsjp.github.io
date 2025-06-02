const Divider = ({direction="h", size="5", bg_color="opaque"}) => {
    const d = {
        h: {
            2: "w-full h-[2px]",
            5: "w-full h-[5px]",
            10: "w-full h-[10px]"
        },
        v: {
            2: "h-full w-[2px]",
            5: "h-full w-[5px]",
            10: "h-full w-[10px]"
        }
    }

    const bg = {
        opaque: "bg-transparent",
        gray: "bg-gray-100",
        red: "bg-red-200"
    }

    return (
        <div className={`
            mt-2 mb-2
            rounded-xl
            ${d[direction][size]}
            ${bg[bg_color]}
        `}>
        </div>
    )
}

export default Divider

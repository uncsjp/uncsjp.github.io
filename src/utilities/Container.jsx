const Container = ({children, bg_color="gray", styles=null}) => {
    const color_variants = {
        gray: "bg-gray-200 hover:bg-gray-300",
        red: "bg-red-300 hover:bg-red-400"
    };

    return (
        <div
            className={`rounded-lg m-1 p-1 w-[99%] ${color_variants[bg_color]} ${styles}`}
        >
            {children}
        </div>
    )
}

export default Container

const Container = ({children, bg_color="bg-gray-200", styles=null}) => {
    let color_intensity = bg_color.match(/(\d+)/);
    let bg_hover = "hover:".concat(bg_color.replace(color_intensity[0], String(Number(color_intensity[0]) + 100)));

    return (
        <div
            className={`rounded-lg m-1 p-1 w-[99%] ${bg_color} ${bg_hover} ${styles}`}
        >
            {children}
        </div>
    )
}

export default Container

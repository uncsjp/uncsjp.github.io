const Container = ({children, bg_color="bg-gray-200"}) => {
    let color_intensity = bg_color.match(/(\d+)/);
    let bg_hover = "hover:".concat(bg_color.replace(color_intensity[0], String(Number(color_intensity[0]) + 100)));

    return (
        <div
            className={"justify-items-stretch rounded-lg mt-2 mb-2 ml-1 mr-1 p-1 w-99".concat(" ", bg_color, " ", bg_hover)}
        >
            {children}
        </div>
    )
}

export default Container

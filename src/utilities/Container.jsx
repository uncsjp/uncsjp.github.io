const Container = ({children,
    display_bg_hover="true",
    bg_color="gray",
    border_color="none",
    shadow="none",
    display="block",
    direction="none",
    width="99",
    min_width="none",
    justify="none",
    padding="1",
    margin="m1",
    }) => {

    const margin_variants = {
        mb0: "mb-0",
        m1: "m-1"
    }

    const padding_variants = {
        0: "",
        1: "p-1"
    }

    const bg_color_variants = {
        true: {
            gray: "bg-gray-200 hover:bg-gray-300",
            red: "bg-red-300 hover:bg-red-400"
        },
        false: {
            gray: "bg-gray-200",
            red: "bg-red-300"
        }
    };

    const border_variants = {
        gray: "border-gray-300 border-solid border-5",
        red: "border-red-300 border-solid border-5",
        none: ""
    }

    const shadow_variants = {
        md: "shadow-md",
        none: ""
    }

    const direction_variants = {
        block: "block",
        flex: "flex",
        inline: "inline"
    }

    const flex_direction_variants = {
        row: "flex-row",
        column: "flex-col",
        none: ""
    }

    const width_variants = {
        99: "w-[99%]",
        auto: "w-auto"
    }

    const min_width_variants = {
        160: 'min-w-[160px]',
        none: ""
    }

    const justify_variants = {
        between: "justify-between",
        none: "none"
    }


    return (
        <div
            className={`rounded-lg
                ${padding_variants[padding]}
                ${width_variants[width]}
                ${min_width_variants[min_width]}
                ${bg_color_variants[display_bg_hover][bg_color]}
                ${border_variants[border_color]}
                ${shadow_variants[shadow]}
                ${direction_variants[display]}
                ${flex_direction_variants[direction]}
                ${justify_variants[justify]}
                ${margin_variants[margin]}`}
        >
            {children}
        </div>
    )
}

export default Container

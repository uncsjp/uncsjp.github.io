import Container from "./Container"

const TextBox = ({children, text = null, header = null, header_size = "2xl", text_size="base", bg_color="gray", styles=null}) => {
    return (
        <Container
            bg_color={`${bg_color}`}
            styles={`justify-items-stretch ${styles}`}
            shadow="md"
        >
            <div className={`m-3 text-${header_size} text-center ${header ? 'block': 'hidden'}`}>{header}</div>
            <div className={`m-1 text-${text_size} ${text ? 'block': 'hidden'}`}>{text}</div>
            {children}
        </Container>
    )
}

export default TextBox

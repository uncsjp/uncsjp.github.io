const TextBox = ({children, text = null, header = null, header_size = "4xl", text_size="base" }) => {
    return (
        <div
            className="justify-items-stretch rounded-lg
      mt-1 mb-1 ml-1 mr-1 p-1
      bg-gray-200 hover:bg-gray-300 w-99"
        >
            <div className={`m-3 text-${header_size} text-center ${header ? 'block': 'hidden'}`}>{header}</div>
            <div className={`m-1 text-${text_size} ${text ? 'block': 'hidden'}`}>{text}</div>
            {children}
        </div>
    )
}

export default TextBox

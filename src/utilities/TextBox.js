const TextBox = ({ text = null, header = null }) => {
    return (
        <div
            className="justify-items-stretch rounded-lg
      mt-2 mb-2 ml-1 mr-1 p-1
      bg-gray-200 hover:bg-gray-300 w-99"
        >
            <div className="m-3 text-4xl text-center">{header}</div>
            <div className="m-1">{text}</div>
        </div>
    )
}

export default TextBox

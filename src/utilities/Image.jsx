const Image = ({ url, text = null }) => {
    return (
        <div
            className="
            m-1
            text-2xl text-center font-bold
            rounded-lg bg-cover bg-center h-64 w-[99%]
            justify-center
        "
            style={{ backgroundImage: `url(${url})` }}
        >
            <div
                className="text-center"
                style={text ? { display: 'block' } : { display: 'none' }}
            >
                {text}
            </div>
        </div>
    )
}

export default Image

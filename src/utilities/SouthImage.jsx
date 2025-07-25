import southImage from '../img/output-onlinepngtools.png'

const SouthImage = () => {
    return (
        <div
            className="
        p-1
        grid grid-cols-5 gap-2
        text-2xl text-center font-bold
        rounded-lg bg-cover bg-center h-64 w-[99%]
        shadow-md"
            style={{
                backgroundImage: `url(${southImage})`,
                gridTemplateRows: 'repeat(7, 1fr)',
            }}
        >
            <div className="text-left col-start-2 col-span-3 row-start-2">
                Chapel Hill Students
            </div>

            <div className="text-center italic col-start-2 col-span-3 row-start-3">
                for the liberation
            </div>

            <div className="text-right text-pretty col-start-2 col-span-3 row-start-4">
                of Palestine!
            </div>
        </div>
    )
}

export default SouthImage

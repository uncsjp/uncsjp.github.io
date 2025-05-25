import SouthImage from '../utilities/SouthImage'
import TextBoxt from '../utilities/TextBox'

const AboutUs = () => {
    return (
        <div className="w-full">
            <div className='flex justify-center'>
                <SouthImage />
            </div>
            <div className="w-full">
                <TextBoxt header={'تشابل هيل لتحرير فلسطين'} />
            </div>
        </div>
    )
}

export default AboutUs

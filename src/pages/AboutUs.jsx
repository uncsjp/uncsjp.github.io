import useLocalTextAsTextboxes from '../hooks/useLocalTextAsTextboxes'
import SouthImage from '../utilities/SouthImage'
import TextBoxt from '../utilities/TextBox'
import { useState, useEffect} from 'react'

const AboutUs = () => {
    const [text_boxes, set_text] = useState([<></>])
    const [text_boxes_map, set_text_map] = useState(<></>)

    useLocalTextAsTextboxes({section: '--About Us--', setter: set_text})
    useEffect(() => {
        let intermediate = text_boxes.map((box) => {
            return (
                <div className="w-full mt-3 mb-3">
                    {box}
                </div>
            )
        })
        set_text_map(intermediate)
    }, [text_boxes])

    return (
        <div className="w-full">
            <div className='flex justify-center mt-2 mb-2'>
                <SouthImage />
            </div>
            <div className="w-full justify-center mt-4 mb-4">
                <TextBoxt header={'تشابل هيل لتحرير فلسطين'} />
            </div>
            <div className="w-full justify-center">
                {text_boxes_map}
            </div>
        </div>
    )
}

export default AboutUs

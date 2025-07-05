import Image from '../utilities/Image'
import TextBox from '../utilities/TextBox'
import useLocalTextAsTextboxes from '../hooks/useLocalTextAsTextboxes'
import { useState, useEffect } from 'react'

const PointsOfUnity = () => {
    const [text_boxes, set_text] = useState(
        <TextBox
            text={'Loading...'}
            header={'Loading...'}
            className="animate-pulse"
        />
    )

    useLocalTextAsTextboxes({ section: '--Points of Unity--', setter: set_text })
    useEffect(() => {}, [text_boxes])

    return (
        <div
            className="
            flex flex-col md:flex-row
            w-full
            justify-center
        "
        >
            {/* TODO: refactor to be dynamic */}
            <div className="contents md:flex md:flex-col">
                {text_boxes[0]}
                <Image key={10} url={'protest_from_south.jpg'} />
                {text_boxes[1]}
                {text_boxes[4]}
            </div>
            <div className="contents md:flex md:flex-col">
                {text_boxes[2]}
                <Image key={20} url={'peoples_grad.jpg'} />
                {text_boxes[3]}

            </div>
        </div>
    )
}

export default PointsOfUnity

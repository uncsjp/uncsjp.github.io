import Image from '../utilities/Image'
import TextBox from '../utilities/TextBox'
import useLocalText from '../hooks/useLocalText'
import { useState } from 'react'

const PrinciplesAndGoals = () => {
    const [text_boxes, set_text] = useState(
        <TextBox
            text={'Loading...'}
            header={'Loading...'}
            className="animate-pulse"
        />
    )

    useLocalText({ section: 'principles_and_goals', setter: set_text })

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
            </div>
            <div className="contents md:flex md:flex-col">
                {text_boxes[2]}
                <Image key={20} url={'peoples_grad.jpg'} />
                {text_boxes[3]}
                {text_boxes[4]}
            </div>
        </div>
    )
}

export default PrinciplesAndGoals

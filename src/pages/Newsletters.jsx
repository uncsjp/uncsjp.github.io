import { useState } from 'react'
import TextBox from '../utilities/TextBox'

const NewsletterWait = ({ loaded }) => {
    if (!loaded) {
        return (
            <div
                className="
                animate-pulse
			"
            >
                <TextBox text={'Fetching Newsletters from Mailchimp...'} />
            </div>
        )
    } else {
        return <div style={{ display: 'none' }}></div>
    }
}

const Newsletters = () => {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className="flex justify-center w-full">
            <div
                className="
          	mt-2 mb-2 ml-1 mr-1 p-2
          	rounded-lg
          	flex justify-center
			w-[50%]
        "
            >
                <iframe
                    className="rounded-lg border border-black"
                    src="https://us17.campaign-archive.com/home/?u=73a81bd71c0831f152215407f&id=f8de748d7d"
                    title="newsletters"
                    height="800px"
                    width="550px"
                    onLoad={() => setLoaded(true)}
                    style={{
                        display: loaded ? 'block' : 'none',
                    }}
                />
                <NewsletterWait loaded={loaded} />
            </div>
        </div>
    )
}

export default Newsletters

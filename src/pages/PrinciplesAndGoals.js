import TextBox from "../utilities/TextBox";
import Image from "../utilities/Image";

const PrinciplesAndGoals = () => {
    return (
        <div className="
            flex flex-col md:flex-row
            w-full
            justify-center
        ">
            <div className="flex flex-col w-full">
                <TextBox header={"a"} text={"b"}/>
                <TextBox header={"a"} text={"b"}/>
                <Image url={"protest_from_south.jpg"}/>

            </div>
            <div className="flex flex-col w-full">
                <TextBox header={"a"} text={"b"}/>
                <Image url={"peoples_grad.jpg"} />
            </div>
        </div>
    );
};

export default PrinciplesAndGoals;

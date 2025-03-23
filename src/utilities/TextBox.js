const TextBox = ({text}) => {
    return (
      <div className="justify-items-stretch rounded mt-2 mb-2 ml-1 mr-1 bg-gray-200 w-99">
        <div className="m-1">
          {text}
        </div>
      </div>
    );
};

export default TextBox;

const FilterInput = ({placeholder, setter}) => {
    return (
        <input
            className={`
                rounded-lg bg-gray-200
                border-red-300 border-solid border-5
                m-1 pl-1
                focus:border-red-400
                placeholder:italic placeholder:opacity-30
                w-fit
            `}
            placeholder={placeholder}
            onChange={(e) => setter(e.target.value)}
            type="text"
        />
    )
}

export default FilterInput;

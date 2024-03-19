import Feature from "./Feature";


const Option = ({ option }) => {

    const { name, price, features } = option;
    return (
        <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
            <h2>
                <span className="text-6xl">{price}</span>
                <span className="text-2xl"> /mon</span>
            </h2>
            <h4 className="text-3xl">{name} </h4>
            <div className="pl-6 mb-12 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature} />)
                }
            </div>
            <button className="bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900">
                Buy Now
            </button>
        </div>
    )
}

export default Option

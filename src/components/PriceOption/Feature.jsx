import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
    console.log(feature);
    return (
        <div>
            <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500"  /> 
                {feature}
            </p>
        </div>
    )
}

export default Feature

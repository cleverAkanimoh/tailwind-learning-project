import { useState } from "react";
import { BsXCircle, BsSearch, BsHouse } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";

export default function () {
	const [value, setValue] = useState({
		position: "",
		country: "",
		location: "",
	});
	const [clearValue, setClearValue] = useState("");

	const clearAllInputValue = () => {
		
	}

	return (
		<article className="w-12/12 lg:w-2/2 lg:p-10 p-6 bg-blue-100 bg-opacity-50 rounded">
			<div className="bg-white bg-opacity-25 lg:justify-between p-6 md:flex-row flex flex-col items-center justify-center rounded">
				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<BsSearch className=" text-gray-600" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-400"
						name="position"
						value={value.position}
						placeholder="Position"
					/>
					<BsXCircle onClick={clearAllInputValue} className="cursor-pointer text-gray-600" />
				</div>

				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<BsHouse className=" text-gray-600" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-400"
						name="country"
						value={value}
						placeholder="Country"
					/>
					<BsXCircle onClick={clearAllInputValue} className="cursor-pointer text-gray-600" />
				</div>

				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<VscLocation className=" text-gray-600" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-400"
						name="location"
						value={value}
						placeholder="Location"
					/>
					<BsXCircle onClick={clearAllInputValue} className="cursor-pointer text-gray-600" />
				</div>

				<button className="bg-blue-400 text-white w-20 h-8 md:w-28 md:h-12 rounded">
					search
				</button>
			</div>
		</article>
	);
}

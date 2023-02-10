import { useState } from "react";
import { BsXCircle, BsSearch, BsHouse } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";

export default function () {
	const [value, setValue] = useState({
		position: "UI design",
		country: "name it",
		location: "USA",
	});

	const updateInputValue = (e) => {
		const { name, value } = e.target
		setValue(prevValue => ({
			...prevValue,
			[name]: value
		}))
	}
	const clearAllInputValue = (e) => {
		const { id } = e.target
		setValue(prevValue => ({
			...prevValue,
			[id]: ""
		}))
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
						onChange={updateInputValue}
					/>
					<BsXCircle onClick={clearAllInputValue} id="position" className="cursor-pointer text-gray-600" />
				</div>

				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<BsHouse className=" text-gray-600" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-400"
						name="country"
						value={value.country}
						placeholder="Country"
						onChange={updateInputValue}
					/>
					<BsXCircle onClick={clearAllInputValue} id="country" className="cursor-pointer text-gray-600" />
				</div>

				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<VscLocation className=" text-gray-600" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-400"
						name="location"
						value={value.location}
						placeholder="Location"
						onChange={updateInputValue}
					/>
					<BsXCircle onClick={clearAllInputValue} id="location" className="cursor-pointer text-gray-600" />
				</div>

				<button className="bg-blue-400 text-white w-20 h-8 md:w-28 md:h-12 rounded">
					search
				</button>
			</div>
		</article>
	);
}

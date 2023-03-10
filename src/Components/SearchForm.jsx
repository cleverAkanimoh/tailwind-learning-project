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
		const { id } = e.currentTarget
		setValue(prevValue => ({
			...prevValue,
			[id]: ""
		}))
	}

	return (
		<article className="w-full mt-2 lg:p-10 p-5 bg-gray-200 bg-opacity-50 rounded">
			<div className="bg-white bg-opacity-25 p-2 md:flex-row flex flex-col items-center justify-center rounded">
				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<BsSearch className="text-gray-500" />
					<input
						type="text"
						className="border-none ml-1 mr-1 text-blue-500 rounded"
						name="position"
						value={value.position}
						placeholder="Position"
						onChange={updateInputValue}
					/>
					<button onClick={clearAllInputValue} id="position" className="cursor-pointer text-gray-600">
						<BsXCircle />
					</button>
				</div>

				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<BsHouse className=" text-gray-500" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-500"
						name="country"
						value={value.country}
						placeholder="Country"
						onChange={updateInputValue}
					/>
					<button
						onClick={clearAllInputValue}
						id="country"
						className="cursor-pointer text-gray-500"
					>
						<BsXCircle />
					</button>
				</div>

				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<VscLocation className=" text-gray-500" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-500"
						name="location"
						value={value.location}
						placeholder="Location"
						onChange={updateInputValue}
					/>
					<button
						onClick={clearAllInputValue}
						id="location"
						className="cursor-pointer text-gray-500">
						<BsXCircle />
					</button>
				</div>

				<button className="hover:bg-sky-700  bg-blue-400 text-white w-20 h-8 md:w-28 md:h-12 rounded">
					search
				</button>
			</div>

			<div className="text-gray-700 flex flex-col justify-center items-center p-4 md:p-6 md:flex-row">
				<label className="mb-2 lg:mr-8 md:mb-0 md:mr-6">Sort by: 
					<select name="sortField" className="capitalize bg-transparent">
						<option value="relevance">relevance</option>
						<option value="inclusive">inclusive</option>
						<option value="starts with">starts with</option>
						<option value="contains">contains</option>
					</select>
				</label>

				<label className="mb-2 lg:mr-8 md:mb-0 md:mr-6">Type: 
					<select name="typeField" className="capitalize bg-transparent">
						<option value="full">full-time</option>
						<option value="part">part-time</option>
					</select>
				</label>

				<label  className="mb-2 lg:mr-8 md:mb-0 md:mr-6">Level: 
					<select name="levelField" className="capitalize bg-transparent">
						<option value="senior">senior</option>
						<option value="junior">junior</option>
						<option value="intermediate">intermediate</option>
						<option value="advance">advance</option>
					</select>
				</label>

				<label className="text-gray-500 cursor-pointer">clear all</label>
			</div>
		</article>
	);
}

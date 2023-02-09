import { BsXCircle, BsSearch, BsHouse } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";

export default function () {
	return (
		<article className="lg:ml-20 lg:mr-20 lg:p-10 md:m-6 lg:m-10 m-3 p-6 bg-blue-100 bg-opacity-25 rounded">
			<div className="bg-white bg-opacity-25 lg:justify-between p-6 md:flex-row flex flex-col items-center justify-center rounded">
				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<BsSearch className=" text-gray-600" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-400"
						name="position"
						value="value here"
						placeholder="Position"
					/>
					<BsXCircle className="cursor-pointer text-gray-600" />
				</div>

				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<BsHouse className=" text-gray-600" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-400"
						name="country"
						placeholder="Country"
					/>
					<BsXCircle className="cursor-pointer text-gray-600" />
				</div>

				<div className="flex items-center mb-4 md:mb-0 md:mr-5">
					<VscLocation className=" text-gray-600" />
					<input
						type="text"
						className="border-none ml-1 mr-2 text-blue-400"
						name="location"
						placeholder="Location"
					/>
					<BsXCircle className="cursor-pointer text-gray-600" />
				</div>

				<button className="bg-blue-400 text-white w-20 h-8 md:w-28 md:h-12 rounded">
					search
				</button>
			</div>
		</article>
	);
}

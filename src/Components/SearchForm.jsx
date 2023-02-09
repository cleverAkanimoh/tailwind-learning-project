import { BsXCircle, BsSearch, BsHouse } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";

export default function () {
	return (
		<article className="w-1/2 border">
			<form className="sm:flex">
				<div className="flex">
					<BsSearch className="" />
					<input type="text" name="position" placeholder="Position" />
					<BsXCircle className="cursor-pointer" />
				</div>

				<div className="flex">
					<BsHouse className="" />
					<input type="text" name="country" placeholder="Country" />
					<BsXCircle className="cursor-pointer" />
				</div>

				<div className="flex">
					<VscLocation className="" />
					<input type="text" name="location" placeholder="Location" />
					<BsXCircle className="cursor-pointer" />
				</div>

				<button>search</button>
			</form>
		</article>
	)
}
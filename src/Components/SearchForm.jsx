import { BsXCircle, BsSearch, BsHouse } from "react-icons/bs"

export default function () {
	return (
		<article>
			<form>
				<div>
					<BsSearch />
					<BsXCircle />
				</div>

				<div>
					<BsHouse />
					<BsXCircle />
				</div>

				<div>
					<BsXCircle />
				</div>

				<button>search</button>
			</form>
		</article>
	)
}
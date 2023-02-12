import { BsClock } from "react-icons/bs"
export default function ({ works }) {
    return (
        <article className="w-full p-1 pt-5 mt-5 mb-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-6 place-items-center">
            {
                works.map(work => {
                    const { id, title, location, desc, companyName, url } = work;

                    return (
                        <div key={id} className="w-full border p-3 rounded shadow">
                            <div className="border-b-2 pb-2 mb-2">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-extrabold text-black">{title}</h2>
                                    <span className="flex items-center text-sm text-gray-400">
                                        <BsClock />&nbsp;Now
                                    </span>
                                </div>
                                <span className="font-thin text-sm text-gray-500">{location}</span>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-gray-600 mb-3 mt-2">{desc}</p>
                                <span className="font-extrabold text-sm mb-3">{companyName}</span>
                                <a href={url} className="hover:shadow border rounded font-extrabold grid place-items-center p-2">Apply Now</a>
                            </div>
                        </div>
                    )
                })
            }
        </article>
    )
}
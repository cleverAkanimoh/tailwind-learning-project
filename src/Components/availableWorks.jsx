import { BsClock } from "react-icons/bs"
export default function ({ works }) {
    return (
        <article className="p-2 pt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-5 place-items-center">
            {
                works.map(work => {
                    const { id, title, location, desc, companyName, url } = work;

                    return (
                        <div key={id} className="w-64 border p-3 rounded">
                            <div>
                                <div className="flex justify-between items-center">
                                    <h2 className="font-extrabold">{title}</h2>
                                    <span className="flex items-center text-gray-600">
                                        <BsClock />Now
                                    </span>
                                </div>
                                <span>{location}</span>
                            </div>

                            <div className="flex flex-col">
                                <p>{desc}</p>
                                <span>{companyName}</span>
                                <a href={url} className="border rounded font-extrabold grid place-items-center p-2">Apply Now</a>
                            </div>
                        </div>
                    )
                })
            }
        </article>
    )
}
import { BsClock } from "react-icons/bs"
export default function ({ works }) {
    return (
        <article className="w-full">
            {
                works.map(work => {
                    const { id, title, location, desc, companyName, url } = work;

                    return <div key={id}>
                        <div>
                            <div>
                                <h2>{title}</h2>
                                <span>
                                    <BsClock />
                                </span>
                            </div>
                            <span>{location}</span>
                        </div>

                        <div>
                            <p>{desc}</p>
                            <span>{companyName}</span>
                            <a href={url}></a>
                        </div>
                    </div>
                })
            }
        </article>
    )
}
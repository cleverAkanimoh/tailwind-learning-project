import { useState } from "react";
import { VscMenu } from "react-icons/vsc";

export default function () {
    const [visibility, setVisibility] = useState(false)

    const show = "translate-y-0 transition mt-4 md:mt-0 md:flex justify-center items-center"
    const hidden = "translate-y-full hidden transition md:mt-0 md:flex justify-center items-center"

    const toggleNavList = () => {
        setVisibility(prevState => !prevState)
    }

    return (
        <nav className="w-full sm:p-5 md:p-8 p-3 flex items-center justify-center capitalize">
            <div className="w-full md:flex lg:w-10/12">
                <div className="sm:w-full flex items-center justify-between">
                    <h3 className="lg:text-3xl md:text-2xl text-xl"><strong className="text-blue-700">Job</strong><span className="text-blue-600 text-">Search</span></h3>
                    <button onClick={toggleNavList} className="md:hidden cursor-pointer p-3 border rounded">
                        <VscMenu />
                    </button>
                </div>

                <ul className={visibility ? show : hidden}>
                    <li className="md:mr-4 p-1 hover:text-blue-700 w-auto text-gray-500 font-sans cursor-pointer">jobs</li>
                    <li className="md:mr-4 p-1 hover:text-blue-700 w-auto text-gray-500 font-sans cursor-pointer">companies</li>
                    <li className="md:mr-4 p-1 hover:text-blue-700 w-auto text-gray-500 font-sans cursor-pointer">about</li>
                    <li className="md:mr-4 p-1 hover:text-blue-700 w-auto text-gray-500 font-sans cursor-pointer">contact</li>
                    <li className="md:mr-4 p-1 hover:text-blue-700 w-auto text-gray-500 font-sans cursor-pointer">blog</li>
                    <li className="md:mr-4 p-1 hover:text-blue-700 w-auto text-gray-500 font-sans cursor-pointer">login</li>
                    <li className="md:mr-4 p-1 hover:text-blue-700 w-auto text-gray-500 font-sans cursor-pointer">register</li>
                </ul>
            </div>
        </nav>
    )
}
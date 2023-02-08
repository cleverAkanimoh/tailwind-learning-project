
export default function () {
    return (
        <nav className="sm:w-full p-3 capitalize">
            <div className="sm:flex items-center sm:justify-between">
                <div className="sm:w-full flex justify-between">
                    <h3><strong className="text-blue-700">Job</strong><span className="text-blue-700">Search</span></h3>
                    <h4 className="sm:hidden">menu</h4>
                </div>
                <ul className="sm:w-screen mt-3 sm:flex">
                    <li className="sm:pr-3 text-gray-600 font-sans cursor-pointer">jobs</li>
                    <li className="sm:pr-3 text-gray-600 font-sans cursor-pointer">companies</li>
                    <li className="sm:pr-3 text-gray-600 font-sans cursor-pointer">about</li>
                    <li className="sm:pr-3 text-gray-600 font-sans cursor-pointer">contact</li>
                    <li className="sm:pr-3 text-gray-600 font-sans cursor-pointer">blog</li>
                    <li className="sm:pr-3 text-gray-600 font-sans cursor-pointer">login</li>
                    <li className="sm:pr-3 text-gray-600 font-sans cursor-pointer">register</li>
                </ul>
            </div>
        </nav>
    )
}

export default function () {
    return (
        <nav className="sm:w-full sm:p-7 p-3 capitalize border">
            <div className="sm:w-full sm:flex border">
                <div className="sm:w-full flex sm:flex justify-between">
                    <h3 className="sm:text-lg"><strong className="text-blue-700">Job</strong><span className="text-blue-700">Search</span></h3>
                    <h4 className="sm:hidden">menu</h4>
                </div>
                <ul className="sm:w-screen sm:flex justify-center border">
                    <li className="sm:pr-3 text-gray-500 font-sans cursor-pointer">jobs</li>
                    <li className="sm:pr-3 text-gray-500 font-sans cursor-pointer">companies</li>
                    <li className="sm:pr-3 text-gray-500 font-sans cursor-pointer">about</li>
                    <li className="sm:pr-3 text-gray-500 font-sans cursor-pointer">contact</li>
                    <li className="sm:pr-3 text-gray-500 font-sans cursor-pointer">blog</li>
                    <li className="sm:pr-3 text-gray-500 font-sans cursor-pointer">login</li>
                    <li className="sm:pr-3 text-gray-500 font-sans cursor-pointer">register</li>
                </ul>
            </div>
        </nav>
    )
}
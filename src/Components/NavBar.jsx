
export default function () {
    return (
        <nav className="w-full sm:p-5 md:p-8 p-3 capitalize">
            <div className="sm:w-full md:flex">
                <div className="sm:w-full flex justify-between">
                    <h3 className="lg:text-3xl md:text-2xl text-xl md:ml-15 lg:ml-20"><strong className="text-blue-700">Job</strong><span className="text-blue-700">Search</span></h3>
                    <h4 className="md:hidden cursor-pointer">menu</h4>
                </div>
                <ul className="w-full mt-4 md:mt-0 md:flex justify-center">
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
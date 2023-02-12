export default function() {
    return (
        <article className="w-full grid place-items-center mb-8 mt-8">
            <div className="w-full bg-gray-200 bg-opacity-75 p-5 md:p-14 flex flex-col md:flex-row md:justify-between sm:w-full lg:w-full items-center justify-center rounded">
                <div>
                    <h2 className="font-extrabold sm:text-lg md:text-xl text-blue-600">Ready to switch a career?</h2>
                    <h4 className="font-extrabold text-sm sm:text-base md:text-lg">Let's get started!</h4>
                </div>
                <div className="mt-5 md:mt-0">
                    <a href="#" className="border-blue-500 shadow text-blue-600 border p-2 text-sm lg:text-base lg:p-4 hover:bg-sky-600 hover:text-white rounded">Get Started</a>
                </div>
            </div>
        </article>
    )
}
export default function App() {
  return (
    <div className="w-screen h-screen">
      <h1 className="text-3xl font-bold w-screen">
        Hello world!
      </h1>
      <div className="h-screen sm:flex flex-wrap">
        <div className="flex w-1/3 h-1/3">
          <div className="bg-teal-100 m-2 w-full flex justify-center items-center">A</div>
        </div>
        <div className="flex w-1/3 h-1/3">
          <div className="bg-teal-200 m-2 w-full flex justify-center items-center">B</div>
        </div>
        <div className="flex w-1/3 h-1/3">
          <div className="bg-teal-300 m-2 w-full flex justify-center items-center">C</div>
        </div>
        <div className="flex w-1/3 h-1/3">
          <div className="bg-teal-400 m-2 w-full flex justify-center items-center">D</div>
        </div>
        <div className="flex w-1/3 h-1/3">
          <div className="bg-teal-500 m-2 w-full flex justify-center items-center">E</div>
        </div>
        <div className="flex w-1/3 h-1/3">
          <div className="bg-teal-600 m-2 w-full flex justify-center items-center">F</div>
        </div>
        <div className="flex w-1/3 h-1/3">
          <div className="bg-teal-700 m-2 w-full flex justify-center items-center">G</div>
        </div>
        <div className="flex w-1/3 h-1/3">
          <div className="bg-teal-800 m-2 w-full flex justify-center items-center">H</div>
        </div>
        <div className="flex w-1/3 h-1/3">
          <div className="bg-teal-900 m-2 w-full flex justify-center items-center">I</div>
        </div>
      </div>

      <div>
        <label class="text-gray-700 text-sm font-bold select-none" for="full_name">
          Full Name
        </label>
        <input
          id="full_name"
          placeholder="Enter your full name"
          class="mt-2 shadow border rounded-lg w-4/6 px-3 py-2 text-gray-700 focus:shadow-outline focus:bg-blue-100 placeholder-indigo-300" />
        <button class="mt-2 px-3 py-2 bg-blue-900 text-blue-100 rounded-lg">Save</button>
      </div>

      <div className="w-screen bg-red-500">
        <div className="w-9 h-7 bg-blue-100">Text</div>
        <div className="w-5 h-6 bg-blue-200">Text</div>
        <div className="w-5 h-6 bg-blue-300">Text</div>
        <div className="w-5 h-6 bg-blue-400">Text</div>
        <div className="w-5 h-6 bg-blue-500">Text</div>
        <div className="w-5 h-6 bg-blue-600">Text</div>
        <div className="w-5 h-6 bg-blue-700">Text</div>
        <div className="w-5 h-6 bg-blue-800">Text</div>
        <div className="w-5 h-6 bg-blue-900">Text</div>
        <h1 class="capitalize text-xl text-gray-900">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        {/* <!-- Paragraph styling with 1.5 line heights & letter spacing --> */}
        <p class="mt-3 leading-loose tracking-wide">
          Lorem ipsum dolor sit amet... [trucated]
        </p>
        {/* <!-- Treated like a quote with a background and plenty of padding. Italic title --> */}
        <div class="m-2 p-6 bg-blue-900 text-blue-200">
          <p>
            Lorem ipsum dolor sit amet... [truncated]
          </p>
          <p class="mt-3 text-gray-400">- Victor Gonzalez,
            <span class="italic">instructor</span>
          </p>
        </div>
        {/* <!-- Call to action button, blue with good padding and uppercase --> */}
        <button class="uppercase bg-green-500 text-red-100 px-4 py-3">Enroll Now</button>
        {/* <!-- blue background, rounded, thick left border --> */}
        <div><button class="m-4 bg-blue-800 py-2 px-4 text-gray-400
 text-sm rounded-lg border-l-8 border-blue-700">Submit</button></div>
        {/* <!-- Red text, /outlined --> */}
        <div><button class="m-4 border-2 border-red-500 text-red-500
 rounded px-3 py-1">Cancel</button></div>
        {/* <!-- light Indigo background, bottom border, indigo text --> */}
        <div><button class="m-4 bg-indigo-200 border-b-4 border-t-4
 border-indigo-800 px-4 py-1">Save</button></div>
        {/* <!-- Thick rounded, lots of padding, large button --> */}
        <div><button class="m-4 rounded-full border-4 px-16 py-3
 uppercase font-bold text-sm bg-orange-600
 border-orange-800">Buy Now</button></div>
        {/* <!-- Outlined, serif font, uppercase, rounded --> */}
        <div><button class="m-4 border font-serif text-xs uppercase
 rounded-lg p-2">Send Postcard</button></div>

      </div>
    </div>
  )
}
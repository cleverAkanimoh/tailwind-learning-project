import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

export default function () {
  return (
    <footer className="w-full border grid place-items-center p-2 sm:pt-6 sm:pb-6 text-blue-300 text-sm">
      <div className="w-full bg-blue-800 rounded w-full md:w-11/12 xl:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-8">
        <div className="m-3">
          <h3 className="mb-2 lg:text-3
        2xl md:text-xl text-lg "><strong className="text-white font-extrabold">Job</strong><span className="text-blue-100 font-light">Search</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia commodi.</p>
        </div>

        <div className="m-3">
          <h3 className="mb-2 font-bold text-base text-white">Company</h3>
          <ul>
            <li className="mb-2 cursor-pointer">About Us</li>
            <li className="mb-2 cursor-pointer">Features</li>
            <li className="mb-2 cursor-pointer">News</li>
            <li className="mb-2 cursor-pointer">FAQ</li>
          </ul>
        </div>

        <div className="m-3">
          <h3 className="mb-2 font-bold text-base text-white">Resources</h3>
          <ul>
            <li className="mb-2 cursor-pointer">Account</li>
            <li className="mb-2 cursor-pointer">Support Center</li>
            <li className="mb-2 cursor-pointer">Feedback</li>
            <li className="mb-2 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="m-3">
          <h3 className="mb-2 font-bold text-base text-white">Support</h3>
          <ul>
            <li className="mb-2 cursor-pointer">Events</li>
            <li className="mb-2 cursor-pointer">Promo</li>
            <li className="mb-2 cursor-pointer">Req Demo</li>
            <li className="mb-2 cursor-pointer">Career</li>
          </ul>
        </div>

        <div className="m-3">
          <h3 className="mb-2 font-bold text-base text-white">Contact Info</h3>
          <a href="mailto:crushclever1@gmail.com">crushclever1@gmail.com</a>
          <div className="flex mt-2">
            <a href="https://instagram.com/clever.akanimoh" className="bg-white p-1 rounded"><FaInstagram className="text-blue-700" /></a>
            <a href="https://www.facebook.com/profile.php?id=100070843014275" className="bg-white p-1 rounded ml-2"><FaFacebook className="text-blue-700" /></a>
            <a href="https://twitter.com/cleverAkanimoh3?t=-qE0RG0SidwAMXI3jhi7GQ&s=09
" className="bg-white p-1 rounded ml-2"><FaTwitter className="text-blue-700" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
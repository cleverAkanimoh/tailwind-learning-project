import Footer from "./Components/Footer";
import MiddleContent from "./Components/MiddleContent";
import NavBar from "./Components/NavBar";

export default function () {
  return (
    <main className="grid place-items-center w-full">
      <div className="w-full">
        <NavBar />
        <MiddleContent />
        <Footer />
      </div>
    </main>
  )
}
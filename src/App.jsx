import Footer from "./Components/Footer";
import MiddleContent from "./Components/MiddleContent";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <MiddleContent />
      <Footer />
    </main>
  )
}
import Footer from "./Components/Footer";
import MiddleContent from "./Components/MiddleContent";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <main className="w-full">
      <NavBar />
      <MiddleContent />
      <Footer />
    </main>
  )
}
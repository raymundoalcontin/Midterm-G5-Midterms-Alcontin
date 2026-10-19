
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">

      <Navbar />

      <Hero />

      <Features />
      
      <Footer />

    </div>
  );
}

export default App;

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

function App() {

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">

      <Navbar />

      <Hero />

      <Features />
      

      <footer className="mt-auto bg-[#F3E6D5] px-20 py-6 text-center text-xl">
        <p>Maroon UI is free and open source.</p>
      </footer>
    </div>
  );
}

export default App;
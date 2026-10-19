
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      <Navbar />
      <Hero />
      <main className="grid grid-cols-3 gap-8 px-20">
        <div className="rounded-xl bg-[#F3E6D5] p-6">
          <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
            Free
          </span>
          <h3 className="mt-8 text-3xl font-bold">Open source</h3>
          <p className="mt-3 text-xl text-[#000000]">Read the code and use it in any project.</p>
        </div>
        <div className="rounded-xl bg-[#F3E6D5] p-6">
          <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
            Small
          </span>
          <h3 className="mt-8 text-3xl font-bold">Lightweight</h3>
          <p className="mt-3 text-xl text-[#000000]">Import only the components the page uses.</p>
        </div>
        <div className="rounded-xl bg-[#F3E6D5] p-6">
          <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
            Simple
          </span>
          <h3 className="mt-8 text-3xl font-bold">Easy to learn</h3>
          <p className="mt-3 text-xl text-[#000000]">Every component takes a few plain props.</p>
        </div>
      </main>

      <footer className="mt-auto bg-[#F3E6D5] px-20 py-6 text-center text-xl">
        <p>Maroon UI is free and open source.</p>
      </footer>
    </div>
  );
}

export default App;
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [stars, setStars] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [issues, setIssues] = useState(5);

  function handleStar() {
    setStars(stars + 1);
  }

  function handleDownload() {
    setDownloads(downloads + 1);
  }

  function handleReport() {
    setIssues(issues + 1);
  }

  function handleReset() {
    setStars(0);
    setDownloads(0);
    setIssues(5);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      <Navbar />

      <header className="px-20 pt-8 text-center">
        <h2 className="text-7xl font-bold">Build pages faster.</h2>
        <p className="mt-5 text-2xl text-[#000000]">An open-source component kit for React.</p>
        <p className="mt-2 text-xl text-[#000000]">Made by RAYMUNDO C. ALCONTIN JR.</p>
      </header>

      <div className="flex justify-center gap-4 py-6">
        <button
          className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleStar}
        >
          Star
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleDownload}
        >
          Download
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleReport}
        >
          Report issue
        </button>
        <button
          className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center gap-6 pb-8">
        <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
          <p className="text-4xl font-bold">{stars}</p>
          <p className="mt-1 text-lg text-[#000000]">Stars</p>
        </div>
        <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
          <p className="text-4xl font-bold">{downloads}</p>
          <p className="mt-1 text-lg text-[#000000]">Downloads</p>
        </div>
        <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
          <p className="text-4xl font-bold">{issues}</p>
          <p className="mt-1 text-lg text-[#000000]">Issues reported</p>
        </div>
      </div>

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
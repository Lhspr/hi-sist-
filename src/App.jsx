import "./index.css";
import Navbar from "./components/navbar/Navbar";
import bgMain from "./assets/bg/bg-hero.png";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-1 overflow-auto w-full flex-col items-center justify-center text-center relative px-30">
          <img
            src={bgMain}
            alt="Background utama"
            className="w-[300px] md:w-[400px] lg:w-[700px] z-0"
          />
          <h1 className="absolute text-white ms-70 -mt-35 text-tiny font-tulpen text-outline">
            MAKEUP ARTIST
          </h1>
          <h1 className="absolute text-white ms-80 -mt-10 text-tiny font-tulpen text-outline">
            DAN BEAUTY
          </h1>
        </main>
      </div>
    </>
  );
}

export default App;

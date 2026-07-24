import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505]">
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-violet-700/20 blur-[220px]" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[220px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-fuchsia-700/10 blur-[180px]" />

      <div className="relative z-10">
        <Navbar />
        <HeroBanner />
      </div>

    </div>
  );
}

export default Home;
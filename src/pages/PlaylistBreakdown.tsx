import { useNavigate } from "react-router-dom";
import Navbar from "../component/header";
import BottomNav from "../component/Bottom-nav";
import BackIcon from "../assets/back-icon.png"; // back icon
import blue from "../assets/play-blue.png";
import playlistImage from "../assets/images/cant-stop.png";

const PlaylistBreakdown = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen text-white">
      {/* Navbar */}
      <div className="hidden md:flex">
        <Navbar />
      </div>

      {/* Mobile Back Button */}
      <div className="absolute top-6 left-4 z-10 md:hidden">
        <button onClick={() => navigate(-1)} className="text-white">
          <img src={BackIcon} alt="Back" className="w-6 h-6" />
        </button>
      </div>

      {/* Content Section */}
      <section className="w-full flex flex-col items-center justify-start px-4 pt-24 pb-32">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight mb-2 stretch">
          PLAYLIST <br /> BREAKDOWN
        </h2>
        <p className="text-2xl text-[#00C6FF] mb-6 stretch">"Chill Vibes"</p>
        <div className="mb-6 text-sm text-gray-300 stretch bg-[#1f1f1f] w-full max-w-[700px] rounded-full px-2 py-1 items-center border border-white">
          <p className="text-center">Spotify To YT Music</p>
        </div>

        {/* Track List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[700px] mb-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-[#1f1f1f] rounded-md px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={playlistImage} // Placeholder image
                  alt="Track"
                  className="w-10 h-10 rounded"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    Looking For Love (Lee Dagger Dub Remix)
                  </span>
                  <span className="text-xs text-gray-400">Kristine W</span>
                </div>
              </div>
              <img src={blue} alt="Play" className="w-6 h-6" />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="w-[200px] sm:w-[180px] h-[45px] px-4 py-2 border border-white rounded-full text-white bg-transparent hover:bg-white hover:text-black transition">
            MINT PLAYLIST
          </button>
          <button className="w-[200px] sm:w-[220px] h-[45px] px-4 py-2 rounded-full bg-gradient-to-r from-[#00C6FF] via-[#285DBC] to-[#5808B9] text-white font-medium">
            OPEN IN YT MUSIC
            
          </button>
        </div>
      </section>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};

export default PlaylistBreakdown;

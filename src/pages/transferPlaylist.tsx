import Navbar from "../component/header";
import CircleArrow from "../assets/play_circle_24dp_E8EAED_FILL1_wght300_GRAD0_opsz24 1.png";
import CircleDown from "../assets/drop-down.png";
import BottomNav from "../component/Bottom-nav";

const TransferPlaylist = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-[#001f1f] px-4 py-10">
        <div className="w-full max-w-[918px]">
          {/* Title */}
          <h2 className="sm:text-5xl font-extrabold text-white text-center stretch mb-10 ">
            TRANSFER YOUR <br />
            PLAYLIST
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-6 w-full p-6 rounded-lg">
            {/* Playlist Name */}
            <div className="flex flex-col relative cursor-pointer">
              <label className="text-white mb-2">Original Playlist Name</label>
              <input
                type="text"
                placeholder="Playlist Name"
                readOnly
                className="bg-[#1f1f1f] text-white px-4 py-3 rounded-md pr-10 cursor-pointer "
              />
              <img
                src={CircleDown}
                alt="Dropdown Icon"
                className="absolute right-3 top-12 w-4 h-4 pointer-events-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white mb-2">Select target Platform</label>

              <div className="relative w-full">
                <select className="appearance-none cursor-pointer bg-[#1f1f1f] text-white px-4 py-3 rounded-md border border-[#00C6FF] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                  <option>Apple Music</option>
                  <option>Spotify</option>
                  <option>YouTube Music</option>
                  <option>Amazon Music</option>
                </select>

                {/* Custom dropdown icon */}
                <img
                  src={CircleDown}
                  alt="Dropdown"
                  className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button className="flex items-center justify-center cursor-pointer gap-[10px] w-[300px] max-w-full h-[50px] px-[10px] py-[10px] border border-[#00C6FF] rounded-[33px] bg-gradient-to-b from-[#00C6FF] via-[#285DBC] to-[#5808B9] text-white font-semibold text-center">
                TRANSFER PLAYLIST
                <img
                  src={CircleArrow}
                  className="ml-2 text-white text-lg"
                  alt="Transfer Icon"
                />
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default TransferPlaylist;

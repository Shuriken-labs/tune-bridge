import Navbar from "../component/header";
import profile from "../assets/profile.png";
import Spotify from "../assets/spotify.png";

import { Progress } from "../components/ui/progress";

const Profile = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />

      <div className="flex p-6">
        <div className="flex items-center p-5 border border-gray-500 rounded-lg">
          <div className="flex flex-row">
            <div className="flex flex-col items-center w-50 h-50">
              <div className="border border-cyan-500 rounded-full p-5">
                <img src={profile} alt="Profile" width={50} height={50} />
              </div>
              <p className="font-bold items-center mt-2">Name</p>
              <button className="mt-2 px-4 py-2 border border-cyan-500 text-white rounded cursor-pointer">
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 ml-4 w-[856.96px] items-center">
              <h2 className="text-sm font-medium mb-4 text-center">Linked Playlist</h2>

              <div className="flex items-center mb-4">
                <img src={Spotify} alt="Spotify Playlist" width={30} height={30} />
                <Progress value={99} className="w-50 h-[20px] gap-[10px] ml-2" />
                <span className="text-white text-sm">99%</span>
              </div>
              <div className="flex items-center mb-4">
                <img src={Spotify} alt="Spotify Playlist" width={30} height={30} />
                <Progress value={99} className="w-50 h-[20px] gap-[10px] ml-2" />
                <span className="text-white text-sm ml-2">99%</span>
              </div>
              <div className="flex items-center mb-4">
                <img src={Spotify} alt="Spotify Playlist" width={30} height={30} />
                <Progress value={66} className="w-50 h-[20px] gap-[10px] ml-2" />
                <span className="text-white text-sm">66%</span>
              </div>
              <div className="flex items-center mb-4">
                <img src={Spotify} alt="Spotify Playlist" width={30} height={30} />
                <Progress value={66} className="w-50 h-[20px] gap-[10px] ml-2" />
                <span className="text-white text-sm">66%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

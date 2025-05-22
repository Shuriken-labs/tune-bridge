// src/component/BottomNav.jsx
import HomeIcon from "../assets/home-active.png";
import TransferIcon from "../assets/transfer.png";
import DiscoverIcon from "../assets/discover.png";
import ProfileIcon from "../assets/profile-m.png";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#1f1f1f] via-[#285DBC] to-[#5808B9] px-6 py-2 flex justify-around items-center rounded-t-xl md:hidden z-50">
      <button className="flex flex-col items-center text-white text-xs focus:outline-none">
        <img src={HomeIcon} alt="Home" className="w-5 h-5 mb-1" />
        Home
      </button>
      <button className="flex flex-col items-center text-white text-xs focus:outline-none">
        <img src={TransferIcon} alt="Transfer" className="w-5 h-5 mb-1" />
        Transfer
      </button>
      <button className="flex flex-col items-center text-white text-xs focus:outline-none">
        <img src={DiscoverIcon} alt="Discover" className="w-5 h-5 mb-1" />
        Discover
      </button>
      <button className="flex flex-col items-center text-white text-xs focus:outline-none">
        <img src={ProfileIcon} alt="Profile" className="w-5 h-5 mb-1" />
        Profile
      </button>
    </div>
  );
};

export default BottomNav;

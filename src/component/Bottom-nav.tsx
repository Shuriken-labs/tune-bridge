// component/BottomNav.jsx
import { Link, useLocation } from "react-router-dom";

// Active and Inactive Icons
import HomeActive from "../assets/home-active.png";
import HomeInactive from "../assets/home-innactive.png";

import TransferActive from "../assets/transfer-active.png";
import TransferInactive from "../assets/transfer-innactive.png";

import DiscoverActive from "../assets/discover-active.png";
import DiscoverInactive from "../assets/discover-innactive.png";

import ProfileActive from "../assets/profile-active.png";
import ProfileInactive from "../assets/profile-innactive.png";

const BottomNav = () => {
  const location = useLocation();

  const tabs = [
    {
      name: "Home",
      path: "/",
      icon: HomeInactive,
      activeIcon: HomeActive,
    },
    {
      name: "Transfer",
      path: "/transfer",
      icon: TransferInactive,
      activeIcon: TransferActive,
    },
    {
      name: "Discover",
      path: "/discover",
      icon: DiscoverInactive,
      activeIcon: DiscoverActive,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: ProfileInactive,
      activeIcon: ProfileActive,
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-[#1f1f1f] via-[#285DBC] to-[#5808B9] rounded-[40px] px-6 py-2 flex justify-around items-center w-[90%] max-w-md shadow-lg md:hidden">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;

        return (
          <Link
            to={tab.path}
            key={tab.name}
            className="flex flex-col items-center text-white text-xs focus:outline-none"
          >
            <img
              src={isActive ? tab.activeIcon : tab.icon}
              alt={tab.name}
              className="w-5 h-5 mb-1"
            />
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;

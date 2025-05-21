// Navbar.tsx
import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
<<<<<<< HEAD
  return (
    <nav className=" top-0 left-0 right-0 z-50 shadow-md backdrop-blur-70 w-full bg-transparent bg-opacity-70 absolute border-b-[0.5px] border-gray-400 border-w-[80%]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white h-16">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 font-bold text-lg">
          <img src={logo} alt="Logo" className="h-10 object-contain" width={160.41} height={23.58} />
        </div>
=======
    return (
        <nav className="shadow-md backdrop-blur-70 w-full bg-transparent bg-opacity-70 relative z-[2]">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white h-16">
                {/* Left: Logo */}
                <NavLink
                    to={"/"}
                    className="flex items-center space-x-2 font-bold text-lg"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="object-contain"
                        width={160.41}
                        height={23.58}
                    />
                </NavLink>
>>>>>>> 7edea4847879bb91c5654459992d4b1f1df112ae

                {/* Center: Nav Links */}
                <div className="hidden md:flex space-x-8 text-sm font-semibold">
                    <a href="#" className="hover:text-cyan-300">
                        HOMEPAGE
                    </a>
                    <a href="#" className="hover:text-cyan-300">
                        DISCOVER
                    </a>
                    <a href="#" className="hover:text-cyan-300">
                        PROFILE
                    </a>
                </div>

                {/* Right: Twitter Icon */}
                <div className="text-xl">
                    <a href="#" className="hover:text-cyan-400">
                        <img
                            src={twitter}
                            alt="Twitter"
                            className="h-8 w-8"
                            width={28.8}
                            height={24}
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// Navbar.tsx
import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className=" top-0 left-0 right-0 z-50 shadow-md backdrop-blur-70 w-full bg-transparent bg-opacity-70 absolute fixed">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white h-16">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 font-bold text-lg">
          <img src={logo} alt="Logo" className="h-10 object-contain" width={160.41} height={23.58} />
        </div>

                {/* Center: Nav Links */}
                <div className="hidden md:flex space-x-8 text-sm font-semibold">
                    <NavLink to="/" className="hover:text-cyan-300">
                        HOMEPAGE
                    </NavLink>
                    <NavLink to="/#" className="hover:text-cyan-300">
                        DISCOVER
                    </NavLink>
                    <NavLink to="/#" className="hover:text-cyan-300">
                        PROFILE
                    </NavLink>
                </div>

                {/* Right: Twitter Icon */}
                <div className="text-xl">
                    <NavLink to="#">
                        <img
                            src={twitter}
                            alt="Twitter"
                            className="hover:text-cyan-300"
                            width={28.8}
                            height={24}
                        />
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

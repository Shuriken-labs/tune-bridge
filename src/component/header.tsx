
import React, { useState } from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md backdrop-blur-70 w-full bg-transparent bg-opacity-70 relative z-[2]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white h-16">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2 font-bold text-lg">
          <img src={logo} alt="Logo" className="object-contain" width={160} height={24} />
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="#" className="hover:text-cyan-300">HOMEPAGE</a>
          <a href="#" className="hover:text-cyan-300">DISCOVER</a>
          <a href="#" className="hover:text-cyan-300">PROFILE</a>
        </div>

        {/* Twitter Icon + Hamburger Menu */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-cyan-400">
            <img src={twitter} alt="Twitter" className="h-8 w-8" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-4 py-4 space-y-4 text-white text-center text-sm font-semibold">
          <a href="#" className="block hover:text-cyan-300">HOMEPAGE</a>
          <a href="#" className="block hover:text-cyan-300">DISCOVER</a>
          <a href="/profile" className="block hover:text-cyan-300">PROFILE</a>
        </div>
      )}
    </nav>
  );
=======
// Navbar.tsx
import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";

const Navbar: React.FC = () => {
    return (
        <nav className=" top-0 left-0 right-0 z-50 shadow-md backdrop-blur-sm w-full bg-transparent backdrop-blur-2xl bg-opacity-10 absolute">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white h-16">
                {/* Left: Logo */}
                <div className="flex items-center space-x-2 font-bold text-lg">
                    <img
                        src={logo}
                        alt="Logo"
                        className="object-contain"
                        width={160.41}
                        height={23.58}
                    />
                </div>

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

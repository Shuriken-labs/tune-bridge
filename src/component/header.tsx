// Navbar.tsx
import React from 'react';
import logo from '../assets/logo.png'; 


const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-[#1f0047] to-[#4f00a5] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 font-bold text-lg">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="#" className="hover:text-cyan-300">Homepage</a>
          <a href="#" className="hover:text-cyan-300">Discover</a>
          <a href="#" className="hover:text-cyan-300">Profile</a>
        </div>

        {/* Right: Twitter Icon */}
        <div className="text-xl">
          <a href="#" className="hover:text-cyan-400">
            Twitter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

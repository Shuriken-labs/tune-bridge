// Navbar.tsx
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;

            if (scrollY > 10) {
                setIsScrolled(true);
                console.log("User has scrolled down");
            } else {
                setIsScrolled(false);
                console.log("User is at the top");
            }
        });
        //         return () => {
        //             window.removeEventListener("scroll", () => {});
        //         };
    }, []);
    return (
        <nav
            className={`shadow-md backdrop-blur-[10px] w-full transition-all duration-[0.5s] ease-in-out bg-transparent bg-opacity-70 z-[2] ${
                isScrolled ? "fixed" : "relative"
            }`}
        >
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

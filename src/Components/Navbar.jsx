import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {


  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-white/30 backdrop-blur-md shadow-sm   h-20 flex justify-between items-center text-sm border-b border-white/20  p-4 text-black fixed z-30">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Greenstone-london-logo" className="h-30 lg:h-40 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#2fad5e] font-semibold"
                : "hover:text-[#2fad5e]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "text-[#2fad5e] font-semibold"
                : "hover:text-[#2fad5e]"
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "text-[#2fad5e] font-semibold"
                : "hover:text-[#2fad5e]"
            }
          >
            About Us
          </NavLink>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex justify-center items-center">
          <div className="transition-all duration-75 ease-in-out bg-green-600 px-4 py-2 rounded font-bold text-white hover:bg-green-700 cursor-pointer">
            Contact Us
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={() => setSidebar(true)}>
          <HiOutlineBars3 size={28} />
        </div>
      </div>

      {/* Overlay */}
      {sidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={() => setSidebar(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-8/12 bg-[#4cba75] transform ${sidebar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-30`}
      >
        {/* Close button */}
        <div
          className="absolute right-4 top-6 cursor-pointer text-white text-2xl"
          onClick={() => setSidebar(false)}
        >
          ✕
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start mt-20 px-6 gap-6 text-white text-lg">
          <NavLink to="/" onClick={() => setSidebar(false)}>Home</NavLink>
          <NavLink to="/contactus" onClick={() => setSidebar(false)}>Contact Us</NavLink>
          <NavLink to="/aboutus" onClick={() => setSidebar(false)}>About Us</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

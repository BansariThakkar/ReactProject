import React, { useState } from "react";
import Logo from './Images/Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-xl py-4 px-6 lg:px-20 flex items-center justify-between relative">
      {/* Logo or Title */}
      <div className="text-xl font-semibold text-gray-800">
        <img className="h-9" src={Logo} alt="Logo" />
      </div>

      {/* Navigation Links for desktop */}
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="#about" className="hover:text-purple-600 transition">About us</a>
        <a href="#services" className="hover:text-purple-600 transition">Services</a>
        <a href="#case-studies" className="hover:text-purple-600 transition">Case Studies</a>
        <a href="#blog" className="hover:text-purple-600 transition">Blog</a>
        <a href="#how-it-works" className="hover:text-purple-600 transition">How it Works</a>
        <a href="#hire" className="hover:text-purple-600 transition">Hire</a>
      </div>

      {/* Contact Button for desktop */}
      <div className="hidden md:block">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md shadow transition">
          Contact Us
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 text-3xl focus:outline-none">
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden z-20">
          <a href="#about" className="text-gray-700 font-medium hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>About us</a>
          <a href="#services" className="text-gray-700 font-medium hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#case-studies" className="text-gray-700 font-medium hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>Case Studies</a>
          <a href="#blog" className="text-gray-700 font-medium hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#how-it-works" className="text-gray-700 font-medium hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>How it Works</a>
          <a href="#hire" className="text-gray-700 font-medium hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>Hire</a>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md shadow transition mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

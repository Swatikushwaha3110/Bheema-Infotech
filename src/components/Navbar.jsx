import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // current route

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-blue-950 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/home" className="flex items-center gap-1 hover:text-blue-300 transition">
              Bheema<span className="text-blue-400">Infotech</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/home"
              className={`relative px-1 py-2 hover:text-blue-400 transition ${
                location.pathname === "/home" ? "text-orange-400" : ""
              }`}
            >
              Home
              {location.pathname === "/home" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/about"
              className={`relative px-1 py-2 hover:text-blue-400 transition ${
                location.pathname === "/about" ? "text-orange-400" : ""
              }`}
            >
              About
              {location.pathname === "/about" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/services"
              className={`relative px-1 py-2 hover:text-blue-400 transition ${
                location.pathname === "/services" ? "text-orange-400" : ""
              }`}
            >
              Services
              {location.pathname === "/services" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/engagement"
              className={`relative px-1 py-2 hover:text-blue-400 transition ${
                location.pathname === "/engagement" ? "text-orange-400" : ""
              }`}
            >
              Engagement
              {location.pathname === "/engagement" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/technicalstack"
              className={`relative px-1 py-2 hover:text-blue-400 transition ${
                location.pathname === "/technicalstack" ? "text-orange-400" : ""
              }`}
            >
              Technical Stack
              {location.pathname === "/technicalstack" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/portfolio"
              className={`relative px-1 py-2 hover:text-blue-400 transition ${
                location.pathname === "/portfolio" ? "text-orange-400" : ""
              }`}
            >
              Portfolio
              {location.pathname === "/portfolio" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/blog"
              className={`relative px-1 py-2 hover:text-blue-400 transition ${
                location.pathname === "/blog" ? "text-orange-400" : ""
              }`}
            >
              Blog
              {location.pathname === "/blog" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/careers"
              className={`relative px-1 py-2 hover:text-blue-400 transition ${
                location.pathname === "/careers" ? "text-orange-400" : ""
              }`}
            >
              Careers
              {location.pathname === "/careers" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/contact"
              className={`relative px-1 py-2 hover:text-blue-400 transition ${
                location.pathname === "/contact" ? "text-orange-400" : ""
              }`}
            >
              Contact
              {location.pathname === "/contact" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-900 px-6 py-4 flex flex-col space-y-2">
            {["/home","/about","/services","/engagement","/technicalstack","/portfolio","/blog","/careers","/contact"].map((path, idx) => (
              <Link
                key={idx}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`relative py-2 hover:text-blue-400 transition ${
                  location.pathname === path ? "text-orange-400" : ""
                }`}
              >
                {path.replace("/","").charAt(0).toUpperCase() + path.replace("/","").slice(1)}
                {location.pathname === path && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

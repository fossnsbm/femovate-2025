"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-full shadow-lg flex items-center justify-between w-[95%] max-w-[740px] h-16 z-50">
      <div className="flex items-center justify-between w-full px-8 sm:px-12">
        {/* Left side navigation links */}
        <div
          className="hidden md:flex items-center"
          style={{ gap: "3.5rem", marginLeft: "1rem" }}
        >
          <a
            href="#"
            className="text-black hover:text-[#650E17] font-medium transition-colors duration-300"
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              position: "relative",
              padding: "0.5rem 0",
            }}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#650E17] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-black hover:text-[#650E17] font-medium transition-colors duration-300"
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              position: "relative",
              padding: "0.5rem 0",
            }}
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#650E17] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-black hover:text-[#650E17] font-medium transition-colors duration-300"
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              position: "relative",
              padding: "0.5rem 0",
            }}
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#650E17] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Register Now button */}
        <div className="hidden md:block" style={{ marginRight: "1rem" }}>
          <button
            className=" rounded-full font-semibold transition duration-300 hover:scale-105"
            style={{
              color: "#FFFFFF",
              backgroundColor: "#650E17",
              fontSize: "1rem",
              fontWeight: "600",
              boxShadow: "0 4px 6px rgba(101, 14, 23, 0.3)",
              border: "1px solid #650E17",
            }}
          >
            Register Now
          </button>
        </div>

         
        
          
        {/* Mobile Toggle - Appears on right */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md transition duration-300 hover:opacity-90"
            style={{
              backgroundColor: "#650E17",
              color: "#FFFFFF",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-xl shadow-xl px-6 py-4 flex flex-col items-center md:hidden w-[90%] max-w-sm z-50"
          style={{ gap: "1.25rem" }}
        >
          <a
            href="#"
            className="w-full text-center py-2 hover:bg-gray-100 rounded-lg transition-colors"
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              color: "#000000",
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="w-full text-center py-2 hover:bg-gray-100 rounded-lg transition-colors"
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              color: "#000000",
            }}
          >
            About Us
          </a>
          <a
            href="#"
            className="w-full text-center py-2 hover:bg-gray-100 rounded-lg transition-colors"
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              color: "#000000",
            }}
          >
            Contact Us
          </a>
          <button
            className="w-full max-w-[200px] py-2 rounded-full font-semibold transition duration-300 hover:scale-105"
            style={{
              color: "#FFFFFF",
              backgroundColor: "#650E17",
              fontSize: "1rem",
              fontWeight: "600",
              boxShadow: "0 4px 6px rgba(101, 14, 23, 0.3)",
              border: "1px solid #650E17",
            }}
          >
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

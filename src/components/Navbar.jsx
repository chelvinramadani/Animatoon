// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ brand = "AnimaToon", menuItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-3xl font-bold text-indigo-600 tracking-wide hover:opacity-90"
        >
          {brand}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium text-gray-700 hover:text-indigo-600 transition ${
                location.pathname === item.path ? "text-indigo-700 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-1.5 rounded-full text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white space-y-2 text-center border-t">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-1 font-medium text-indigo-600 hover:bg-indigo-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <input
            type="text"
            placeholder="Search..."
            className="w-full mt-2 px-4 py-1.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

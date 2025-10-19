import React, { useState, useEffect } from "react";

const Navbar = () => {
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar container classes (dynamic based on scroll)
  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300 ease-in-out
    py-4 px-6 md:px-12 lg:px-20
    ${scrolled ? "bg-white shadow-md text-gray-800" : "bg-transparent text-black"}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand Logo */}
        <div className="w-28 cursor-pointer">
          <img
            src="/assets/Glowa-logo.svg"
            alt="Glowa logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          {/* Login button */}
          <button
            className={`hidden sm:block text-sm font-medium transition-colors duration-150 
              ${scrolled ? "text-gray-600 hover:text-gray-800" : "text-black hover:text-gray-700"}`}
          >
            Log in
          </button>

          {/* List your business button */}
          <button
            className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition duration-150 
              ${scrolled 
                ? "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                : "border-black bg-transparent text-black hover:bg-gray-100"
              }`}
          >
            List your business
          </button>

          {/* Menu button */}
          <button
            className={`p-2 rounded-lg border-2 flex items-center justify-center transition duration-150 
              ${scrolled
                ? "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                : "border-black bg-transparent text-black hover:bg-gray-100"
              }`}
            aria-label="Open menu"
          >
            <span className="text-sm font-medium mr-2 hidden sm:inline">Menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

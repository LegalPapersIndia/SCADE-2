import React, { useState } from 'react';
import logo from '../Asset/1.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#064B39] text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
                <img src={logo} alt="Scade Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <a href="/" className="text-white hover:text-[#0A8A67] transition duration-300 text-base lg:text-lg font-medium">
                Home
              </a>
              <a href="/about" className="text-white hover:text-[#0A8A67] transition duration-300 text-base lg:text-lg font-medium">
                About
              </a>
              <a href="/magmist" className="text-white hover:text-[#0A8A67] transition duration-300 text-base lg:text-lg font-medium">
                Magmist
              </a>
              <a href="/tavarum" className="text-white hover:text-[#0A8A67] transition duration-300 text-base lg:text-lg font-medium">
                Tavarum
              </a>
              <a href="/team" className="text-white hover:text-[#0A8A67] transition duration-300 text-base lg:text-lg font-medium">
                Team
              </a>
              <a href="/contact" className="text-white hover:text-[#0A8A67] transition duration-300 text-base lg:text-lg font-medium">
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#0A8A67] focus:outline-none transition"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
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
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#064B39] border-t border-[#0A8A67]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0A8A67] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0A8A67] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/magmist"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0A8A67] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Magmist
              </a>
              <a
                href="/tavarum"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0A8A67] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tavarum
              </a>
              <a
                href="/team"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0A8A67] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#0A8A67] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import Logo from './Logo.jsx';
import NavLinks from './NavLinks.jsx';
import ActionButton from './ActionButton.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between py-3 px-4 md:px-8 lg:px-12 bg-white shadow-md z-30 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Desktop Navigation (Hidden on mobile) */}
      <div className="hidden lg:flex flex-grow justify-center">
        <ul className="flex gap-4">
          <NavLinks />
        </ul>
      </div>

      {/* Desktop Action Button (Hidden on mobile) */}
      <div className="hidden lg:flex items-center">
        <ActionButton />
      </div>

      {/* Hamburger Menu Toggle (Mobile only) */}
      <button
        className="lg:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 overflow-y-auto bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links (Mobile) */}
          <ul className="flex flex-col gap-4 mt-8">
            <NavLinks />
          </ul>

          {/* Action Button (Mobile) */}
          <div className="mt-4">
            <ActionButton />
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
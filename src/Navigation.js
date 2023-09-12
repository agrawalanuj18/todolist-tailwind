import React, { useState } from 'react';
// import './index.css'; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <a href="#" className="text-white hover:text-gray-200 text-lg font-semibold">Home</a>
              <a href="#" className="text-white hover:text-gray-200 ml-4 text-lg font-semibold">About</a>
              <a href="#" className="text-white hover:text-gray-200 ml-4 text-lg font-semibold">Services</a>
              <a href="#" className="text-white hover:text-gray-200 ml-4 text-lg font-semibold">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-white hover:text-gray-200 text-lg font-semibold">Home</a>
            <a href="#" className="text-white hover:text-gray-200 text-lg font-semibold">About</a>
            <a href="#" className="text-white hover:text-gray-200 text-lg font-semibold">Services</a>
            <a href="#" className="text-white hover:text-gray-200 text-lg font-semibold">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

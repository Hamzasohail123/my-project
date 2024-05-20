import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg w-full h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/"  className="text-white text-lg font-semibold">
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="logo" />
            </a>
          </div>
          {/* Categories */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Category 1</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Category 2</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Category 3</a>
            </div>
          </div>
          {/* Search */}
          <div className="flex-grow md:flex md:items-center md:justify-center">
            <div className="max-w-xs w-full mx-auto">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M21 21l-5.2-5.2"></path>
                      <circle cx="10" cy="10" r="7"></circle>
                    </svg>
                  </button>
                </span>
                <input type="search" name="search" className="py-2  text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
              </div>
            </div>
          </div>
          {/* Icons */}
          <div className="flex items-center">
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M20 12H4"></path>
              </svg>
            </a>
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </a>
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M3 3h18v18H3V3zm5 12h9M7 7h9m-9 4h9"></path>
              </svg>
            </a>
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

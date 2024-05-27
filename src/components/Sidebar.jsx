import React, { useState } from 'react'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <div className="relative z-50">
      <svg
        fill="#000000"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="h-5 w-5 cursor-pointer"
        viewBox="0 0 20 20"
        enableBackground="new 0 0 20 20"
        xmlSpace="preserve"
        onClick={toggleSidebar}
      >
        <path d="M19,5H1C0.4,5,0,4.6,0,4s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,5,19,5z" />
        <path d="M10,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h9c0.6,0,1,0.4,1,1S10.6,11,10,11z" />
        <path d="M19,17H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,17,19,17z" />
      </svg>

      {isOpen && (
        <div className="fixed top-10 right-5 xl:right-20 h-[38rem] w-64 border-2 rounded-lg bg-[#EBEBEB] text-black p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">By Goal</h2>
            
            
            <div
              className=""
              onClick={toggleSidebar}
            >
              <svg
                className='w-5 h-5'
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 7L7 17M7 7L17 17"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <nav>
            <ul>
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('about')} className="flex items-center justify-between w-full text-left">
                  About
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'about' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'about' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Our History</a></li>
                    <li className="mb-2"><a href="/">Our Team</a></li>
                    <li className="mb-2"><a href="/">Careers</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('services')} className="flex items-center justify-between w-full text-left">
                  Services
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'services' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'services' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Web Development</a></li>
                    <li className="mb-2"><a href="/">App Development</a></li>
                    <li className="mb-2"><a href="/">SEO Services</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('products')} className="flex items-center justify-between w-full text-left">
                  Products
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'products' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'products' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Product 1</a></li>
                    <li className="mb-2"><a href="/">Product 2</a></li>
                    <li className="mb-2"><a href="/">Product 3</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2"><a href="/">Contact</a></li>
            </ul>
            <h2 className="text-lg font-bold mb-4 mt-4">By Topic</h2>
            <ul>
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('about')} className="flex items-center justify-between w-full text-left">
                  About
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'about' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'about' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Our History</a></li>
                    <li className="mb-2"><a href="/">Our Team</a></li>
                    <li className="mb-2"><a href="/">Careers</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('services')} className="flex items-center justify-between w-full text-left">
                  Services
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'services' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'services' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Web Development</a></li>
                    <li className="mb-2"><a href="/">App Development</a></li>
                    <li className="mb-2"><a href="/">SEO Services</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('products')} className="flex items-center justify-between w-full text-left">
                  Products
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'products' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'products' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Product 1</a></li>
                    <li className="mb-2"><a href="/">Product 2</a></li>
                    <li className="mb-2"><a href="/">Product 3</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2"><a href="/">Contact</a></li>
            </ul>
            <h2 className="text-lg font-bold mb-4 mt-4">Still Unsure</h2>
            <ul>
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('about')} className="flex items-center justify-between w-full text-left">
                  About
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'about' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'about' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Our History</a></li>
                    <li className="mb-2"><a href="/">Our Team</a></li>
                    <li className="mb-2"><a href="/">Careers</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('services')} className="flex items-center justify-between w-full text-left">
                  Services
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'services' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'services' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Web Development</a></li>
                    <li className="mb-2"><a href="/">App Development</a></li>
                    <li className="mb-2"><a href="/">SEO Services</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('products')} className="flex items-center justify-between w-full text-left">
                  Products
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'products' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'products' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Product 1</a></li>
                    <li className="mb-2"><a href="/">Product 2</a></li>
                    <li className="mb-2"><a href="/">Product 3</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2"><a href="/">Contact</a></li>
            </ul>
            <h2 className="text-lg font-bold mb-4 mt-4">By Course</h2>
            <ul>
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('about')} className="flex items-center justify-between w-full text-left">
                  About
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'about' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'about' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Our History</a></li>
                    <li className="mb-2"><a href="/">Our Team</a></li>
                    <li className="mb-2"><a href="/">Careers</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('services')} className="flex items-center justify-between w-full text-left">
                  Services
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'services' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'services' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Web Development</a></li>
                    <li className="mb-2"><a href="/">App Development</a></li>
                    <li className="mb-2"><a href="/">SEO Services</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2 relative">
                <button onClick={() => toggleSubmenu('products')} className="flex items-center justify-between w-full text-left">
                  Products
                  <svg
                    className={`w-4 h-4 transform ${activeSubmenu === 'products' ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {activeSubmenu === 'products' && (
                  <ul className="ml-4 mt-2">
                    <li className="mb-2"><a href="/">Product 1</a></li>
                    <li className="mb-2"><a href="/">Product 2</a></li>
                    <li className="mb-2"><a href="/">Product 3</a></li>
                  </ul>
                )}
              </li>
              <li className="mb-2"><a href="/">Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Sidebar
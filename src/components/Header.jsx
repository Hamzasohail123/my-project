import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

function Navbar() {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 639) {
        setIsOpen(false);
      }
      if (window.innerWidth > 639) {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Run on component mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconStyle = {
    fill: 'none',
    stroke: 'rgb(0, 0, 0)',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '2',
  };

  return (
    <>
      <nav className="w-full py-4 border-b-[2px] border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-0 border-red-500">
          <div className="sm:flex gap-y-3 md:gap-y-0 justify-between items-center border-0 border-red-500">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-between sm:border-0 sm:border-red-500">
              <a href="/" className="">
                <img className='h-30 w-24' src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="logo" />
              </a>
               <div className="text-gray-300 block sm:hidden pl-3 py-2 rounded-md"
                     onClick={toggleSidebar}>
                <svg
                  fill="#000000"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className='h-5 w-5'
                  viewBox="0 0 20 20"
                  enableBackground="new 0 0 20 20"
                  xmlSpace="preserve"
                >
                  <path d="M19,5H1C0.4,5,0,4.6,0,4s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,5,19,5z" />
                  <path d="M10,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h9c0.6,0,1,0.4,1,1S10.6,11,10,11z" />
                  <path d="M19,17H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,17,19,17z" />
                </svg>
              </div>
            </div>
            {/* Categories */}
            <div className="hidden xl:flex min-[1111px]:block ml-5 border-0 border-red-500">
              <div className="flex space-x-4">
                <a href="/" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categories</a>
                {/* <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Category 2</a> */}
                {/* <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Category 3</a> */}
              </div>
            </div>
            {/* Search */}
            {
              isOpen && (
                <div className="flex-grow  md:flex md:items-center md:justify-center w-auto sm:ml-5 mt-4 sm:mt-0 border-0 border-red-500">
                <div className="w-full mx-auto">
                  <div className="relative text-gray-400 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <button type="submit" className="p-1 border-0 border-red-500 focus:shadow-outline">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                          <path d="M21 21l-5.2-5.2"></path>
                          <circle cx="10" cy="10" r="7"></circle>
                        </svg>
                      </button>
                    </span>
                    <input type="search" name="search" className="py-3 text-sm text-white bg-white rounded-full pl-16 w-full border-2 border-gray-400 focus:bg-white focus:text-gray-900" placeholder="Search for anything" autoComplete="off" />
                  </div>
                </div>
            </div>
              )
            }
            
            {/* Categories */}
            <div className="hidden lg:flex min-[983px]:block ml-4 border-0 border-red-500">
              <div className="flex space-x-4">
                <a href="/" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Udemy Business</a>
                <a href="/" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Instructor</a>
                <a href="/" className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Learning</a>
              </div>
            </div>
            {/* Icons */}
            {
              isOpen && (
                <div className="flex items-center justify-center sm:justify-normal sm:ml-2 mt-4 sm:mt-0 border-0 border-red-500">
                <div className="text-gray-300 px-3 py-2 rounded-md">
                  <svg className='h-5 w-5' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M14.88 4.78a3.489 3.489 0 0 0-.37-.9 3.24 3.24 0 0 0-.6-.79 3.78 3.78 0 0 0-1.21-.81 3.74 3.74 0 0 0-2.84 0 4 4 0 0 0-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 0 0-1.16-.75 3.74 3.74 0 0 0-2.84 0 3.78 3.78 0 0 0-1.21.81 3.55 3.55 0 0 0-.97 1.69 3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89 3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 0 1-.44-.57 3 3 0 0 1-.27-.65 3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6 2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 0 1 .88-.59 2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34 2.6 2.6 0 0 1-.06.72h-.03z" /></svg>
                </div>
                <div className="text-gray-300 px-3 py-2 rounded-md">
                  <svg
                    className='h-5 w-5'
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3,3H5V17a1,1,0,0,0,1,1H18a1,1,0,0,0,.958-.713l3-10A1,1,0,0,0,21,6H7V2A1,1,0,0,0,6,1H3A1,1,0,0,0,3,3ZM7,8H19.656l-2.4,8H7ZM6.5,19A1.5,1.5,0,1,1,5,20.5,1.5,1.5,0,0,1,6.5,19Zm10,0A1.5,1.5,0,1,1,15,20.5,1.5,1.5,0,0,1,16.5,19Z" />
                  </svg>
                </div>
                <div className="text-gray-300 px-3 py-2 rounded-md">
                  <svg
                    id="Uploaded to svgrepo.com"
                    className='h-5 w-5'
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 32 32"
                    xmlSpace="preserve"
  
                  >
                    <style type="text/css">
                      {"\n\t.blueprint_een{fill:#111918;}\n\t.st0{fill:#0B1719;}\n"}
                    </style>
                    <path
                      className="blueprint_een"
                      d="M29,25c-3,0-3-11-3-11c0-4.602-3.113-8.468-7.344-9.632C18.868,3.956,19,3.496,19,3 c0-1.657-1.343-3-3-3s-3,1.343-3,3c0,0.496,0.132,0.956,0.344,1.368C9.113,5.532,6,9.398,6,14c0,0,0,11-3,11c-0.552,0-1,0.448-1,1 c0,0.552,0.448,1,1,1h9.141C12.058,27.321,12,27.653,12,28c0,2.209,1.791,4,4,4s4-1.791,4-4c0-0.347-0.058-0.679-0.141-1H29 c0.552,0,1-0.448,1-1C30,25.448,29.552,25,29,25z M15,3c0-0.551,0.449-1,1-1s1,0.449,1,1s-0.449,1-1,1S15,3.551,15,3z M8,14 c0-4.411,3.589-8,8-8s8,3.589,8,8c0,0.118,0.004,2.919,0.393,5.77c0.07,0.513,0.184,1.33,0.392,2.23H7.214 c0.208-0.9,0.322-1.717,0.392-2.23C7.996,16.919,8,14.118,8,14z M16,30c-1.103,0-2-0.897-2-2c0-0.136,0.025-0.294,0.078-0.499 L14.466,26h3.067l0.389,1.501C17.975,27.706,18,27.864,18,28C18,29.103,17.103,30,16,30z M6.098,25c0.364-0.613,0.636-1.309,0.848-2 h18.108c0.212,0.691,0.484,1.387,0.848,2H6.098z"
                    />
                  </svg>
                </div>
                <div className="text-gray-300 px-3 py-2 rounded-md">
                  <svg
                    className='h-5 w-5'
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
  
                  >
                    <path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z" />
                  </svg>
                </div>
                {/* <div className="text-gray-300 pl-3 py-2 rounded-md">
                  <svg
                    fill="#000000"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className='h-5 w-5'
                    viewBox="0 0 20 20"
                    enableBackground="new 0 0 20 20"
                    xmlSpace="preserve"
                  >
                    <path d="M19,5H1C0.4,5,0,4.6,0,4s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,5,19,5z" />
                    <path d="M10,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h9c0.6,0,1,0.4,1,1S10.6,11,10,11z" />
                    <path d="M19,17H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,17,19,17z" />
                  </svg>
                </div> */}
                <div className="text-gray-300 pl-3 py-2 rounded-md">
                  <Sidebar/>
                </div>
  
  
              </div>
              )
            }
           
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="w-full py-3 shadow-md border-0 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-0 border-red-500">
          <div className="sm:flex flex-wrap justify-center gap-x-5 gap-y-3 items-center border-0 border-red-500">

            <div className="">
              <a href="/" className="text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Home</a>
            </div>
            <div className="">
              <a href="/becomeATutor" className="text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Become A Tutor</a>
            </div>
            <div className="">
              <a href="/thirdpage" className="text-gray-500  px-3 py-2 rounded-md text-sm font-medium">3rd page</a>
            </div>
            <div className="">
              <a href="/contact" className="text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Contact US</a>
            </div>
            <div className="">
              <a href="/" className="text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Office Productivity</a>
            </div>
            <div className="">
              <a href="/" className="text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Personal Development</a>
            </div>
            <div className="">
              <a href="/" className="text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Design</a>
            </div>
            <div className="">
              <a href="/" className="text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Marketing</a>
            </div>
            <div className="">
              <a href="/" className="text-gray-500  px-3 py-2 rounded-md text-sm font-medium">Health & Fitness</a>
            </div>

          </div>
        </div>
      </div>
      )}
      
    </>
  );
}

export default Navbar;

import { Github } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoutUser } from '../featurres/Auth/AuthSlice';

const Navbar = () => {

    const {Users} = useSelector((state) => state.Auth)
const dispatch = useDispatch()

    const handleExit = () =>{
dispatch(LogoutUser())
    }

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center">
            <div className="flex-shrink-0 flex space-x-2 items-center">
                <Github />
              {/* <img 
                src={<Github />} 
                alt="Logo" 
                className="h-8 w-8 mr-2"
              /> */}
              <a href="/" className="font-bold text-xl">Github_Discover</a>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-4">
              {Users ? (
<>
<Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">
Home
</Link>
<Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">
About
</Link>

                <button 
                onClick={handleExit}
                  className="px-3 py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700"
                >
                  Logout
                </button>
</>
              ) : (
                <>
                  <Link
                    to="/login" 
                    className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register" 
                    className="px-3 py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-2">
          {Users ? (
           <> 
            <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            About
          </Link>
           <button 
           className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-red-600 text-white hover:bg-red-700"
         >
           Logout
         </button>
         </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
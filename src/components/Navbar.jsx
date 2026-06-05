import { useState } from "react";
import ContactModal from "./ContactModal.jsx";
import { Menu, Home, Info, ShoppingBag } from "lucide-react";
import { NavLink } from 'react-router-dom'
import Logo from "/src/assets/images/trenches-logo.png";

function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="py-3 pl-3 px-3 flex items-center sticky top-0 left-0 justify-between md:px-6 lg:px-10 bg-white z-100">
        <div className="flex items-center gap-1">
          <img src={Logo} alt="Trenches Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h1 className="text-2xl sm:text-3xl font-serif font-bold italic text-gray-900">Trenches</h1>
        </div>

        <div className="hidden sm:block">
          <div className="flex items-center gap-8">
            <NavLink 
                to="/" 
                className={({ isActive }) => `text-gray-700 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-gray-900 ${isActive ? 'after:w-full text-gray-900' : 'after:w-0'}`}
            >
                Home
            </NavLink>

            <NavLink 
                to="/about" 
                className={({ isActive }) => `text-gray-700 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-gray-900 ${isActive ? 'after:w-full text-gray-900' : 'after:w-0'}`}
            >
                About
            </NavLink>

            <NavLink 
                to="/products" 
                className={({ isActive }) => `text-gray-700 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-gray-900 ${isActive ? 'after:w-full text-gray-900' : 'after:w-0'}`}
            >
                Products
            </NavLink>
          </div>
        </div>  

        <div className="flex items-center gap-2">
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />

          <button
            className="sm:hidden text-gray-700 hover:bg-gray-100 p-2 rounded-full"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Left Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-101 shadow-2xl transform transition-transform duration-300 ease-in-out sm:hidden
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-1">
            <img src={Logo} alt="Trenches Logo" className="w-9 h-9" />
            <h1 className="text-3xl font-serif font-bold italic text-gray-900">Trenches</h1>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-neutral-600 hover:text-black text-2xl hover:bg-neutral-100 rounded-full py-1 px-2.5"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col px-4 py-6 gap-1">
          <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${isActive ? 'bg-neutral-100 text-black' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
          >
              <Home size={18}/>
              <span>Home</span>
          </NavLink>

          <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${isActive ? 'bg-neutral-100 text-black' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
          >   
              <Info size={18} />
              <span>About</span>
          </NavLink>

          <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${isActive ? 'bg-neutral-100 text-black' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
          >
              <ShoppingBag size={18}/>
              <span>Products</span>
          </NavLink>
        </div>
  
      </div>
    </>
  );
}

export default Navbar;
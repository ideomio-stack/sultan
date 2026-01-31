
import React from 'react';

import logo from '../logo/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Elite Custom Jerseys Logo" className="h-24 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center space-x-10">

            <a href="#contact" className="bg-maroon-700 text-white px-7 py-3 rounded-md font-bold hover:bg-maroon-800 transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-maroon-900/20">
              GET STARTED
            </a>
          </div>
          <div className="md:hidden">
            <a href="#contact" className="bg-maroon-700 text-white px-4 py-2 rounded font-bold text-sm">
              INQUIRE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import headerImage from '../assets/header_athletes.png';

const Hero: React.FC = () => {
  return (

    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden min-h-[800px] flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-maroon-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-900/30 rounded-full blur-[150px]"></div>
      </div>

      {/* Hero Image - Blended Background */}
      <div className="hidden lg:block absolute top-0 right-0 w-[65%] h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <img
            src={headerImage}
            alt="Elite Athletes"
            className="w-full h-full object-cover object-center lg:object-right opacity-90"
          />
          {/* Gradient Overlays for Blending/Fog */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Mobile Image (visible only on small screens, simpler layout) */}
      <div className="lg:hidden absolute top-0 left-0 w-full h-full z-0 opacity-20">
        <img
          src={headerImage}
          alt="Elite Athletes"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-maroon-950 text-maroon-400 text-xs font-black tracking-[0.2em] mb-8 border border-maroon-900/50 backdrop-blur-sm">
            <span>WE WORK WITH YOUR BUDGET.</span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-oswald font-bold leading-[0.85] text-white mb-8 uppercase tracking-tighter italic drop-shadow-2xl">
            PRO GRADE, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-500 to-maroon-700 pr-4">CUSTOM MADE.</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-lg leading-relaxed font-medium drop-shadow-lg">
            No budget games. No hidden fees. No sticker shock. You tell us your number, we design custom jerseys that fit it.
          </p>

          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-maroon-700 text-white px-10 py-5 rounded-sm font-black text-lg uppercase tracking-widest hover:bg-maroon-800 transition-all shadow-[0_0_30px_rgba(127,29,29,0.4)] group"
            >
              Get Your Custom Quote
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Badge - Repositioned */}
      <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 z-10 hidden lg:block">
        <div className="bg-black/80 backdrop-blur-md text-white px-8 py-6 rounded-sm border-l-4 border-maroon-600 shadow-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">Turnaround Time</p>
          <p className="text-4xl font-oswald font-black italic text-white">14 <span className="text-maroon-500">DAYS</span></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

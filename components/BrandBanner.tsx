import React from 'react';

// Import logos
import obaLogo from '../assets/logos/oba_logo.png';
import haltonLogo from '../assets/logos/halton_logo.png';
import londonLogo from '../assets/logos/london_logo.png';
import peelLogo from '../assets/logos/peel_logo.png';
import simcoeLogo from '../assets/logos/simcoe_logo.svg';
import tdsbLogo from '../assets/logos/tdsb_logo.png';
import yorkLogo from '../assets/logos/york_logo.png';

const BrandBanner: React.FC = () => {
  const brandLogos = [
    { src: obaLogo, alt: "OBA" },
    { src: haltonLogo, alt: "Halton" },
    { src: londonLogo, alt: "London" },
    { src: peelLogo, alt: "Peel" },
    { src: simcoeLogo, alt: "Simcoe" },
    { src: tdsbLogo, alt: "TDSB" },
    { src: yorkLogo, alt: "York" }
  ];

  return (
    <div className="bg-black py-10 border-y border-white/5 overflow-hidden relative z-10">
      <div className="flex whitespace-nowrap animate-marquee group">
        <div className="flex space-x-8 items-center px-4">
          {brandLogos.concat(brandLogos).map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center w-48 flex-shrink-0 group/item transition-all duration-300">
              {/* 
                  Pure White Silhouette Logic:
                  Ensures all logos are perfectly white silhouettes by default.
              */}
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-14 max-w-[70%] object-contain
                  opacity-40 brightness-0 invert transition-all duration-500 will-change-transform
                  group-hover/item:opacity-100 group-hover/item:scale-110 group-hover/item:brightness-100 group-hover/item:invert-0"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandBanner;

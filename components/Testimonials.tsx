
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-xs font-black text-maroon-600 uppercase tracking-[0.4em] mb-4">REPUTATION</h2>
            <p className="text-5xl font-oswald font-bold text-white uppercase italic tracking-tighter leading-none">THE TEAM CHOICE</p>
          </div>
          <div className="bg-maroon-950/20 px-8 py-5 border border-maroon-900/30">
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-maroon-600 text-maroon-600" />)}
            </div>
            <p className="text-xs font-black text-maroon-400 uppercase tracking-widest">4.9/5 WORLDWIDE</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {TESTIMONIALS.map((t, idx) => (
            <div key={t.id} className={`p-12 border border-white/5 bg-black hover:bg-maroon-950/10 transition-colors duration-500 ${idx === 1 ? 'md:border-x-maroon-900/20' : ''}`}>
              <Quote className="text-maroon-900/30 mb-8" size={40} />
              <p className="text-gray-300 text-lg italic leading-relaxed mb-10">"{t.content}"</p>
              <div className="flex items-center space-x-5">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-sm object-cover grayscale hover:grayscale-0 transition-all" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-tight leading-tight">{t.name}</h4>
                  <p className="text-[10px] text-maroon-600 font-black uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Bar */}
        <div className="mt-32 pt-16 border-t border-white/5">

          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-20 hover:opacity-100 transition-opacity duration-1000">
            <span className="text-4xl font-oswald font-black italic tracking-tighter text-white">PRO-AM</span>
            <span className="text-4xl font-oswald font-black italic tracking-tighter text-white">VARSITY</span>
            <span className="text-4xl font-oswald font-black italic tracking-tighter text-white">ELITE SEVEN</span>
            <span className="text-4xl font-oswald font-black italic tracking-tighter text-white">METRO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React from 'react';
import { ShieldCheck, Palette, Zap } from 'lucide-react';
import { VALUE_PROPS } from '../constants';

const IconMap: Record<string, any> = {
  ShieldCheck,
  Palette,
  Zap
};

const ValueProps: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-xs font-black text-maroon-600 uppercase tracking-[0.4em] mb-6">ELITE ADVANTAGE</h2>
          <p className="text-5xl lg:text-6xl font-oswald font-bold text-white mb-8 uppercase italic tracking-tighter">BUILT FOR THE GRIND</p>
          <div className="w-24 h-1.5 bg-maroon-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">We combine varsity aesthetics with pro-level engineering. Maroon spirit, blackout style.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop) => {
            const Icon = IconMap[prop.icon];
            return (
              <div key={prop.id} className="group p-10 bg-black border border-white/5 hover:border-maroon-900/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-maroon-950/50 text-maroon-600 rounded-sm flex items-center justify-center mb-8 group-hover:bg-maroon-700 group-hover:text-white transition-all duration-500">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-oswald font-bold text-white mb-5 uppercase tracking-tight italic">{prop.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{prop.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;

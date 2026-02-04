
import React from 'react';
import Navbar from './components/Navbar';
import logo from './logo/logo.png';
import Hero from './components/Hero';
import BrandBanner from './components/BrandBanner';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />

        <BrandBanner />

        <section id="gallery" className="py-32 bg-[#0a0a0a] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
              <div className="text-center md:text-left">
                <h2 className="text-xs font-black text-maroon-600 uppercase tracking-[0.4em] mb-4">PORTFOLIO</h2>
                <p className="text-5xl lg:text-7xl font-oswald font-bold text-white uppercase italic tracking-tighter leading-none">THE BLACKLIST</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=600"
              ].map((src, idx) => (
                <div key={idx} className="aspect-[4/5] overflow-hidden group relative border border-white/5 bg-black">
                  <img src={src} alt="Gallery item" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-maroon-900/20 group-hover:bg-transparent transition-all duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black text-maroon-500 uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">PRO GRADE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ValueProps />
        <Testimonials />
        <ContactForm />
      </main>

      <footer className="bg-black py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={logo} alt="Sultan Athletic" className="h-10 w-auto" />
              <p className="text-[10px] font-black text-gray-800 uppercase tracking-widest italic">© 1999 Sultan Athletic INC. <span className="opacity-30 ml-2">v1.1</span></p>
            </div>
            <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] leading-relaxed">
              <p>1601 Bayview Ave Suite 43555</p>
              <p>Toronto, Ontario, M4G 4G8</p>
              <p>Canada</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

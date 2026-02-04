
import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { SPORTS, WEBHOOK_URL } from '../constants';
import { FormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    sport: '',
    quantity: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('--- FORM SUBMISSION STARTED ---');
      console.log('Target URL:', WEBHOOK_URL);
      console.log('Payload:', formData);

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`Failed to submit: ${response.status} ${response.statusText}`);
      }

      console.log('Submission successful!');
      setIsSubmitted(true);
      window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission MAJOR ERROR:', err);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-maroon-700 text-white rounded-sm flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-maroon-900/50">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-5xl font-oswald font-bold mb-8 uppercase italic tracking-tighter">MISSION INITIATED</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Our team is analyzing your request. We'll be in touch at <span className="text-maroon-500 font-black">{formData.email}</span> shortly.<br />
            <span className="block mt-4 text-white font-bold">416-410-9200</span>
            <span className="block text-maroon-500 font-black">info@sultanathletic.com</span>
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-maroon-500 font-black uppercase tracking-widest text-sm hover:text-white transition-colors"
          >
            SEND ANOTHER REQUEST
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-[#050505] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-xs font-black text-maroon-600 uppercase tracking-[0.4em] mb-6">READY TO PLAY?</h2>
            <p className="text-6xl font-oswald font-bold mb-10 leading-none uppercase italic tracking-tighter">GEAR UP <span className="text-maroon-700 underline decoration-maroon-950">TODAY</span></p>

            <div className="space-y-12">
              {[
                { step: '01', title: 'STRATEGY', text: 'Define your colors, logos, and roster requirements.' },
                { step: '02', title: 'BLUEPRINT', text: 'Get custom 4K renders and physical swatch samples.' },
                { step: '03', title: 'EXECUTION', text: 'Full production begins with elite quality control.' }
              ].map((s) => (
                <div key={s.step} className="flex items-start space-x-8 group">
                  <div className="text-5xl font-oswald font-black text-white/5 group-hover:text-maroon-900 transition-colors duration-500">{s.step}</div>
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase italic tracking-tight">{s.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 border border-white/5 bg-black/40 rounded-sm">
              <p className="text-maroon-500 font-bold mb-2 uppercase tracking-widest text-xs italic">Lead Time Guarantee</p>
              <p className="text-gray-400 text-sm leading-relaxed">Our designers prioritize speed without sacrificing pro-grade quality. Experience the fastest turnaround in the custom apparel industry.</p>
            </div>
          </div>

          <div className="bg-black p-12 lg:p-16 border border-white/5 shadow-[0_0_100px_rgba(0,0,0,1)] relative z-20">
            <h3 className="text-4xl font-oswald font-black mb-12 uppercase italic tracking-tighter">CUSTOM <span className="text-maroon-700">QUOTE</span></h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="peer w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-maroon-700 transition-colors font-bold uppercase text-sm" placeholder=" " />
                  <label className="absolute left-0 top-3 text-gray-600 text-xs font-black uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-maroon-600 peer-[:not(:placeholder-shown)]:-top-4">Name</label>
                </div>
                <div className="relative">
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="peer w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-maroon-700 transition-colors font-bold text-sm" placeholder=" " />
                  <label className="absolute left-0 top-3 text-gray-600 text-xs font-black uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-maroon-600 peer-[:not(:placeholder-shown)]:-top-4">Email</label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="peer w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-maroon-700 transition-colors font-bold text-sm" placeholder=" " />
                  <label className="absolute left-0 top-3 text-gray-600 text-xs font-black uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-maroon-600 peer-[:not(:placeholder-shown)]:-top-4">Phone</label>
                </div>
                <div className="relative">
                  <select name="sport" required value={formData.sport} onChange={handleChange} className="peer w-full bg-black border-b border-white/10 py-3 outline-none focus:border-maroon-700 transition-colors font-bold uppercase text-sm appearance-none">
                    <option value="" disabled className="bg-black"></option>
                    {SPORTS.map(s => <option key={s} value={s} className="bg-black">{s}</option>)}
                  </select>
                  <label className="absolute left-0 -top-4 text-maroon-600 text-[10px] font-black uppercase tracking-widest">Sport</label>
                </div>
              </div>

              <div className="relative">
                <input type="text" name="quantity" required value={formData.quantity} onChange={handleChange} className="peer w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-maroon-700 transition-colors font-bold uppercase text-sm" placeholder=" " />
                <label className="absolute left-0 top-3 text-gray-600 text-xs font-black uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-maroon-600 peer-[:not(:placeholder-shown)]:-top-4">Units Needed</label>
              </div>

              <div className="relative">
                <textarea name="notes" rows={3} value={formData.notes} onChange={handleChange} className="peer w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-maroon-700 transition-colors font-bold text-sm resize-none" placeholder=" "></textarea>
                <label className="absolute left-0 top-3 text-gray-600 text-xs font-black uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-maroon-600 peer-[:not(:placeholder-shown)]:-top-4">Vision Details</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-maroon-700 text-white font-black py-6 rounded-sm text-xl uppercase tracking-[0.3em] hover:bg-maroon-800 transition-all flex items-center justify-center group shadow-2xl shadow-maroon-900/40 border-b-4 border-maroon-900 active:border-b-0 active:translate-y-1"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : (
                  <>
                    GET STARTED
                    <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </>
                )}
              </button>

              {error && (
                <div className="flex items-center space-x-2 text-red-500 bg-red-500/10 p-4 rounded-sm border border-red-500/20 animate-in fade-in slide-in-from-top-2">
                  <AlertTriangle size={20} />
                  <p className="text-sm font-bold uppercase tracking-wider">{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

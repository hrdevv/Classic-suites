
import React from 'react';
import { BRAND_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-4xl animate-fade-in">
        <span className="text-[#f59e0b] text-[11px] font-bold tracking-[0.5em] uppercase mb-6 block">Our Identity</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-10 leading-tight">
          A Legacy of <br /><span className="text-[#f59e0b] italic">Institutional Luxury</span>
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed font-light mb-16 italic border-l-4 border-[#f59e0b] pl-8 py-2">
          {BRAND_NAME} is founded on the principle that elite hospitality should be reliable, secure, and professional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-10 text-slate-600 font-light leading-relaxed italic text-lg">
          <p>
            Operating as the premier serviced residential brand in Abuja, we specialize in curating suites that cater to professionals, diplomats, and corporate clients seeking quality short-let solutions without compromise.
          </p>
          <p>
            Our suites are strategically located in Abuja’s commercial and administrative cores—Maitama and Wuse II—ensuring proximity to the heart of the city while maintaining an atmosphere of secluded privacy.
          </p>
          <p>
            Every Lifters' residence undergoes rigorous inspection to ensure it meets our factual standards for modern functionality, clinical cleanliness, and atmospheric elegance. We don't just provide rooms; we manage environments.
          </p>
          
          <div className="pt-10 grid grid-cols-2 gap-10">
             <div>
                <span className="block text-slate-900 font-bold text-4xl font-serif mb-2">100%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Reliability <br />Guarantee</span>
             </div>
             <div>
                <span className="block text-slate-900 font-bold text-4xl font-serif mb-2">24/7</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Professional <br />Support</span>
             </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#f59e0b]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="bg-white p-6 rounded-[3rem] shadow-2xl border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Lounge" 
              className="w-full rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-1000" 
            />
          </div>
          <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-white p-5 rounded-[2rem] shadow-2xl hidden md:block border border-slate-100 animate-fade-in">
             <div className="w-full h-full bg-amber-50 rounded-2xl flex items-center justify-center p-8 text-center border border-amber-100">
                <span className="text-[#f59e0b] font-serif text-base font-bold tracking-tight italic">Abuja's Trusted Institutional Partner</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="mb-24 text-center max-w-3xl mx-auto animate-fade-in">
        <span className="text-[#f59e0b] text-[11px] font-bold tracking-[0.5em] uppercase mb-6 block">Structured Hospitality</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 tracking-tight">Our <span className="text-[#f59e0b]">Solutions</span></h1>
        <p className="text-slate-500 text-xl leading-relaxed font-light italic">
          Providing structured hospitality and secure living for corporate organizations, international travelers, and discerning individuals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="bg-white p-14 border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group">
          <div className="w-20 h-20 bg-amber-50 rounded-[1.25rem] flex items-center justify-center mb-12 group-hover:bg-[#f59e0b] transition-all duration-500 shadow-sm">
            <svg className="w-10 h-10 text-[#f59e0b] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-3xl font-serif text-slate-900 mb-8 tracking-wide">Elite Residences</h3>
          <p className="text-slate-500 leading-relaxed text-base font-light italic">
            Fully-equipped, bespoke apartments in secure districts, managed with professional rigor to ensure constant reliability and high-standard comfort.
          </p>
        </div>

        <div className="bg-white p-14 border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group">
          <div className="w-20 h-20 bg-amber-50 rounded-[1.25rem] flex items-center justify-center mb-12 group-hover:bg-[#f59e0b] transition-all duration-500 shadow-sm">
            <svg className="w-10 h-10 text-[#f59e0b] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-3xl font-serif text-slate-900 mb-8 tracking-wide">The Grandeur Hall</h3>
          <p className="text-slate-500 leading-relaxed text-base font-light italic">
            Abuja’s preferred event destination for corporate conferences, diplomative gatherings, and boutique celebrations with full utility backup.
          </p>
        </div>

        <div className="bg-white p-14 border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group">
          <div className="w-20 h-20 bg-amber-50 rounded-[1.25rem] flex items-center justify-center mb-12 group-hover:bg-[#f59e0b] transition-all duration-500 shadow-sm">
            <svg className="w-10 h-10 text-[#f59e0b] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-3xl font-serif text-slate-900 mb-8 tracking-wide">Concierge Support</h3>
          <p className="text-slate-500 leading-relaxed text-base font-light italic">
            A dedicated professional team providing 24/7 assistance, ensuring every guest experience is seamless, private, and secure.
          </p>
        </div>
      </div>

      <div className="bg-white p-14 rounded-[3rem] border border-slate-100 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
           <h4 className="text-3xl font-serif text-slate-900 mb-4 tracking-tight">Need a tailored corporate package?</h4>
           <p className="text-slate-400 text-lg font-light italic">We offer volume-based solutions and extended stay packages for organizations and NGOs.</p>
        </div>
        <Link to="/inquiry" className="px-14 py-6 bg-[#f59e0b] text-white rounded-2xl font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl shadow-amber-500/30 hover:bg-[#d97706] transition-all whitespace-nowrap">Account Manager</Link>
      </div>
    </div>
  );
};

export default Services;

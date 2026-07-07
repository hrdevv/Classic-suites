
import React from 'react';
import { CONTACT_INFO, BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl brand-logo mb-10">
              <span className="text-[#f59e0b]">Lifters'</span> <span className="text-slate-900">Suites</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-12 font-light italic">
              Redefining luxury hospitality in Abuja through atmospheric design, impeccable management, and a commitment to institutional quality.
            </p>
            <div className="flex space-x-10">
              <a href={CONTACT_INFO.socials.instagram} className="text-[#f59e0b] hover:text-slate-900 transition-colors text-[10px] font-bold uppercase tracking-[0.3em] border-b border-amber-200">Instagram</a>
              <a href={CONTACT_INFO.socials.facebook} className="text-[#f59e0b] hover:text-slate-900 transition-colors text-[10px] font-bold uppercase tracking-[0.3em] border-b border-amber-200">Facebook</a>
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 text-[11px] font-bold uppercase tracking-[0.4em] mb-12">Contact Details</h4>
            <ul className="text-slate-500 text-sm space-y-10">
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-300 mb-2 uppercase font-bold tracking-widest">Email Inquiry</span>
                <span className="text-slate-700 font-bold font-serif text-lg">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-300 mb-2 uppercase font-bold tracking-widest">Phone Reservations</span>
                <span className="text-slate-700 font-bold font-serif text-lg">{CONTACT_INFO.phone}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 text-[11px] font-bold uppercase tracking-[0.4em] mb-12">Location</h4>
            <p className="text-slate-700 font-serif text-lg leading-relaxed mb-12">
              {CONTACT_INFO.location}
            </p>
            <div className="p-8 bg-amber-50 rounded-3xl inline-block border border-amber-100 shadow-sm">
               <span className="text-[10px] text-[#f59e0b] font-bold uppercase tracking-[0.3em]">Institutional Concierge 24/7</span>
            </div>
          </div>
        </div>
        <div className="pt-16 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-slate-300 text-[9px] uppercase tracking-[0.4em] font-bold">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. Luxury Serviced Living.</p>
          <div className="flex space-x-16 mt-8 md:mt-0">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

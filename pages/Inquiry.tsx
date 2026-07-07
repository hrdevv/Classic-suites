
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { APARTMENTS } from '../constants';
import { InquiryFormData } from '../types';

const Inquiry: React.FC = () => {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    apartmentOfInterest: '',
    checkInDate: '',
    checkOutDate: '',
    guests: '1',
    additionalNotes: '',
  });

  useEffect(() => {
    const state = location.state as { 
      apartmentName?: string;
      checkInDate?: string;
      checkOutDate?: string;
    };
    if (state) {
      setFormData(prev => ({ 
        ...prev, 
        apartmentOfInterest: state.apartmentName || prev.apartmentOfInterest,
        checkInDate: state.checkInDate || prev.checkInDate,
        checkOutDate: state.checkOutDate || prev.checkOutDate
      }));
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 pt-20 bg-[#f8fafc]">
        <div className="bg-white border border-slate-200 p-16 text-center max-w-2xl w-full animate-fade-in rounded-[3rem] shadow-2xl">
          <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
            <svg className="w-12 h-12 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-serif text-slate-900 mb-6 tracking-wide">Inquiry Logged</h2>
          <p className="text-slate-500 mb-12 leading-relaxed font-light text-lg">
            Our concierge team has received your request for <span className="text-[#f59e0b] font-bold italic">{formData.apartmentOfInterest}</span>. We will contact you shortly to finalize details.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-[#f59e0b] text-white px-12 py-5 rounded-2xl font-bold tracking-[0.3em] uppercase hover:bg-[#d97706] transition-all shadow-xl shadow-amber-500/20 text-[11px]"
          >
            New Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="animate-fade-in">
          <span className="text-[#f59e0b] text-[11px] font-bold tracking-[0.6em] uppercase mb-8 block">Concierge Desk</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 mb-10 tracking-tight leading-[0.9]">Reserve <br /><span className="text-[#f59e0b] italic">Your Suite</span></h1>
          <p className="text-slate-500 mb-14 leading-relaxed max-w-md font-light text-xl italic">
            Secure your preferred residence at Lifters' Suites. Our team ensures a high-standard booking experience.
          </p>
          <div className="p-10 bg-white border border-slate-100 border-l-8 border-l-[#f59e0b] rounded-[2rem] shadow-2xl">
            <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-[0.2em] text-[11px]">Instant Assistance</h4>
            <p className="text-slate-400 text-sm mb-6">Connect with our head of concierge via mobile.</p>
            <a href="tel:+2348123456789" className="text-2xl font-serif font-bold text-[#f59e0b] hover:underline transition-all">+234 812 345 6789</a>
          </div>
        </div>

        <div className="bg-white border border-slate-100 p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f59e0b]/5 blur-[100px] pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="space-y-8">
              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Selected Residence</label>
                <select
                  name="apartmentOfInterest"
                  value={formData.apartmentOfInterest}
                  onChange={handleChange}
                  required
                  className="form-input font-serif"
                >
                  <option value="" disabled>Select a suite...</option>
                  {APARTMENTS.map(apt => (
                    <option key={apt.id} value={apt.name}>{apt.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="form-input" placeholder="Guest Name" />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Contact Number</label>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="form-input" placeholder="+234..." />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="your@email.com" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Check-In Date</label>
                  <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required className="form-input text-slate-700" />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Check-Out Date</label>
                  <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required className="form-input text-slate-700" />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Number of Guests</label>
                <select name="guests" value={formData.guests} onChange={handleChange} required className="form-input font-semibold text-slate-700">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Special Requests</label>
                <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} className="form-input h-32 resize-none" placeholder="Let us know any specific requirements..."></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f59e0b] text-white font-bold tracking-[0.4em] uppercase py-6 hover:bg-[#d97706] transition-all duration-500 rounded-2xl shadow-2xl shadow-amber-500/20 text-[11px]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;

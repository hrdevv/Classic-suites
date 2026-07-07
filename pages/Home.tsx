
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ApartmentCard from '../components/ApartmentCard';
import { APARTMENTS } from '../constants';

const Home: React.FC = () => {
  // Hero Slider logic using random images from available apartments
  const heroImages = useMemo(() => {
    return APARTMENTS.flatMap(a => a.images).sort(() => Math.random() - 0.5);
  }, []);

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="bg-[#f8fafc]">
      {/* Hero Section with Slider */}
      <section className="relative h-screen flex items-center overflow-hidden" aria-roledescription="carousel">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2.5s] ease-in-out ${
                idx === heroIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl animate-fade-in">
            <span className="text-[#f59e0b] text-[11px] font-bold tracking-[0.6em] uppercase mb-8 block">
              Boutique Serviced Living
            </span>
            <h1 className="text-6xl md:text-[9.5rem] font-bold text-slate-900 mb-10 leading-[0.85] tracking-tighter brand-logo italic">
              Lifters' <br />
              <span className="text-[#f59e0b] relative inline-block">
                Suites.
                <span className="absolute -bottom-4 left-0 w-full h-3 bg-[#f59e0b]/10 -z-10 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-xl leading-relaxed font-light italic">
              Experience a curated selection of executive residences where institutional management meets atmospheric sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link
                to="/apartments"
                className="px-14 py-5 bg-[#f59e0b] text-white font-bold tracking-[0.3em] uppercase hover:bg-[#d97706] transition-all duration-500 w-full sm:w-auto text-center rounded-2xl shadow-2xl shadow-amber-500/30 text-[11px]"
              >
                The Collection
              </Link>
              <Link
                to="/services"
                className="px-14 py-5 bg-white text-slate-900 font-bold tracking-[0.3em] uppercase hover:bg-slate-50 transition-all duration-500 w-full sm:w-auto text-center rounded-2xl border border-slate-200 text-[11px] shadow-sm"
              >
                Events & Spaces
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Looping Featured Residences Scroll */}
      <section className="py-40 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-slate-100 pb-12">
            <div className="max-w-xl">
              <span className="text-[#f59e0b] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Selected Portfolio</span>
              <h2 className="text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Signature Suites</h2>
              <p className="text-slate-400 leading-relaxed font-light italic">Refined spaces tailored for modern executives and diplomats in Abuja's heart.</p>
            </div>
            <Link to="/apartments" className="text-[#f59e0b] hover:text-[#d97706] transition-colors text-[11px] font-bold tracking-widest uppercase group flex items-center">
              View All Listings
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Continuous Looping Carousel */}
        <div className="relative">
          <div className="animate-loop-scroll">
            {/* Triple the array to ensure smooth seamless looping across large screens */}
            {[...APARTMENTS, ...APARTMENTS, ...APARTMENTS].map((apartment, idx) => (
              <div key={`${apartment.id}-${idx}`} className="w-[420px] flex-shrink-0">
                <ApartmentCard apartment={apartment} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banquet Section */}
      <section className="py-40 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-[#f59e0b]/5 blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#166534] text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Elite Event Spaces</span>
              <h2 className="text-5xl md:text-[5rem] font-serif font-bold text-slate-900 mb-10 leading-tight">The Grandeur <br /><span className="text-[#f59e0b] italic">Experience</span></h2>
              <p className="text-slate-600 text-xl mb-12 leading-relaxed font-light italic">
                Abuja's premier venue for high-standard gatherings. From corporate seminars to bespoke social celebrations, experience a space that defines excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-16">
                 <div className="flex items-center gap-5 bg-white p-8 rounded-3xl border border-slate-100 shadow-lg flex-1">
                    <div className="text-[#f59e0b] font-bold text-3xl font-serif">250+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Max <br />Capacity</div>
                 </div>
                 <div className="flex items-center gap-5 bg-white p-8 rounded-3xl border border-slate-100 shadow-lg flex-1">
                    <div className="text-[#f59e0b]">
                       <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                       </svg>
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Unfailing <br />Utilities</div>
                 </div>
              </div>

              <Link
                to="/inquiry"
                state={{ apartmentName: 'The Grandeur Hall' }}
                className="inline-block px-14 py-5 bg-[#f59e0b] text-white font-bold tracking-[0.3em] uppercase hover:bg-[#d97706] transition-all rounded-2xl shadow-2xl shadow-amber-500/20 text-[11px]"
              >
                Inquire Venue
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" 
                alt="Banquet Hall" 
                className="rounded-[3rem] shadow-2xl relative z-10 border-[12px] border-white transform rotate-3 hover:rotate-0 transition-transform duration-1000"
              />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#f59e0b] rounded-full -z-10 blur-[100px] opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

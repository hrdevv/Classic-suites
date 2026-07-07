
import React, { useState, useMemo, useEffect } from 'react';
import ApartmentCard from '../components/ApartmentCard';
import { APARTMENTS } from '../constants';

const UNIQUE_AMENITIES = Array.from(
  new Set(APARTMENTS.flatMap(apt => apt.amenities))
).sort();

const STANDARD_AMENITIES = [
  { name: 'Wi-Fi', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg> },
  { name: 'Power', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { name: 'Security', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  { name: 'Parking', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
];

const ApartmentCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm p-0 flex flex-col h-full animate-pulse">
      {/* Image Placeholder */}
      <div className="relative h-80 bg-slate-200/70" />
      
      {/* Body Placeholder */}
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="h-7 w-2/3 bg-slate-200 rounded-xl" />
          <div className="h-5 w-10 bg-slate-200/60 rounded-lg" />
        </div>
        
        {/* Subtitle / Location */}
        <div className="h-3.5 w-1/3 bg-slate-200/50 rounded-md mb-8" />
        
        {/* Description Lines */}
        <div className="space-y-3.5 mb-8">
          <div className="h-4 w-full bg-slate-200/50 rounded-lg" />
          <div className="h-4 w-5/6 bg-slate-200/40 rounded-lg" />
        </div>
        
        {/* Pricing & Buttons */}
        <div className="mt-auto">
          <div className="h-5 w-1/2 bg-slate-200/60 rounded-lg mb-8" />
          
          <div className="grid grid-cols-2 gap-5">
            <div className="h-12 bg-slate-200/70 rounded-xl" />
            <div className="h-12 bg-slate-200/70 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Apartments: React.FC = () => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate premium asset load state to showcase custom skeleton design
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [selectedAmenities]);

  const filteredApartments = useMemo(() => {
    if (selectedAmenities.length === 0) return APARTMENTS;
    // AND logic: apartment must have EVERY selected amenity
    return APARTMENTS.filter(apt => 
      selectedAmenities.every(amenity => 
        apt.amenities.some(a => a.toLowerCase().includes(amenity.toLowerCase()))
      )
    );
  }, [selectedAmenities]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity) 
        : [...prev, amenity]
    );
  };

  const clearFilters = () => setSelectedAmenities([]);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-20 text-center max-w-3xl mx-auto animate-fade-in">
        <span className="text-[#f59e0b] text-[11px] font-bold tracking-[0.5em] uppercase mb-4 block">Our Portfolio</span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Exquisite <span className="text-[#f59e0b]">Residences</span></h1>
        <p className="text-slate-500 leading-relaxed font-light text-xl italic">
          Discover handpicked suites in Abuja’s most prestigious districts. Refined design meets institutional quality for a stay beyond comparison.
        </p>
      </div>

      {/* Modern Amenity Filter Interface */}
      <div className="mb-16 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Filter by Amenities:</span>
            {selectedAmenities.length > 0 && (
              <button 
                onClick={clearFilters}
                className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#f59e0b] hover:underline transition-all"
              >
                Reset All
              </button>
            )}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {isLoading ? 'Loading residences...' : `${filteredApartments.length} ${filteredApartments.length === 1 ? 'Suite available' : 'Suites available'}`}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {UNIQUE_AMENITIES.map(amenity => {
            const isSelected = selectedAmenities.includes(amenity);
            return (
              <button
                key={amenity}
                disabled={isLoading}
                onClick={() => toggleAmenity(amenity)}
                className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  isSelected 
                    ? 'bg-[#f59e0b] border-[#f59e0b] text-white shadow-xl shadow-amber-500/20 scale-105' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-[#f59e0b] hover:text-[#f59e0b] disabled:opacity-75'
                }`}
              >
                {amenity}
              </button>
            );
          })}
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Array.from({ length: 3 }).map((_, idx) => (
            <ApartmentCardSkeleton key={idx} />
          ))}
        </div>
      ) : filteredApartments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredApartments.map((apartment) => (
            <div key={apartment.id} className="animate-fade-in">
              <ApartmentCard apartment={apartment} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-32 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif text-slate-900 mb-4">No matching residences found</h3>
          <p className="text-slate-400 text-lg font-light italic">Try adjusting your filters to find your ideal suite.</p>
          <button 
            onClick={clearFilters}
            className="mt-10 text-[#f59e0b] font-bold text-xs uppercase tracking-[0.3em] border-b-2 border-[#f59e0b] pb-2 hover:text-[#d97706] hover:border-[#d97706] transition-all"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Bottom Features Banner */}
      <div className="mt-40 bg-slate-900 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b]/10 blur-[150px] pointer-events-none"></div>
        <div className="relative z-10">
          <h3 className="text-white text-3xl md:text-5xl font-serif mb-20 tracking-wide italic">Institutional Excellence</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {STANDARD_AMENITIES.map((amenity, i) => (
              <div key={i} className="flex flex-col items-center gap-6 group">
                <div className="w-20 h-20 flex items-center justify-center rounded-[1.5rem] bg-white/5 border border-white/10 text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-white transition-all duration-500 shadow-lg">
                  {amenity.icon}
                </div>
                <span className="text-[11px] text-slate-400 uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;

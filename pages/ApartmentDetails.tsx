
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { APARTMENTS } from '../constants';
import ApartmentCard from '../components/ApartmentCard';
import { DatePicker } from '../components/DatePicker';

const getAmenityIcon = (name: string) => {
  const lower = name.toLowerCase();
  
  // Wi-Fi / High-Speed Wi-Fi
  if (lower.includes('wi-fi') || lower.includes('wifi') || lower.includes('internet')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    );
  }
  
  // Security / 24/7 Security / Secure Parking
  if (lower.includes('security') || lower.includes('secure')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }

  // Housekeeping / Daily Housekeeping / Cleaning
  if (lower.includes('housekeeping') || lower.includes('cleaning') || lower.includes('housekeeper')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12l-3-3m3 3l3-3M4.122 16.208A4.005 4.005 0 016 13h12a4.005 4.005 0 011.878 3.208m-15.756 0a48.474 48.474 0 0015.756 0m-15.756 0l-1.5 4.5h18.756l-1.5-4.5" />
      </svg>
    );
  }

  // Power Support / Generator / Electricity
  if (lower.includes('power') || lower.includes('electricity') || lower.includes('generator')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    );
  }

  // Kitchen / Kitchenette / Fully Equipped Kitchenette / Chef
  if (lower.includes('kitchen') || lower.includes('kitchenette') || lower.includes('cooking')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5h6v8.25a3 3 0 01-3 3z" />
      </svg>
    );
  }

  // LED Ambiance / Mood Lighting Control / Lighting / Custom Lighting
  if (lower.includes('led') || lower.includes('lighting') || lower.includes('ambiance') || lower.includes('light')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25V4.5m0 15v2.25m-7.5-15h2.25m10.5 0H20.25M6.343 6.343l1.586 1.586m8.142 8.142l1.586 1.586m0-11.314l-1.586 1.586m-8.142 8.142l-1.586 1.586" />
      </svg>
    );
  }

  // Marble Flooring / Floor / Luxury Flooring
  if (lower.includes('marble') || lower.includes('flooring') || lower.includes('floor')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM9 3.75v16.5m6-16.5v16.5m-11.25-6h16.5m-16.5-6h16.5" />
      </svg>
    );
  }

  // Smart Home / Smart AC / Air Conditioning / climate
  if (lower.includes('smart') || lower.includes('ac') || lower.includes('conditioning') || lower.includes('climate')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    );
  }

  // Linen / Premium Linen / Bed / Headboard
  if (lower.includes('linen') || lower.includes('bed') || lower.includes('headboard') || lower.includes('pillow')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    );
  }

  // Shower / Rainfall Shower / Bathroom
  if (lower.includes('shower') || lower.includes('bathroom') || lower.includes('rainfall')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25A7.5 7.5 0 1119.5 10.5z" />
      </svg>
    );
  }

  // Concierge Butler / Concierge Service / Butler
  if (lower.includes('concierge') || lower.includes('butler') || lower.includes('service')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.746 3.746 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    );
  }

  // Sound / Professional Sound & PA / Stage Setup / Speakers / Music
  if (lower.includes('sound') || lower.includes('pa') || lower.includes('stage') || lower.includes('audio') || lower.includes('music')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    );
  }

  // Parking / Secure Parking / Garage
  if (lower.includes('parking') || lower.includes('car') || lower.includes('garage')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V14.25M12 18.75V16.5m0-4.5V3.75m0 0l-3.75 3.75M12 3.75l3.75 3.75" />
      </svg>
    );
  }

  // Garden / Outdoor Fire Pit / Fire Pit / Outdoor / Landscape
  if (lower.includes('garden') || lower.includes('fire') || lower.includes('outdoor') || lower.includes('pit')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
      </svg>
    );
  }

  // Espresso / Premium Espresso Bar / Bar / Drinks / Coffee
  if (lower.includes('espresso') || lower.includes('coffee') || lower.includes('bar') || lower.includes('drinks')) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }

  // Default key/checkmark
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
};

const ApartmentDetailsSkeleton: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-20 animate-pulse">
      {/* Back button link placeholder */}
      <div className="h-4 w-44 bg-slate-200 rounded-lg mb-12" />

      <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-16 lg:gap-24 items-start mb-24">
        
        {/* Gallery Container Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6">
          {/* Main Image placeholder */}
          <div className="relative aspect-[16/9] md:aspect-auto md:h-[600px] bg-slate-200/80 rounded-[2rem] shadow-sm" />
          
          {/* Thumbnail column placeholders */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:h-[600px] no-scrollbar">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-24 md:w-full aspect-square md:aspect-video bg-slate-200/50 rounded-xl" 
              />
            ))}
          </div>
        </div>

        {/* Info Container Skeleton */}
        <div className="flex flex-col pt-4">
          {/* Location placeholder */}
          <div className="h-3.5 w-32 bg-slate-200/70 rounded-md mb-6" />
          
          {/* Title placeholder */}
          <div className="h-14 w-3/4 bg-slate-200 rounded-2xl mb-8 animate-pulse" />
          
          {/* Amber bar placeholder */}
          <div className="h-1.5 w-16 bg-amber-200/80 mb-10 rounded-full" />
          
          {/* Description placeholders */}
          <div className="space-y-4 mb-10">
            <div className="h-4 w-full bg-slate-200/50 rounded-lg" />
            <div className="h-4 w-11/12 bg-slate-200/50 rounded-lg" />
            <div className="h-4 w-5/6 bg-slate-200/40 rounded-lg" />
          </div>

          {/* Share links placeholder */}
          <div className="mb-10 flex items-center gap-6">
            <div className="h-4 w-20 bg-slate-200/40 rounded-md" />
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-200/50" />
              <div className="w-10 h-10 rounded-full bg-slate-200/50" />
              <div className="w-10 h-10 rounded-full bg-slate-200/50" />
            </div>
          </div>

          {/* Occupancy / Area details placeholder */}
          <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-slate-100">
            <div>
              <div className="h-3.5 w-20 bg-slate-200/50 rounded-md mb-3" />
              <div className="h-6 w-24 bg-slate-200/70 rounded-lg" />
            </div>
            <div>
              <div className="h-3.5 w-20 bg-slate-200/50 rounded-md mb-3" />
              <div className="h-6 w-24 bg-slate-200/70 rounded-lg" />
            </div>
          </div>

          {/* Features / Amenities placeholder */}
          <div className="mb-16">
            <div className="h-4 w-40 bg-slate-200/60 rounded-md mb-8" />
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-200/60 shrink-0" />
                  <div className="h-4 w-24 bg-slate-200/50 rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Booking box placeholder */}
          <div className="bg-white p-8 border border-slate-100 rounded-[2rem] shadow-xl">
            <div className="mb-6 flex justify-between items-baseline">
              <div>
                <div className="h-3.5 w-24 bg-slate-200/50 rounded-md mb-2" />
                <div className="h-8 w-36 bg-slate-200/80 rounded-xl" />
              </div>
            </div>

            {/* Dates picker placeholder */}
            <div className="mb-6">
              <div className="h-3.5 w-32 bg-slate-200/50 rounded-md mb-3" />
              <div className="h-14 w-full bg-slate-200/40 rounded-2xl border border-slate-100" />
            </div>

            {/* Button placeholder */}
            <div className="h-16 w-full bg-slate-200 rounded-2xl" />
          </div>
        </div>
      </div>

      {/* House Rules Section Skeleton */}
      <section className="mb-24">
        <div className="flex items-center gap-6 mb-12">
          <div className="h-8 w-44 bg-slate-200 rounded-xl" />
          <div className="flex-grow h-px bg-slate-100" />
        </div>
        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="h-4 w-full bg-slate-200/50 rounded-lg" />
              <div className="h-4 w-5/6 bg-slate-200/50 rounded-lg" />
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="h-3.5 w-24 bg-slate-200/60 rounded-md mb-2" />
              <div className="h-4 w-full bg-slate-200/40 rounded-lg" />
            </div>
          </div>
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-4 animate-pulse" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="w-2 h-2 rounded-full bg-slate-200 shrink-0" />
                <div className="h-4 w-3/4 bg-slate-200/50 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ApartmentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const apartment = APARTMENTS.find(a => a.id === id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Simulate premium asset load state to showcase custom skeleton design
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [id]);

  const stayNights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);

  const dailyRate = useMemo(() => {
    if (!apartment) return null;
    const match = apartment.priceRange.match(/₦([\d,]+)/);
    if (match && match[1]) {
      return parseInt(match[1].replace(/,/g, ''), 10);
    }
    return null;
  }, [apartment]);

  const estimatedTotal = useMemo(() => {
    if (!dailyRate || stayNights <= 0) return null;
    return dailyRate * stayNights;
  }, [dailyRate, stayNights]);

  const similarListings = useMemo(() => {
    if (!apartment) return [];
    return APARTMENTS
      .filter(a => a.id !== apartment.id)
      .sort((a, b) => {
        const locA = a.location === apartment.location ? 1 : 0;
        const locB = b.location === apartment.location ? 1 : 0;
        return locB - locA;
      })
      .slice(0, 3);
  }, [apartment]);

  const nextImage = useCallback(() => {
    if (!apartment) return;
    setActiveIndex((prev) => (prev + 1) % apartment.images.length);
  }, [apartment]);

  const prevImage = useCallback(() => {
    if (!apartment) return;
    setActiveIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
  }, [apartment]);

  const nextLightboxImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!apartment) return;
    setLightboxIndex((prev) => (prev + 1) % apartment.images.length);
  }, [apartment]);

  const prevLightboxImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!apartment) return;
    setLightboxIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
  }, [apartment]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'ArrowRight') { e.preventDefault(); nextLightboxImage(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prevLightboxImage(); }
        if (e.key === 'Escape') { e.preventDefault(); setIsLightboxOpen(false); }
      } else {
        if (e.key === 'ArrowRight') { e.preventDefault(); nextImage(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prevImage(); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage, nextLightboxImage, prevLightboxImage, isLightboxOpen]);

  if (isLoading) {
    return <ApartmentDetailsSkeleton />;
  }

  if (!apartment) return <Navigate to="/apartments" replace />;

  const activeImage = apartment.images[activeIndex];
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(`Check out this amazing suite at Lifters' Suites: ${apartment.name}`);

  return (
    <div className="pt-32 pb-24 max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-20">
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button 
            className="absolute top-8 right-8 text-white/60 hover:text-white p-4 transition-all"
            onClick={() => setIsLightboxOpen(false)}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[80vh] px-4 flex items-center justify-center">
            <button 
              onClick={prevLightboxImage}
              className="absolute left-4 z-10 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <img 
              src={apartment.images[lightboxIndex]} 
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              onClick={nextLightboxImage}
              className="absolute right-4 z-10 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="mt-8 text-white/40 font-bold uppercase tracking-[0.4em] text-[10px]">
            {lightboxIndex + 1} / {apartment.images.length}
          </div>
        </div>
      )}

      <Link 
        to="/apartments" 
        className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-[#f59e0b] mb-12 transition-all group"
      >
        <svg className="w-5 h-5 mr-3 transform group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
        The Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-16 lg:gap-24 items-start mb-24">
        
        {/* Gallery Container */}
        <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6">
          <div 
            className="relative aspect-[16/9] md:aspect-auto md:h-[600px] shimmer-bg overflow-hidden border border-slate-200 rounded-[2rem] group shadow-2xl cursor-zoom-in"
            onClick={() => openLightbox(activeIndex)}
          >
            <img 
              key={activeImage}
              src={activeImage} 
              alt={`${apartment.name} main view - image ${activeIndex + 1}`} 
              className="w-full h-full object-cover gallery-image-fade transition-transform duration-700 hover:scale-105"
            />
            
            <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-md text-[#f59e0b] flex items-center justify-center hover:bg-white transition-all transform hover:scale-110 shadow-2xl border border-amber-50"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-md text-[#f59e0b] flex items-center justify-center hover:bg-white transition-all transform hover:scale-110 shadow-2xl border border-amber-50"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-bold text-white tracking-[0.2em] uppercase border border-white/20 shadow-lg">
              {activeIndex + 1} <span className="mx-2 text-white/40">|</span> {apartment.images.length}
            </div>
          </div>

          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:h-[600px] no-scrollbar">
            {apartment.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveIndex(idx)}
                onDoubleClick={() => openLightbox(idx)}
                className={`flex-shrink-0 w-24 md:w-full aspect-square md:aspect-video overflow-hidden rounded-xl border-2 transition-all duration-500 ${
                  activeIndex === idx 
                    ? 'border-[#f59e0b] scale-[1.02] shadow-xl opacity-100 z-10' 
                    : 'border-transparent opacity-50 hover:opacity-100 hover:border-slate-300'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Container */}
        <div className="flex flex-col pt-4">
          <span className="text-[#f59e0b] text-[11px] font-bold tracking-[0.5em] uppercase mb-6 block">
            {apartment.location}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 tracking-tight leading-tight">
            {apartment.name}
          </h1>
          <div className="h-1.5 w-16 bg-[#f59e0b] mb-10 rounded-full"></div>
          
          <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light italic">
            {apartment.description}
          </p>

          {/* Social Sharing */}
          <div className="mb-10 flex items-center gap-6">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Share Suite:</span>
            <div className="flex gap-4">
              <a 
                href={`https://wa.me/?text=${shareText}%20${shareUrl}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-sm"
                title="Share on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-800 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                title="Share on X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932ZM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404Z"/>
                </svg>
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                title="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-slate-100">
            <div>
              <span className="block text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-3">Occupancy</span>
              <span className="text-slate-900 font-bold text-lg font-serif">{apartment.capacity} Guests</span>
            </div>
            <div>
              <span className="block text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-3">Floor Area</span>
              <span className="text-slate-900 font-bold text-lg font-serif">{apartment.size}</span>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-slate-900 text-[11px] font-bold uppercase tracking-[0.3em] mb-8">Exclusive Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {apartment.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-4 text-slate-600 bg-white p-4 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-md hover:border-amber-200/60 hover:-translate-y-0.5 transition-all duration-300 group/amenity">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-amber-50 text-amber-500 group-hover/amenity:bg-amber-500 group-hover/amenity:text-white transition-all duration-500 shadow-sm">
                    {getAmenityIcon(amenity)}
                  </div>
                  <span className="font-serif font-bold text-xs tracking-wide text-slate-800 leading-snug">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto bg-white p-8 border border-slate-100 rounded-[2rem] shadow-xl">
            <div className="mb-6 flex justify-between items-baseline">
              <div>
                <span className="block text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-2">Starting Rate</span>
                <span className="text-3xl text-slate-900 font-serif font-bold">{apartment.priceRange.split('–')[0]}</span>
              </div>
              {stayNights > 0 && (
                <div className="text-right">
                  <span className="block text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">Stay Duration</span>
                  <span className="text-lg text-slate-800 font-bold font-serif">{stayNights} {stayNights === 1 ? 'Night' : 'Nights'}</span>
                </div>
              )}
            </div>

            {/* Premium Date Picker Component */}
            <div className="mb-6">
              <span className="block text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-3">Select Stay Dates</span>
              <DatePicker 
                checkIn={checkIn} 
                checkOut={checkOut} 
                onChange={(ci, co) => { 
                  setCheckIn(ci); 
                  setCheckOut(co); 
                }} 
              />
            </div>

            {/* Estimated Total Calculation */}
            {estimatedTotal !== null && (
              <div className="mb-6 p-4 bg-amber-50/50 rounded-2xl border border-amber-100/60 flex justify-between items-center animate-fade-in">
                <div>
                  <span className="block text-slate-500 text-[10px] uppercase tracking-wider font-semibold">Estimated Stay Cost</span>
                  <span className="text-xs text-slate-400 font-light italic">
                    ₦{dailyRate?.toLocaleString()} x {stayNights} {stayNights === 1 ? 'night' : 'nights'}
                  </span>
                </div>
                <span className="text-2xl text-[#f59e0b] font-serif font-extrabold">
                  ₦{estimatedTotal.toLocaleString()}
                </span>
              </div>
            )}

            {/* Prominent Book Now Button */}
            <Link 
              to="/inquiry" 
              state={{ 
                apartmentName: apartment.name,
                checkInDate: checkIn,
                checkOutDate: checkOut
              }}
              className="block w-full bg-[#f59e0b] text-white text-center py-6 font-bold uppercase tracking-[0.5em] text-[12px] hover:bg-[#d97706] transition-all duration-500 rounded-2xl shadow-[0_20px_40px_-10px_rgba(245,158,11,0.4)] active:scale-[0.98] transform hover:-translate-y-1"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* House Rules Section */}
      <section className="mb-24 animate-fade-in">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900">House <span className="text-[#f59e0b] italic">Rules</span></h2>
          <div className="flex-grow h-px bg-slate-100"></div>
        </div>
        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-slate-500 leading-relaxed font-light italic">To ensure the high standard of living and security for all our residents and guests, we kindly ask that you observe the following house rules during your stay at Lifters' Suites.</p>
            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
               <span className="text-[10px] text-[#f59e0b] font-bold uppercase tracking-widest block mb-2">Management Note</span>
               <p className="text-slate-600 text-xs leading-relaxed">Violations of these rules may result in immediate termination of the stay without refund and potential fines.</p>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-6">
            {apartment.houseRules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-4 text-slate-600">
                <div className="w-2 h-2 rounded-full bg-[#f59e0b] mt-2 flex-shrink-0"></div>
                <span className="text-sm font-light italic tracking-wide">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Similar Listings Section */}
      <section className="animate-fade-in">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Similar <span className="text-[#f59e0b] italic">Residences</span></h2>
          <div className="flex-grow h-px bg-slate-100"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {similarListings.map(similar => (
            <ApartmentCard key={similar.id} apartment={similar} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ApartmentDetails;

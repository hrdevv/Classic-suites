
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Apartment } from '../types';

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev + 1) % apartment.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
  };

  return (
    <article className="apt-card group bg-white shadow-sm hover:shadow-2xl">
      <div className="apt-card__img-wrapper relative h-80 overflow-hidden">
        <div 
          aria-live="polite" 
          className="w-full h-full"
          aria-label={`Current slide for ${apartment.name}: image ${currentImgIndex + 1} of ${apartment.images.length}`}
        >
          <img
            src={apartment.images[currentImgIndex]}
            alt={`${apartment.name} - View ${currentImgIndex + 1} showing ${apartment.description.substring(0, 50)}...`}
            className="apt-card__img w-full h-full object-cover transition-transform duration-1000"
            loading="lazy"
          />
        </div>
        
        {/* Carousel Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={prevImg}
            className="w-12 h-12 rounded-full bg-white/95 text-[#f59e0b] flex items-center justify-center hover:bg-white transition-all shadow-xl transform hover:scale-110 active:scale-95 border border-amber-50"
            aria-label={`View previous image for ${apartment.name}`}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextImg}
            className="w-12 h-12 rounded-full bg-white/95 text-[#f59e0b] flex items-center justify-center hover:bg-white transition-all shadow-xl transform hover:scale-110 active:scale-95 border border-amber-50"
            aria-label={`View next image for ${apartment.name}`}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {apartment.images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImgIndex ? 'bg-[#f59e0b] w-5' : 'bg-white/70'}`}
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#f59e0b] font-bold shadow-lg border border-amber-50">
          Featured
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-[#f59e0b] transition-colors tracking-tight">
            {apartment.name}
          </h3>
          <div className="flex items-center text-[#f59e0b] font-bold text-base">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9
          </div>
        </div>
        <p className="text-slate-400 text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
          {apartment.location}
        </p>
        <p className="text-slate-500 text-base mb-8 leading-relaxed line-clamp-2 font-light italic">
          {apartment.description}
        </p>
        
        <div className="mt-auto">
          <div className="text-slate-900 font-bold mb-8 text-base flex items-baseline">
            <span className="text-[11px] text-slate-300 font-normal uppercase tracking-widest mr-4">Rate from</span>
            {apartment.priceRange.split('–')[0]} <span className="text-[11px] text-slate-300 font-normal ml-2 tracking-widest uppercase">/ night</span>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            <Link
              to={`/apartments/${apartment.id}`}
              className="apt-card__btn rounded-xl"
              aria-label={`View details for ${apartment.name}`}
            >
              Details
            </Link>
            <Link
              to="/inquiry"
              state={{ apartmentName: apartment.name }}
              className="bg-[#f59e0b] text-white text-center py-4 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#d97706] transition-all flex items-center justify-center rounded-xl shadow-2xl shadow-amber-500/20"
              aria-label={`Book reservation for ${apartment.name}`}
            >
              Reserve
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ApartmentCard;

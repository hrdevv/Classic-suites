
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Suites', path: '/apartments' },
    { name: 'Events', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Inquiry', path: '/inquiry' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 glass-nav border-b border-slate-200 shadow-sm' : 'py-8 bg-transparent'
      }`} 
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl brand-logo text-slate-900 group">
              <span className="text-[#f59e0b]">Lifters'</span> <span className="text-slate-700">Suites</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path) ? 'text-[#f59e0b]' : 'text-slate-500 hover:text-[#f59e0b]'
                } transition-all duration-300 text-[10px] font-bold tracking-[0.25em] uppercase`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/inquiry" 
              className="bg-[#f59e0b] text-white px-8 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#d97706] transition-all shadow-lg shadow-amber-500/20"
            >
              Reserve Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#f59e0b] p-2 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} absolute top-0 left-0 w-full bg-white transition-all duration-500 md:hidden z-[-1] border-b border-slate-200 shadow-2xl`}>
        <div className="pt-24 pb-12 px-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-4 text-sm font-bold tracking-[0.2em] uppercase ${
                isActive(link.path) ? 'text-[#f59e0b]' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

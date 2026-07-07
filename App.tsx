
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Apartments from './pages/Apartments';
import ApartmentDetails from './pages/ApartmentDetails';
import Services from './pages/Services';
import Inquiry from './pages/Inquiry';

const PageManager = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Dynamic Title Management
    const baseTitle = "Lifters' Suites";
    const titles: Record<string, string> = {
      '/': 'Professional Serviced Apartments in Abuja',
      '/about': 'About Us | Institutional Quality',
      '/apartments': 'Apartment Listings | Short Stay Abuja',
      '/services': 'Our Services | Professional Living Solutions',
      '/inquiry': 'Make Inquiry | Check Availability',
    };
    
    // Handle dynamic apartment routes
    if (pathname.startsWith('/apartments/')) {
       document.title = `${baseTitle} | Residence Details`;
    } else {
       const key = pathname === '' ? '/' : pathname;
       document.title = `${baseTitle} | ${titles[key] || 'Professional Serviced Living'}`;
    }
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <PageManager />
      <div className="min-h-screen flex flex-col bg-[#f8fafc]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/apartments/:id" element={<ApartmentDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

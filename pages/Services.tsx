import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'policies' | 'amenities' | 'services';
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    category: 'policies',
    question: "What are the standard Check-in and Check-out times?",
    answer: "Our standard check-in is from 2:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out requests are subject to suite availability and can be coordinated in advance. Please notify our concierge team so we may accommodate your schedule."
  },
  {
    id: 2,
    category: 'amenities',
    question: "Is there guaranteed 24/7 electricity and high-speed internet?",
    answer: "Absolutely. We guarantee uninterrupted premium power support with an automatic dual-generator standby system. High-speed, fiber-optic Wi-Fi is deployed across all suites, designed to comfortably support secure corporate connections, video conferencing, and high-bandwidth executive workflows."
  },
  {
    id: 3,
    category: 'policies',
    question: "What security measures are implemented at the residences?",
    answer: "Guest safety is our ultimate priority. Our facilities employ highly trained 24/7 armed security personnel, comprehensive HD CCTV surveillance, automated secure access control gates, and fully dedicated private parking. All residences are located in Abuja's secure diplomatic and commercial zones."
  },
  {
    id: 4,
    category: 'amenities',
    question: "Are the kitchens fully equipped for self-catering?",
    answer: "Every suite boasts a fully equipped kitchenette or kitchen with professional-grade appliances, including a microwave oven, full-sized refrigerator, electric induction hub, electric kettle, and curated premium cookware and dinnerware. Culinary-trained chef-on-demand services are also available upon request."
  },
  {
    id: 5,
    category: 'services',
    question: "Do you provide premium laundry and housekeeping services?",
    answer: "Yes, daily premium-standard housekeeping is included in your booking. We also provide professional in-house laundry, dry cleaning, and ironing services conducted by our meticulously trained staff, ensuring your apparel is flawlessly maintained."
  },
  {
    id: 6,
    category: 'policies',
    question: "What is your booking modification and cancellation policy?",
    answer: "Guaranteed bookings can be cancelled or modified without charge up to 7 days prior to scheduled check-in. Cancellations within 7 days of arrival will incur a charge of the first night's stay. Corporate partners may benefit from tailored contract provisions."
  }
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'policies' | 'amenities' | 'services'>('all');
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQ = FAQ_ITEMS.filter(item => 
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      {/* Page Title Header */}
      <div className="mb-24 text-center max-w-3xl mx-auto animate-fade-in">
        <span className="text-[#f59e0b] text-[11px] font-bold tracking-[0.5em] uppercase mb-6 block">Structured Hospitality</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 tracking-tight">Our <span className="text-[#f59e0b]">Solutions</span></h1>
        <p className="text-slate-500 text-xl leading-relaxed font-light italic">
          Providing structured hospitality and secure living for corporate organizations, international travelers, and discerning individuals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
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
            Abuja’s preferred event destination for corporate conferences, diplomatic gatherings, and boutique celebrations with full utility backup.
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

      {/* Interactive FAQ Section with Elegant Accordion */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_8fr] gap-16 items-start">
          
          {/* FAQ Left: Sidebar and Categories */}
          <div className="lg:sticky lg:top-36 space-y-10">
            <div>
              <span className="text-[#f59e0b] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Factual Clarifications</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                Guest <span className="text-[#f59e0b] italic">Inquiries</span>
              </h2>
              <p className="mt-6 text-slate-500 text-base font-light italic leading-relaxed">
                Clear explanations regarding our administrative policies, elite suite amenities, and dedicated security standards.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => { setActiveCategory('all'); setOpenId(null); }}
                className={`w-full text-left px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === 'all'
                    ? 'bg-slate-900 text-[#f59e0b] border-slate-900 shadow-lg shadow-slate-900/10'
                    : 'bg-white text-slate-500 border-slate-100 hover:border-amber-200/60 hover:text-[#f59e0b]'
                }`}
              >
                All Frequently Asked Questions
              </button>
              <button
                onClick={() => { setActiveCategory('policies'); setOpenId(FAQ_ITEMS.find(f => f.category === 'policies')?.id || null); }}
                className={`w-full text-left px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === 'policies'
                    ? 'bg-slate-900 text-[#f59e0b] border-slate-900 shadow-lg shadow-slate-900/10'
                    : 'bg-white text-slate-500 border-slate-100 hover:border-amber-200/60 hover:text-[#f59e0b]'
                }`}
              >
                Policies & Security
              </button>
              <button
                onClick={() => { setActiveCategory('amenities'); setOpenId(FAQ_ITEMS.find(f => f.category === 'amenities')?.id || null); }}
                className={`w-full text-left px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === 'amenities'
                    ? 'bg-slate-900 text-[#f59e0b] border-slate-900 shadow-lg shadow-slate-900/10'
                    : 'bg-white text-slate-500 border-slate-100 hover:border-amber-200/60 hover:text-[#f59e0b]'
                }`}
              >
                Amenities & Utilities
              </button>
              <button
                onClick={() => { setActiveCategory('services'); setOpenId(FAQ_ITEMS.find(f => f.category === 'services')?.id || null); }}
                className={`w-full text-left px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === 'services'
                    ? 'bg-slate-900 text-[#f59e0b] border-slate-900 shadow-lg shadow-slate-900/10'
                    : 'bg-white text-slate-500 border-slate-100 hover:border-amber-200/60 hover:text-[#f59e0b]'
                }`}
              >
                Services & Housekeeping
              </button>
            </div>
          </div>

          {/* FAQ Right: Interactive Accordion */}
          <div className="space-y-6">
            {filteredFAQ.length > 0 ? (
              filteredFAQ.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`bg-white rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                      isOpen
                        ? 'border-amber-200 shadow-xl shadow-amber-500/5 bg-gradient-to-br from-white to-amber-50/10'
                        : 'border-slate-100 shadow-sm hover:border-amber-200/50 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Header Button */}
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left px-8 py-7 md:px-10 md:py-8 flex justify-between items-center gap-6 group"
                    >
                      <h3 className="text-base md:text-lg font-serif font-bold text-slate-800 leading-snug group-hover:text-amber-500 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                        isOpen ? 'bg-amber-500 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-amber-50 group-hover:text-amber-500'
                      }`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {/* Accordion Content with Modern CSS Grid transition (auto height) */}
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}>
                      <div className="min-h-0 overflow-hidden">
                        <div className="px-8 pb-8 md:px-10 md:pb-9 text-slate-500 font-light italic text-sm md:text-base leading-relaxed border-t border-slate-50/50 pt-5">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="bg-white p-12 text-center rounded-[2rem] border border-slate-100">
                <span className="text-slate-400 italic">No inquiries found in this category.</span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Corporate packages callout */}
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

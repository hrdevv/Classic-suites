
import { Apartment } from './types';

export const BRAND_NAME = "Lifters' Suites";

export const APARTMENTS: Apartment[] = [
  {
    id: 'executive-2-bedroom',
    name: 'Executive 2-Bedroom Suite',
    location: 'Wuse II, Abuja',
    description: 'A masterpiece of modern atmospheric design. Featuring high-contrast marble flooring, custom amber LED accents, and premium velvet furnishings. Designed for those who demand a sophisticated nocturnal elegance.',
    priceRange: '₦120,000 – ₦150,000 per night',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['Amber LED Ambiance', 'Marble Flooring', 'Smart Home Integration', 'High-Speed Wi-Fi', '24/7 Power Support', 'Fully Equipped Kitchenette'],
    capacity: 4,
    size: '145 sqm',
    houseRules: [
      'No smoking allowed indoors.',
      'Check-in: 2:00 PM | Check-out: 11:00 AM.',
      'Quiet hours from 10:00 PM to 7:00 AM.',
      'No large parties or loud events without prior consent.',
      'Pets are allowed only in designated pet-friendly units.'
    ]
  },
  {
    id: 'signature-master-suite',
    name: 'Signature Master Suite',
    location: 'Maitama, Abuja',
    description: 'Experience the "Sunburst" signature bedroom design. This suite combines artisanal wall textures with bespoke lighting to create a sanctuary of comfort and style.',
    priceRange: '₦85,000 – ₦110,000 per night',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1505691722718-628a5015b321?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['Custom Sunburst Headboard', 'Premium Linen', 'Mood Lighting Control', 'Rainfall Shower', 'Daily Housekeeping'],
    capacity: 2,
    size: '65 sqm',
    houseRules: [
      'No smoking in the master bedroom area.',
      'Maximum occupancy of 2 adults.',
      'Valid identification required for all guests.',
      'Check-in after 2:00 PM.'
    ]
  },
  {
    id: 'grandeur-banquet-hall',
    name: 'The Grandeur Hall',
    location: 'Wuse II, Abuja',
    description: 'A world-class multi-purpose event space. From high-profile corporate conferences to dream weddings, intimate concerts, and elite private parties. Fully equipped with professional sound and lighting.',
    priceRange: 'Custom Quote / Day',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1464366420600-d01851af4111?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['Professional Sound & PA', 'Stage Setup', 'Concierge Service', 'Catering Support', 'VIP Holding Room', 'Secure Parking'],
    capacity: 250,
    size: '450 sqm',
    houseRules: [
      'Event security personnel must be hired for groups over 50.',
      'Sound levels must strictly adhere to local district noise regulations.',
      'Loading and unloading must happen in designated service zones.',
      'A damage deposit is required for all banquet hall rentals.'
    ]
  },
  {
    id: 'premium-garden-villa',
    name: 'Premium Garden Villa',
    location: 'Maitama, Abuja',
    description: 'A secluded oasis of green in the heart of the city. This villa offers private garden access, an outdoor fire pit, and floor-to-ceiling glass walls that merge the interior with the landscape.',
    priceRange: '₦180,000 – ₦220,000 per night',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['Private Garden', 'Outdoor Fire Pit', 'Concierge Butler', 'Smart Integrated AC', 'Premium Espresso Bar'],
    capacity: 6,
    size: '220 sqm',
    houseRules: [
      'No glassware near the fire pit area.',
      'Garden events require separate approval.',
      'Max 6 overnight guests.',
      'Professional photography requires written permission.'
    ]
  }
];

export const BRAND_COLORS = {
  primary: '#f59e0b', // Amber
  primaryDark: '#d97706',
  secondary: '#166534', // Forest Green
  bgLight: '#f8fafc',
  textDark: '#1e293b',
};

export const CONTACT_INFO = {
  phone: '+234 812 345 6789',
  email: 'concierge@lifterssuites.com',
  location: 'Abuja, Nigeria',
  whatsapp: '2348123456789',
  socials: {
    instagram: 'https://instagram.com/lifterssuites',
    facebook: 'https://facebook.com/lifterssuites',
  }
};

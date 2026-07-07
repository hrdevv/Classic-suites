
export interface Apartment {
  id: string;
  name: string;
  location: string;
  description: string;
  priceRange: string;
  imageUrl: string; // Keep for backward compatibility/thumbnail
  images: string[];
  amenities: string[];
  capacity: number;
  size: string;
  houseRules: string[];
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  apartmentOfInterest: string;
  checkInDate: string;
  checkOutDate: string;
  guests: string;
  additionalNotes: string;
}

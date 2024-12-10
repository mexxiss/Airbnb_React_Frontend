// Property details
export interface PropertyDetails {
  max_guest_count?: number;
  rooms_count: number;
  beds_count?: number;
  bathrooms_count?: number;
  furnishing?: string;
  utilities?: string[];
  parking_no?: string;
  wifi?: { name: string; password: string };
  permit?: { permit_code: string; permit_expiry_date: string };
}

// Address details
export interface Address {
  building_no: string;
  city: string;
  street: string;
  area: string;
  landmark: string;
  pincode: string;
  country: string;
}

// Discount details
export interface DiscountsPercentage {
  weekly: number;
  monthly: number;
}

// Check-in/out details
export interface PropertyCheckDetails {
  check_in: string;
  check_out: string;
}

// Property image
export interface PropertyImage {
  _id: string;
  key: string;
  img_url: string;
  __v: number;
  type: string;
}

// Amenities
export interface Amenity {
  _id: string;
  title: string;
  icon: string;
  __v: number;
}

// Costs details
export interface Costs {
  prices: {
    security_amount: number;
    price_per_night: number;
    cleaning_fee: number;
  };
  currency: string;
  security_details: string;
  revenue_details: {
    future_occupancy: string;
    total_revenue: number;
  };
  _id: string;
}

// Maintenance summary
export interface MaintenanceSummary {
  _id: string;
  totalCost: number;
}

// Book details
export interface BookDetails {
  _id: string;
  total_stays: number;
  total_nights_count: number;
  total_stay_charges: number;
  total_cleaning_fee: number;
  total_discount: number;
  total_tourism_tax: number;
  total_vat_tax: number;
  total_net_charges: number;
}

// Property response
export interface Property {
  _id: string;
  title: string;
  description: string;
  status: string;
  property_details: PropertyDetails;
  address?: Address;
  discounts_percentage?: DiscountsPercentage;
  property_check_details?: PropertyCheckDetails;
  important_information?: Record<string, string>;
  property_images: PropertyImage[];
  costs?: Costs;
  staying_rules?: string[];
  cancellation_policy?: string;
  amenities?: Amenity[];
  createdAt?: string;
  updatedAt?: string;
  __v: number;
}

// API response for multiple properties
export interface PropertiesResponse {
  statusCode: number;
  data: Property[];
  message: string;
  success: boolean;
}

// API response for a single property
export interface PropertyByIdResponse {
  statusCode: number;
  data: {
    properties: Property;
    maintenanceSummary: MaintenanceSummary[];
    bookDetails: BookDetails[];
  };
  message: string;
  success: boolean;
}

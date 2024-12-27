export interface BookedDateDocument {
  _id: string;
  checkin_date: string;
  checkout_date: string;
  property: string;
  nights_count_dynamic: number;
  first_name: string;
  last_name: string;
  guest_count: number;
  source: string;
  revenue_gross: number;
  maintenance_fee: number;
  total_gross: number
}

export interface BookedDatesTotals {
  _id: {
    month: number;
    year: number;
  };
  total_stays: number;
  total_nights_count: number;
  total_stay_charges: number;
  total_cleaning_fee: number;
  total_discount: number;
  total_tourism_tax: number;
  total_vat_tax: number;
  total_net_charges: number;
}

export interface BookedDatesResponse {
  documents: BookedDateDocument[];
  totals: BookedDatesTotals;
}

export interface OccupancyResponse {
  _id: {
    year: number;
    month: number;
  };
  total_nights_booked: number;
  days_in_month: number;
  occupancy_percentage: number;
}

export interface BookedDatesFilter {
  dates: BookedDatesResponse;
  occupancy: OccupancyResponse[];
}
// filter

export interface FilterBookedDatesRequest {
  start_date: string;
  property: string;
}

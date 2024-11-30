export interface BookedDateDocument {
  _id: string;
  checkin_date: string;
  checkout_date: string;
  property: string;
  nights_count: number;
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

// filter

export interface FilterBookedDatesRequest {
  start_date: string;
  property: string;
}

// Root level response type
export interface ContactResponse {
  success: boolean;
  data: ContactData;
  msg: string;
}

// Data structure for "data" key
export interface ContactData {
  emails: string[];
  phones: string[];
  location: {
    city: string;
    state: string;
    country: string;
    pincode: string;
    address: string;
    coordinates: [
      {
        lat: number;
        long: number;
        _id: string;
      }
    ];
  };
  _id: string;
  __v: number;
}

export interface ContactState {
  data: ContactData | null;
}

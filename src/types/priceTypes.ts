export interface PricingOffer {
  _id: string;
  title: string;
  figures: string;
  icon: string;
  offers: string[];
  __v: number;
}

export interface PricingState {
  data: PricingOffer[];
  message: string;
  success: boolean;
  statusCode: number;
}

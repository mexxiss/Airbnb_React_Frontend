export interface PaymentDetails {
  _id?: string;
  accountHolderName?: string;
  accountNumber?: string;
  bankName: string;
  swiftCode: string;
  iban: string;
  paymentMethod: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  address: string;
  currency: string;
  __v: number;
}

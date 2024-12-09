// types.ts

export interface BankAccount {
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  swiftCode: string;
  iban: string;
}

export interface PaymentDetails {
  bankAccount: BankAccount;
  paymentMethod: string;
}

export interface Address {
  building_no: string;
  city: string;
  street: string;
  area: string;
  landmark: string;
  country: string;
  pincode: string;
}

export interface Document {
  _id: string;
}

export interface Documents {
  dewaBills: Document[];
}

export interface UserDetails {
  _id: string;
  first_name: string;
  last_name: string;
  email: string[];
  phone: string[];
  isLoggedIn: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  address: Address;
}

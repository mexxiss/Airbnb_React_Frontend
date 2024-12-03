export interface LoginFormInputs {
  email: string;
  password: string;
}

// loginTypes.ts

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

export interface Documents {
  dewaBills: Array<{ _id: string }>;
}

export interface User {
  _id: string;
  fullname: string;
  email: string[];
  phone: string[];
  password: string;
  isLoggedIn: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  accessToken: string;
  paymentDetails: PaymentDetails;
  address: Address;
  documents: Documents;
}

export interface LoginResponse {
  statusCode: number;
  data: {
    user: User;
  };
  message: string;
  success: boolean;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean | null;
}

export interface DocumentProps {
  _id?: string;
  title?: string;
  expiry_date?: string;
  note?: string;
  document?: string;
  property?: string;
  user?: string;
  createdAt?: string;
  updatedAt?: string;
  __v: number;
}

export interface DocumentState {
  docs: DocumentProps[];
}

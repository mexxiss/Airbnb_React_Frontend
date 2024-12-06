export interface Legal {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export interface LegalResponse {
  statusCode: number;
  data: Legal[];
  message: string;
  success: boolean;
}

export interface ThirdParty {
  _id: string;
  logo: string;
  type: string;
  name: string;
  __v: number;
  brand_image: string;
}

export interface Article {
  _id: string;
  added_on: string;
  third_party: ThirdParty;
  headline: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ArticlesResponse {
  statusCode: number;
  data: Article[];
  message: string;
  success: boolean;
}

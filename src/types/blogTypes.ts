// types/blogTypes.ts

export interface Category {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Blog {
  _id: string;
  title: string;
  subtitle: string;
  body: string;
  thumbnail: string;
  category: Category;
  tags: string[];
  added_on: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogsResponse {
  statusCode: number;
  data: Blog[];
  message: string;
  success: boolean;
}

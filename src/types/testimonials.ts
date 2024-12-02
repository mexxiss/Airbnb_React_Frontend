export interface Testimonial {
  _id: string;
  comment: string;
  name: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
}

export interface TestimonialsResponse {
  statusCode: number;
  data: Testimonial[];
  message: string;
  success: boolean;
}

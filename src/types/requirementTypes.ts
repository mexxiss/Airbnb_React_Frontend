// Type for individual points
export interface Point {
  _id: string;
  title: string;
  body: string;
  image?: string; // Image is optional
  text_direction: "right" | "left";
  order_no: number;
}

// Type for the head section
export interface Head {
  title: string;
  body: string;
}

// Type for the main data structure
export interface Requirement {
  _id: string;
  head: Head;
  points: Point[];
}

// API response type
export interface ApiResponse {
  statusCode: number;
  data: Requirement[];
  message: string;
  success: boolean;
}

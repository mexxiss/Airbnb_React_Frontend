export interface IGuide {
  _id: string;
  video_url: string;
  thumbnail: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IGuideResponse {
  statusCode: number;
  data: IGuide[];
  message: string;
  success: boolean;
}

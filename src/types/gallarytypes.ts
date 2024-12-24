import { IGallaryTypesData } from "./gallaryTabTypes";

export interface IGallaryData {
  _id: string;
  type: IGallaryTypesData;
  img_url: string;
  property: string;
  __v: number,
}
export interface FetchGalleryParams {
  type?: string | null;
  id?: string | null | undefined;
  page?: number | null | undefined | unknown;
  limit?: number | null | undefined;
}

export interface IPageResponse {
  success: boolean,
  count: number,
  data: IGallaryData[],
}

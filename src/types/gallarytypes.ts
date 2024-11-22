import { IGallaryTypesData } from "./gallaryTabTypes"

export interface IGallaryData {
    _id: string,
    type: IGallaryTypesData,
    img_url: string,
    key: string | null;
}
export interface FetchGalleryParams {
    type: string | null
}
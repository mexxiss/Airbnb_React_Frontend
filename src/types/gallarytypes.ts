export interface IGallaryData {
    key: string,
    img_url: string
}
export interface FetchGalleryParams {
    showAll: boolean;
    key: string | null;
}
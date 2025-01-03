export interface IEstimateRevenueBeds {
    title: string;
    increment: number;
    _id: string
}
export interface IEstimateRevenueFurnishing {
    title: string;
    increment: number;
    _id: string;
}
export interface IEstimateRevenueDoc {
    _id: string;
    area_name: string;
    beds: IEstimateRevenueBeds[];
    furnishing: IEstimateRevenueFurnishing[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}
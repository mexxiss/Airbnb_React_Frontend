import axiosInstance from "./axiosInstance";

export interface FetchPropertiesParams {
  page: number;
  limit: number;
}

export interface FetchGalleryParams {
  showAll: boolean;
  key: string;
}


export const fetchProperties = async ({
  page,
  limit,
}: FetchPropertiesParams) => {
  const response = await axiosInstance.get("/get-properties", {
    params: { page, limit }, // Add query parameters
  });
  return response.data; // Ensure this matches your API response structure
};

//home content api
export const fetchHomeContent = async () => {
  const response = await axiosInstance.get("/home-content");
  return response.data; 
};

export const fetchGallary = async ({showAll, key}:FetchGalleryParams) => {
  const response = await axiosInstance.get(`/gallery?all=${showAll}&key=${key}`);
  console.log(response.data);
  return response.data;
}
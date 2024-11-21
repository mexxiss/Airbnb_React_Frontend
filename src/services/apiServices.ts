import axiosInstance from "./axiosInstance";

export interface FetchPropertiesParams {
  page: number;
  limit: number;
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
  return response.data; // Ensure this matches your API response structure
};

export const fetchGallary = async () => {
  const response = await axiosInstance.get('/');
  return response.data;
}
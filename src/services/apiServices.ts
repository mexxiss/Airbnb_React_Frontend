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

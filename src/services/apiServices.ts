import axiosInstance from "./axiosInstance";
import { FetchGalleryParams } from "../types/gallarytypes";
import { ContactResponse } from "../types/contactTypes";
import { IFaqParams } from "../types/faqTypes";

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
  return response.data;
};

export const fetchGallary = async ({ type, id }: FetchGalleryParams) => {
  const response = await axiosInstance.get(`/gallery?id=${id}&type=${type}`);
  return response.data;
};

export const fetchGallaryTypes = async () => {
  const response = await axiosInstance.get("/gallery-types");
  return response.data;
};

export const fetchContact = async (): Promise<ContactResponse> => {
  const response = await axiosInstance.get<ContactResponse>(`/contact-us`);
  return response.data;
};

export const fetchFaqs = async ({ page }: IFaqParams) => {
  const response = await axiosInstance.get(`/faqs?page=${page}`);
  return response.data;
};

// post contact query api

export const postContactQuery = async (data: {
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  const response = await axiosInstance.post("/contact-us/query", data);
  return response.data;
};

export const fetchCountryCode = async (
  lat: number,
  lng: number
): Promise<string | null> => {
  try {
    const response = await axiosInstance.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );

    const country = response.data.results.find((result: any) =>
      result.types.includes("country")
    )?.address_components[0]?.short_name;

    return country || null; // Return country code or null if not found
  } catch (error) {
    console.error("Error fetching country code:", error);
    return null;
  }
};

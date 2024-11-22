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

export const fetchGallary = async ({ type }: FetchGalleryParams) => {
  const response = await axiosInstance.get(
    `/gallery?type=${type}`
  );
  return response.data;
};

export const fetchGallaryTypes = async() => {
  const response = await axiosInstance.get("/gallery-types");
  return response.data;
}

export const fetchContact = async (): Promise<ContactResponse> => {
  const response = await axiosInstance.get<ContactResponse>(`/contact-us`);
  return response.data;
};


export const fetchFaqs = async ({ page }: IFaqParams) => {
  const response = await axiosInstance.get(`/faqs?page=${page}`);
  return response.data;
}
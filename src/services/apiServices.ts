import axiosInstance from "./axiosInstance";
import { FetchGalleryParams } from "../types/gallarytypes";
import { ContactResponse } from "../types/contactTypes";
import { IFaqParams } from "../types/faqTypes";
import { PricingState } from "../types/priceTypes";
import axios from "axios";
import {
  PropertiesResponse,
  PropertyByIdResponse,
} from "../types/propertiesTypes";
import {
  BookedDatesResponse,
  FilterBookedDatesRequest,
} from "../types/bookedDates";
import { TestimonialsResponse } from "../types/testimonials";
import { LoginFormInputs } from "../types/loginTypes";

export interface FetchPropertiesParams {
  page: number;
  limit: number;
}

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

export const fetchPricing = async (): Promise<PricingState> => {
  const response = await axiosInstance.get(`/pricing`); // Replace with your API endpoint
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
    const response = await axios.get(
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

/** Get Properties Apis */

export const fetchProperties = async (): Promise<PropertiesResponse> => {
  const response = await axiosInstance.get(`/properties`);
  return response.data;
};

export const fetchPropertyById = async (
  id: string
): Promise<PropertyByIdResponse> => {
  const response = await axiosInstance.get(`/properties/${id}`);
  return response.data;
};

/**Booked Details */

export const fetchBookedDates = async (
  filter: FilterBookedDatesRequest
): Promise<any> => {
  const response = await axiosInstance.get<any>("/booked-dates/filter", {
    params: filter,
  });

  return response?.data;
};

export const fetchTestimonials = async (): Promise<TestimonialsResponse> => {
  const response = await axiosInstance.get<TestimonialsResponse>(
    "/testimonials"
  );
  return response.data;
};

export const login = async (data: LoginFormInputs): Promise<any> => {
  const response = await axiosInstance.post("/users/login", data);
  return response.data;
};
export const logOut = async (data: LoginFormInputs): Promise<any> => {
  const response = await axiosInstance.post("/users/login", data);
  return response.data;
};

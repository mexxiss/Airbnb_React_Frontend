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
import { ChangePasswordProps, LoginFormInputs } from "../types/loginTypes";
import { IGuideResponse } from "../types/guideTypes";
import { ArticlesResponse } from "../types/articleTypes";
import { BlogsResponse } from "../types/blogTypes";
import { LegalResponse } from "../types/legalTypes";
import { ApiResponse, Requirement } from "../types/requirementTypes";
import { UserDetails } from "../types/userDetailsTypes";
import { PaymentDetails } from "../types/paymentsTypes";
import { DocumentState } from "../types/documentTypes";

export interface FetchPropertiesParams {
  page: number;
  limit: number;
}

//home content api
export const fetchHomeContent = async () => {
  const response = await axiosInstance.get("/home-content");
  return response.data;
};

export const fetchGallary = async ({
  type,
  id,
  limit,
  page,
}: FetchGalleryParams) => {
  const response = await axiosInstance.get(
    `/gallery?id=${id}&type=${type}&page=${page}&limit=${limit}`
  );
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

/** Testimonials  */
export const fetchTestimonials = async (): Promise<TestimonialsResponse> => {
  const response = await axiosInstance.get<TestimonialsResponse>(
    "/testimonials"
  );
  return response.data;
};

/** Login */
export const login = async (data: LoginFormInputs): Promise<any> => {
  const response = await axiosInstance.post("/users/login", data);
  return response.data;
};

/** Logout */
export const logOut = async (): Promise<any> => {
  const response = await axiosInstance.post("/users/logout");
  return response.data;
};

/** Change Password */
export const changePassword = async (
  data: ChangePasswordProps
): Promise<any> => {
  const response = await axiosInstance.post("/users/change-pass", data);
  return response.data;
};

export const fetchGuides = async (): Promise<IGuideResponse> => {
  const response = await axiosInstance.get(`/guides`);
  return response.data;
};

export const fetchArticles = async (): Promise<ArticlesResponse> => {
  const response = await axiosInstance.get("/featured-articles");
  return response.data;
};

export const fetchBlogs = async (
  page: number,
  limit: number = 10
): Promise<BlogsResponse> => {
  const { data } = await axiosInstance.get(
    `/blogs?limit=${limit}&page=${page}`
  );
  return data;
};

export const fetchBlogsById = async (id: string): Promise<any> => {
  const response = await axiosInstance.get(`/blogs/${id}`);
  return response.data;
};

export const fetchLegals = async (): Promise<LegalResponse> => {
  const response = await axiosInstance.get<LegalResponse>("/legals");
  return response.data;
};

export const fetchRequirements = async (): Promise<Requirement[]> => {
  const response = await axiosInstance.get<ApiResponse>("/requirements");
  return response.data.data;
};

export const fetchUserDetails = async (): Promise<UserDetails> => {
  const response = await axiosInstance.get(`/users`);
  return response.data.user;
};

export const updateUserDetails = async (updates: any) => {
  try {
    const response = await axiosInstance.put(`/users`, { updates });
    return response.data; // Return the updated user details
  } catch (error: any) {
    console.error(
      "Error updating user details:",
      error.response || error.message
    );
    throw error;
  }
};


export const getPaymentDetails = async (): Promise<any> => {
  const response = await axiosInstance.get(`/payment-details`);
  return response.data;
};

export const updatePaymentDetails = async (
  updates: PaymentDetails
): Promise<PaymentDetails> => {
  const response = await axiosInstance.put(`/payment-details/${updates._id}`, {
    updates,
  });
  return response.data;
};

export const getUserDocuments = async (propertyId: string): Promise<any> => {
  const response = await axiosInstance.get(
    `/user-documents?property=${propertyId}`
  );
  return response.data;
};

export const updateDocument = async (
  documentId: string,
  updates: any
): Promise<any> => {
  const response = await axiosInstance.put(`/user-documents/${documentId}`, {
    updates,
  });
  return response.data;
};

export const uploadFile = async (
  file: File | string,
  folder: string
): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axiosInstance.post(
      `/upload/single?folder=${folder}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data; // This returns the response from the API after uploading the file
  } catch (error) {
    console.log({ error });
  }
};

export const fetchAirbnbDubai = async () => {
  try {
    const response = await axiosInstance.get(`/airbnb-dubai`);
    return response.data; 
  } catch (error: any) {
    console.error(
      "Error updating user details:",
      error.response || error.message
    );
    throw error;
  }
}


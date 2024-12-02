import { useQuery } from "@tanstack/react-query";
import { TestimonialsResponse } from "../../../types/testimonials";
import { fetchTestimonials } from "../../../services/apiServices";

export const useFetchTestimonials = () => {
  return useQuery<TestimonialsResponse>({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });
};

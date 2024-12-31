import { useQuery } from "@tanstack/react-query";
import { fetchAboutData } from "../../../services/apiServices";

export const useFetchAboutData = () => {
  return useQuery({
    queryKey: ["aboutUs"],
    queryFn: () => fetchAboutData(),
  });
};

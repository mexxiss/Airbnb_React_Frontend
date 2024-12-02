import { useQuery } from "@tanstack/react-query";
import { fetchHomeContent } from "../../../services/apiServices";

export const useFetchHomeContent = () => {
  return useQuery({
    queryKey: ["homeContent"],
    queryFn: fetchHomeContent,
  });
};

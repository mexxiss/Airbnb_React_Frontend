import { useQuery } from "@tanstack/react-query";
import { fetchPropertyById } from "../../../services/apiServices";

export const useFetchPropertyById = (id: string) => {
  return useQuery({
    queryKey: ["properties", id],
    queryFn: () => fetchPropertyById(id!),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
};

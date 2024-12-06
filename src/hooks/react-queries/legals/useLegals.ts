import { useQuery } from "@tanstack/react-query";
import { fetchLegals } from "../../../services/apiServices";
import { Legal } from "../../../types/legalTypes";

export const useLegals = () => {
  return useQuery<Legal[], Error>({
    queryKey: ["legals"],
    queryFn: async () => {
      const response = await fetchLegals();
      return response.data; // Return only the `data` array
    },
  });
};

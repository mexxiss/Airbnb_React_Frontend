import { useQuery } from "@tanstack/react-query";
import { fetchLegals } from "../../../services/apiServices";
import { Legal } from "../../../types/legalTypes";

export const useLegals = (type: string) => {
  return useQuery<Legal, Error>({
    queryKey: ["legals", type],
    queryFn: async () => {
      const response = await fetchLegals(type);
      return response.data; // Return only the `data` array
    },
  });
};

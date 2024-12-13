// hooks/useUtilities.ts
import { useQuery } from "@tanstack/react-query";
import { fetchUtilities } from "../../../services/apiServices";

export const useUtilities = (propertyId: string) => {
  return useQuery({
    queryKey: ["utilities", propertyId],
    queryFn: () => fetchUtilities(propertyId),
  });
};

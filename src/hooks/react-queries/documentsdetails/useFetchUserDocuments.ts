import { useQuery } from "@tanstack/react-query";
import { DocumentState } from "../../../types/documentTypes";
import { getUserDocuments } from "../../../services/apiServices";

export const useFetchUserDocuments = (propertyId: string) => {
  return useQuery<DocumentState>({
    queryKey: ["userDocuments", propertyId],
    queryFn: () => getUserDocuments(propertyId),
    enabled: !!propertyId, // Ensures the query runs only when propertyId is available
  });
};

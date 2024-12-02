import { useQuery } from "@tanstack/react-query";
import { fetchContact } from "../../../services/apiServices";
import { ContactResponse } from "../../../types/contactTypes";

export const useFetchContactDetails = () => {
  return useQuery<ContactResponse>({
    queryKey: ["contact"],
    queryFn: fetchContact,
  });
};

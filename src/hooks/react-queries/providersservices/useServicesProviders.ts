import { useQuery } from "@tanstack/react-query";
import { getServiceProviders } from "../../../services/apiServices";

export const useServicesProviders = () => {
  return useQuery({
    queryKey: ["servicesprovider"],
    queryFn: getServiceProviders,
  });
};

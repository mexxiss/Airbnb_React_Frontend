import { useQuery } from "@tanstack/react-query";
import { UserDetails } from "../../../types/userDetailsTypes";
import { fetchUserDetails } from "../../../services/apiServices";

export const useUserDetails = () => {
  return useQuery<UserDetails, Error>({
    queryKey: ["userDetails"],
    queryFn: fetchUserDetails,
  });
};

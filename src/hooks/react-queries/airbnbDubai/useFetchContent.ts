// hooks/useFetchArticles.ts

import { useQuery } from "@tanstack/react-query";
import { fetchAirbnbDubai } from "../../../services/apiServices";
import { AirbnbDubaiResponse } from "../../../types/airbnbDubaiTypes";

export const useFetchContent = () => {
  return useQuery<AirbnbDubaiResponse>({
    queryKey: ["airbnb dubai"],
    queryFn: fetchAirbnbDubai,
  });
};

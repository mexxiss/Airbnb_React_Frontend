import { useQuery } from "@tanstack/react-query";
import { IGuideResponse } from "../../../types/guideTypes";
import { fetchGuides } from "../../../services/apiServices";

export const useGetGuides = () => {
  return useQuery<IGuideResponse>({
    queryKey: ["guides"],
    queryFn: fetchGuides,
    refetchOnWindowFocus: false,
  });
};

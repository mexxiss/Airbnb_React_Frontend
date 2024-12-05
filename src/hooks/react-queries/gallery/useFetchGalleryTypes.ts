import { useQuery } from "@tanstack/react-query";
import { fetchGallaryTypes } from "../../../services/apiServices";
import { IGallaryTypesData } from "../../../types/gallaryTabTypes";

export const useFetchGalleryTypes = () => {
  return useQuery<IGallaryTypesData[]>({
    queryKey: ["gallaryTypesData"],
    queryFn: fetchGallaryTypes,
    refetchOnWindowFocus: false,
  });
};

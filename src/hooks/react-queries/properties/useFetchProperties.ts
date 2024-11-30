import { useQuery } from "@tanstack/react-query";
import { fetchProperties } from "../../../services/apiServices";

export const useFetchProperties = () => {
  return useQuery({ queryKey: ["properties"], queryFn: fetchProperties });
};

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../../services/apiServices";

export const useBlogs = (page: number, limit: number = 10) => {
  return useQuery({
    queryKey: ["blogs", page, limit],
    queryFn: () => fetchBlogs(page, limit),
    placeholderData: keepPreviousData,
  });
};

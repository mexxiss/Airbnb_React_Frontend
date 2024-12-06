// useFetchBlogById

// hooks/useBlog.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBlogsById } from "../../../services/apiServices";

export const useFetchBlogById = (blogId: string) => {
  return useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogsById(blogId),
    enabled: !!blogId, // Fetch only if blogId is provided
  });
};

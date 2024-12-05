// hooks/useFetchArticles.ts

import { useQuery } from "@tanstack/react-query";
import { ArticlesResponse } from "../../../types/articleTypes";
import { fetchArticles } from "../../../services/apiServices";
export const useFetchArticles = () => {
  return useQuery<ArticlesResponse>({
    queryKey: ["articlesData"],
    queryFn: fetchArticles,
  });
};

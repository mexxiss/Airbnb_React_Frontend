import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchGalleryParams, IGallaryData } from "../../../types/gallarytypes";
import { fetchGallary } from "../../../services/apiServices";

interface UseFetchGalleryParams {
  queryParams: FetchGalleryParams;
}

const initialPage = 1;

export const useFetchGalleryData = ({ queryParams }: UseFetchGalleryParams) => {
  return useInfiniteQuery({
    queryKey: ["gallaryData", queryParams],
    queryFn: ({ pageParam = initialPage }) =>
      fetchGallary({ ...queryParams, page: pageParam, limit: 8 }),
    getNextPageParam: (lastPage) =>
      lastPage?.hasNextPage ? lastPage?.currentPage + 1 : undefined,
    initialPageParam: initialPage,
    enabled: !!queryParams,
  });
};

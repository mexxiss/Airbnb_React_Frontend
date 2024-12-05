import { useCallback, useEffect } from "react";

export const useInfiniteScroll = (
  fetchNextPage: () => void,
  hasNextPage: boolean | undefined,
  isFetching: boolean,
  container?: HTMLElement
) => {
  const handleScroll = useCallback(() => {
    const scrollContainer = container || document.documentElement; // Default to whole page if no container
    const isBottom =
      scrollContainer.scrollHeight - scrollContainer.scrollTop ===
      scrollContainer.clientHeight;

    if (isBottom && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching, container]);

  useEffect(() => {
    const scrollContainer = container || window; // Check either page or specific container
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, container]);
};

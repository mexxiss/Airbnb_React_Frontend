import { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchGallary, fetchGallaryTypes } from "../../services/apiServices";
import { useFetchGalleryData } from "../../hooks/react-queries/gallery";
import { setGallary } from "../../store/features/gallarySlice";
import { setGallaryTypes } from "../../store/features/gallaryTypesSlice";
import { useInfiniteScroll } from "../../hooks/custom-hook/useInfiniteScroll";
import GalleryFilters from "../../Components/Gallery/GalleryFilters";
import GalleryList from "../../Components/Gallery/GalleryList";
import Banner from "../../Components/Gallery/Banner";

const GalleryNew = () => {
  const [isActive, setIsActive] = useState("All");
  const [isKey, setIsKey] = useState("All");
  const [finalTypesData, setFinalTypesData] = useState<any>([]);
  const dispatch = useDispatch();

  const queryParams =
    isActive !== "All"
      ? { type: isKey, id: isActive }
      : { type: "All", id: "" };

  // Using the useFetchGalleryData hook to fetch paginated gallery data
  const {
    data: gallaryData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useFetchGalleryData({ queryParams });

  const { data: typesData } = useQuery({
    queryKey: ["gallaryTypesData"],
    queryFn: fetchGallaryTypes,
  });

  const finalGalleryData = gallaryData?.pages.flatMap((page) => page.data);

  useEffect(() => {
    if (finalGalleryData) {
      dispatch(setGallary(finalGalleryData)); // Set gallery data in Redux store
    }
  }, [finalGalleryData, dispatch]);

  useEffect(() => {
    if (typesData?.data) {
      const updatedTypes = [
        { _id: "All", name: "All", __v: 0 },
        ...typesData.data,
      ];
      setFinalTypesData(updatedTypes);
      dispatch(setGallaryTypes(updatedTypes));
    }
  }, [typesData, dispatch]);

  // IntersectionObserver for infinite scroll
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetching) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage(); // Fetch the next page when the last element is in view
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage, isFetching]
  );

  return (
    <>
      <div className="py-10 container mx-auto">
        <Banner />
        <GalleryFilters
          finalTypesData={finalTypesData}
          isActive={isActive}
          setIsActive={setIsActive}
          setIsKey={setIsKey}
        />
        <GalleryList
          finalGalleryData={finalGalleryData || []}
          isFetching={isFetching}
          hasNextPage={hasNextPage}
          lastElementRef={lastElementRef}
        />
      </div>
    </>
  );
};

export default GalleryNew;

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { icon27 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";
import { Link } from "react-router-dom";
import { FetchGalleryParams, IGallaryData, IPageResponse } from "../../types/gallarytypes";
import { useDispatch } from "react-redux";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchGallaryInfinite, fetchGallaryTypes } from "../../services/apiServices";
import { setGallary } from "../../store/features/gallarySlice";
import GallerySkeleton from "../../Components/LoadingShimmers/GallerySkeleton.tsx";
import { IGallaryTypesData } from "../../types/gallaryTabTypes.ts";
import { setGallaryTypes } from "../../store/features/gallaryTypesSlice.ts";
import { VisibilityOutlined } from "@mui/icons-material";
import { Tooltip } from "flowbite-react";
import PropertyQuickView from "../../Components/Modals/PropertyQuickView.tsx";

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isActive, setIsActive] = useState("All");
  const [isKey, setIsKey] = useState("All");
  const [finalTypesData, setFinalTypesData] = useState<IGallaryTypesData[]>([]);
  const [property, setProperty] = useState<any>(null);

  const dispatch = useDispatch();

  const queryParams: FetchGalleryParams =
    isActive !== "All"
      ? { type: isKey, id: isActive }
      : { type: "All", id: "" };

  const {
    data: infiniteData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: isGalleryLoading,
    isError: isGalleryError,
    error: galleryError,
  } = useInfiniteQuery({
    queryKey: ["galleryData", queryParams],
    queryFn: ({ pageParam = 1 }: { pageParam: number }) =>
      fetchGallaryInfinite({ ...queryParams, page: pageParam, limit: 8 }),
    getNextPageParam: (lastPage: IPageResponse, allPages: IPageResponse[]) => {
      return lastPage.data.length === 8 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    enabled: !!queryParams,
  });

  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, inView, fetchNextPage]);

  const finalGalleryData: IGallaryData[] = infiniteData?.pages?.flatMap((page) => page.data) || []

  useEffect(() => {
    dispatch(setGallary(finalGalleryData as IGallaryData[]));
  }, [finalGalleryData, dispatch]);

  const {
    isLoading: isTypesLoading,
    isError: isTypesError,
    error: typesError,
    data: typesData,
  } = useQuery({
    queryKey: ["galleryTypesData"],
    queryFn: fetchGallaryTypes,
  });

  useEffect(() => {
    if (typesData?.data) {
      const updatedTypesData = [
        { _id: "All", name: "All", __v: 0 },
        ...typesData.data,
      ];
      setFinalTypesData(updatedTypesData);
      dispatch(setGallaryTypes(updatedTypesData as IGallaryTypesData[]));
    }
  }, [typesData, dispatch]);

  if (isGalleryError && galleryError instanceof Error)
    return <p>Error: {galleryError.message}</p>;
  if (isTypesError && typesError instanceof Error)
    return <p>Error: {typesError.message}</p>;

  return (
    <>
      <div
        className="pt-20 sm:pt-28 pb-10 sm:pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
        style={{
          backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-4">
            <h2 className="text-[42px] sm:text-5xl font-bold text-center text-[#1F1607] font-light]">
              Gallery
            </h2>
            <p className="flex items-center gap-4 text-[#4C360E]">
              <span>
                <Link
                  to="/"
                  className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
                >
                  Home
                </Link>
              </span>
              <span>
                <img src={icon27} className="w-4" />
              </span>
              <span>Gallery</span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container mx-auto">
          <h3
            className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] font-light] leading-[50px] 2xl:leading-[58px] text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
            
          >
            Portfolio
          </h3>
          <p
            className="max-w-[550px] mx-auto text-[#60410C] lg:text-lg  mt-2 text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
            
          >
            Have a look at our select property portfolio
          </p>
          <div className="mt-12">
            <ul className="flex overflow-auto justify-between items-center border-b-2 border-[#AEAEAE]">
              {!isTypesLoading &&
                finalTypesData?.map((e, index) => (
                  <li key={index}>
                    <button
                      className={`px-8 py-1 text-nowrap text-center capitalize md:text-lg ${isActive === e?._id
                        ? "border-b-[3.5px] border-[#DCC397] font-medium text-[#DCC397]"
                        : "text-[#1F1607] font-normal"
                        }`}
                      onClick={() => {
                        setIsActive(e?._id);
                        setIsKey(e?.name);
                      }}
                    >
                      {e?.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-10">
            <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6">
              {isGalleryLoading
                ? Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index}>
                      <GallerySkeleton />
                    </div>
                  ))
                : finalGalleryData?.map((e, index) => (
                  <div
                    key={index}
                    className="max-h-60 lg:h-64 rounded overflow-hidden relative"
                  >
                    <img
                      src={e.img_url}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 right-3 ">
                      <Tooltip content="Quick View" placement="left">
                        <button className="rounded-full bg-primary bg-opacity-60 hover:bg-opacity-100 duration-300 text-white flex items-center justify-center w-8 h-8" onClick={() => {setOpenModal(true); setProperty(e.property)}}><VisibilityOutlined className="!text-lg" /></button>
                      </Tooltip>
                    </div>
                  </div>
                ))
              }

            </div>
            <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" ref={ref}>
              {isFetchingNextPage &&
                Array(4).fill(0).map((_, index) => (
                  <div key={index}>
                    <GallerySkeleton />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <PropertyQuickView openModal={openModal} setOpenModal={setOpenModal} property={property} />
    </>
  );
};

export default Gallery;
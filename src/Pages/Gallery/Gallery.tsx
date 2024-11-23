import { useEffect, useState } from "react";
import { icon27 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";
import { Link } from "react-router-dom";
import { FetchGalleryParams, IGallaryData } from "../../types/gallarytypes";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchGallary, fetchGallaryTypes } from "../../services/apiServices";
import { setGallary } from "../../store/features/gallarySlice";
import GallerySkeleton from "../../Components/LoadingShimmers/GallerySkeleton.tsx";
import { IGallaryTypesData } from "../../types/gallaryTabTypes.ts";
import { setGallaryTypes } from "../../store/features/gallaryTypesSlice.ts";

interface IResponse {
  success: boolean | null;
  data: IGallaryData[] | null;
  statusCode: number | null;
  message: string | null;
}
interface ITypesResponse {
  success: boolean | null;
  data: IGallaryTypesData[] | null;
  statusCode: number | null;
  message: string | null;
}

const Gallery = () => {
  const [isActive, SetIsActive] = useState("All");
  const [finalTypesData, setFinalTypesData] = useState<IGallaryTypesData[]>([]);
  const dispatch = useDispatch();

  const queryParams: FetchGalleryParams = isActive !== "All" ? { type: isActive } : {type: ""};

  const { isLoading: isGallaryLoading, isError: isGallaryError, error: gallaryError, data: gallaryData } = useQuery<IResponse>({
    queryKey: ["gallaryData", queryParams],
    queryFn: () => fetchGallary(queryParams),
  });

  const { isLoading: isTypesLoading, isError: isTypesError, error: typesError, data: typesData } = useQuery<ITypesResponse>({
    queryKey: ["gallaryTypesData"],
    queryFn: () => fetchGallaryTypes()
  })

  const finalGallaryData = gallaryData?.data;

  useEffect(() => {
    dispatch(setGallary(finalGallaryData as IGallaryData[]));
  }, [gallaryData]);

  useEffect(() => {
    if (typesData?.data) {
      const updatedTypesData = [
        { _id: "All", name: "All", __v: 0 },
        ...typesData.data, 
      ];
      setFinalTypesData(updatedTypesData); 
      dispatch(setGallaryTypes(updatedTypesData as IGallaryTypesData[])); 
    }
  }, [typesData])

  if (isGallaryError && gallaryError instanceof Error) return <p>Error: {gallaryError.message}</p>;
  if (isTypesError && typesError instanceof Error) return <p>Error: {typesError.message}</p>;

  return (
    <>
      {/* banner */}
      <div
        className="pt-20 sm:pt-28 pb-10 sm:pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
        style={{
          backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-4">
            <h2 className="text-[42px] sm:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
              Gallery
            </h2>
            <p className="flex items-center gap-4 text-[#4C360E]">
              <span className="">
                <Link to="/" className="hover:underline">
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

      <div className="py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div>
            <ul className="flex overflow-auto justify-between items-center border-b-2 border-[#AEAEAE]">
              {!isTypesLoading && finalTypesData?.map((e: any, index: any) => (
                <li key={index}>
                  <button
                    className={`px-8 py-1 text-nowrap text-center capitalize md:text-lg ${isActive === e?._id
                      ? "border-b-[3.5px] border-[#DCC397] font-medium text-[#DCC397]"
                      : "text-[#1F1607] font-normal"
                      }`}
                    onClick={() => SetIsActive(e?._id)}
                  >
                    {e?.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {isGallaryLoading
                ? Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index}>
                      <GallerySkeleton />
                    </div>
                  ))
                : finalGallaryData?.map((e: any, index: any) => (
                  <div
                    key={index}
                    className="max-h-60 lg:h-64 rounded-xl overflow-hidden"
                  >
                    <img
                      src={e.img_url}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

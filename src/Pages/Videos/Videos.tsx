import { Link } from "react-router-dom";
import { icon27 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";
import { useGetGuides } from "../../hooks/react-queries/guide/useGetGuide.ts";
import { useDispatch, useSelector } from "react-redux";
import { setGuides } from "../../store/features/guidesSlice.ts";
import { useCallback, useEffect, useMemo } from "react";
import Loader from "../../Components/Loader/Loader.tsx";
import ErrorHandleMessage from "../../Components/ErrorHandleComponent/ErrorHandleMessage.tsx";
import { RootState } from "../../store/store.ts";

const Videos = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, isError } = useGetGuides();

  const finalData = useMemo(() => data?.data, [data]);

  const memoizedDispatch = useCallback(() => {
    if (finalData) {
      dispatch(setGuides(finalData));
    }
  }, [finalData, dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const videosData = useSelector((state: RootState) => state.guides.guides);

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error instanceof Error) {
    return <ErrorHandleMessage msg={error.message} />;
  }

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
            <h2 className="text-[42px] sm:text-5xl font-bold text-center text-[#1F1607] font-light]">
              Videos
            </h2>
            <p className="flex items-center gap-4 text-[#4C360E]">
              <span className="">
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
              <span>Videos</span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5">
            {videosData?.map((video, i) => (
              <div key={video._id}>
                <h6 className="text-xl text-text1 text-center">
                  {video.title}
                </h6>
                <div className="aspect-video mt-2">
                  <video
                    src={video.video_url}
                    controls
                    className="w-full h-full shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;

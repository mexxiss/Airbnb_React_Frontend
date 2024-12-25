import { Link } from "react-router-dom";
import { icon27 } from "../../assets/icons/index.ts";
import {
  bg1,
  img10,
  img11,
  img1,
  img2,
  img3,
  img12,
} from "../../assets/images/index.ts";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import FAQ from "../../Components/Home/FAQ.tsx";
import { useFetchContent } from "../../hooks/react-queries/airbnbDubai/useFetchContent.ts";
import { useDispatch, useSelector } from "react-redux";
import { setAirbnbDubai } from "../../store/features/airbnbDubaiSlice.ts";
import { RootState } from "../../store/store.ts";
import Loader from "../../Components/Loader/Loader.tsx";
import ErrorHandleMessage from "../../Components/ErrorHandleComponent/ErrorHandleMessage.tsx";
import "./AirbnbDubai.css";

const AirbnbDubai = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useFetchContent();
  const content = useMemo<any>(() => data, [data]);

  const memoizedDispatch = useCallback(() => {
    if (content) {
      dispatch(setAirbnbDubai(content));
    }
  }, [content]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const contentData = useSelector((state: RootState) => state.airbnbdubai.data)

  if (isLoading) return <Loader />;
  if (isError && error instanceof Error)
    return <ErrorHandleMessage msg={error.message} />;

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
              Airbnb Dubai
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
              <span>Airbnb Dubai</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20 relative">
        <div className="container mx-auto">
          <div>
            <h4
              className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]"
              data-aos="fade-right"
              data-aos-duration="1000"
              
            >
              {contentData?.section1.title}
            </h4>

            {contentData?.section1?.body ? (
              <div className="airbnb-dubai mt-3 text-[#60410C]" dangerouslySetInnerHTML={{ __html: contentData.section1.body }} />
            ) : (
              <p>...</p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 3xl:gap-14">
            <div>
              <img
                src={contentData?.section2?.image}
                className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] max-h-[400px] h-full object-cover max-w-[600px] lg:max-w-full w-full"
              />
            </div>
            <div className="">
              <h4
                className=" text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1"
                data-aos="fade-left"
                data-aos-duration="1000"
                
              >
                {contentData?.section2?.title}
              </h4>
              {contentData?.section2?.body ? (
                <div className="airbnb-dubai section2" dangerouslySetInnerHTML={{ __html: contentData.section2.body }} />
              ) : (
                <p>...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <h4
            className="text-center text-2xl xs:text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1"
            data-aos="fade-up"
            data-aos-duration="1000"
            
          >
            {contentData?.section3?.title}
          </h4>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 3xl:gap-x-10 gap-y-6 md:gap-y-12 mt-8">
            {contentData?.section3?.points.map((point, index) => (
              <div className="">
                <h6
                  className="text-[#1F1607] text-xl sm:text-2xl font-medium"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  
                >
                  {point.title}
                </h6>
                <p
                  className="text-[#4D5461] mt-2"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  
                >
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 3xl:gap-14">
            <div className="order-1 lg:order-2">
              <img
                src={contentData?.section4?.image}
                className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px]  h-full object-cover max-w-[600px] lg:max-w-full w-full"
              />
            </div>
            <div className="order-2 lg:order-1">
              <h4
                className=" text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1"
                data-aos="fade-right"
                data-aos-duration="1000"
                
              >
                {contentData?.section4?.title}
              </h4>
              {contentData?.section4?.body ? (
                <div className="airbnb-dubai section4" dangerouslySetInnerHTML={{ __html: contentData.section4.body }} />
              ) : (
                <p>...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <h4
            className="text-center text-2xl xs:text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1"
            data-aos="fade-up"
            data-aos-duration="1000"
            
          >
            {contentData?.section5?.title}
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6 md:mt-10">
            {contentData?.section5.images.map((image, index) => (
              <div>
                <img
                  src={image}
                  className="w-full max-h-[300px] h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FAQ title="Dubai Airbnb FAQs" img_url={img12} />
      </Suspense>
    </>
  );
};

export default AirbnbDubai;

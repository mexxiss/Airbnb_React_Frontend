import { Link } from "react-router-dom";
import { icon27 } from "../../assets/icons/index.ts";
import { bg1, interiorFaq } from "../../assets/images/index.ts";
import FAQ from "../../Components/Home/FAQ.tsx";
import { Suspense, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRequirements } from "../../hooks/react-queries/requirements/useRequirements.ts";
import { setRequirements } from "../../store/features/requirementSlice.ts";
import { RootState } from "../../store/store.ts";
import Loader from "../../Components/Loader/Loader.tsx";
import ErrorHandleMessage from "../../Components/ErrorHandleComponent/ErrorHandleMessage.tsx";
import './AirbnbRequirements.css'

const AirbnbRequirements = () => {
  const dispatch = useDispatch();
  const { data: requirements, isLoading, isError, error } = useRequirements();
  const finalData = useMemo<any>(() => requirements, [requirements]);

  const memoizedDispatch = useCallback(() => {
    if (finalData) {
      dispatch(setRequirements(finalData));
    }
  }, [finalData, dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const requirementData = useSelector(
    (state: RootState) => state.requirements.requirements
  );

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
            <h2 className="text-3xl xs:text-4xl sm:text-[42px] md:text-5xl font-bold text-center text-[#1F1607] font-light] line-clamp-2">
              Airbnb requirements
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
              <span className=" inline-block max-w-[120px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
                Airbnb requirements and fees Dubai (DET)
              </span>
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
              {requirementData[0]?.head?.title}
            </h4>
            <div
              className="mt-3 text-[#60410C]"
              dangerouslySetInnerHTML={{
                __html: requirementData[0]?.head?.body,
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
              
            />
          </div>
        </div>
      </div>
      {requirementData[0]?.points?.map((point) => (
        <div key={point._id} className="pt-14 md:pt-16 lg:pt-20 airbnbRequirements">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 3xl:gap-14">
              {/* Image */}
              <div
                className={
                  point.text_direction === "right"
                    ? "order-1 lg:order-2"
                    : "order-1"
                }
              >
                <img
                  src={point.image || "/default-image.jpg"} // Fallback if no image
                  alt={point.title}
                  className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] max-h-[400px] h-full object-cover max-w-[600px] lg:max-w-full w-full"
                />
              </div>

              {/* Text Content */}
              <div
                className={
                  point.text_direction === "right"
                    ? "order-2 lg:order-1"
                    : "order-1"
                }
              >
                <h4
                  className="text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1"
                  data-aos={
                    point.text_direction === "right"
                      ? "fade-right"
                      : "fade-left"
                  }
                  data-aos-duration="1000"
                  
                >
                  {point.title}
                </h4>
                <div
                  className="text-[#4D5461 mt-3"
                  dangerouslySetInnerHTML={{ __html: point.body }}
                  data-aos={
                    point.text_direction === "right"
                      ? "fade-right"
                      : "fade-left"
                  }
                  data-aos-duration="1000"
                  
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <Suspense fallback={<div>Loading...</div>}>
        <FAQ title="Holiday Home License FAQs" img_url={interiorFaq} />
      </Suspense>
    </>
  );
};

export default AirbnbRequirements;

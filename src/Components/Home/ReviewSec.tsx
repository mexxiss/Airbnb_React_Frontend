import { useCallback, useEffect, useMemo, useRef } from "react";
import { img7,userImg, img12 } from "../../assets/images/index.ts";
import Slider from "react-slick";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useFetchTestimonials } from "../../hooks/react-queries/testimonials/useFetchTestimonials.ts";
import { setTestimonials } from "../../store/features/testimonialsSlice.ts";
import Loader from "../Loader/Loader.tsx";
import ErrorHandleMessage from "../ErrorHandleComponent/ErrorHandleMessage.tsx";

const ReviewSec = () => {
  let sliderRef = useRef<Slider | null>(null);
  const dispatch = useDispatch();

  const { isLoading, isError, error, data } = useFetchTestimonials();

  const finalData = useMemo(() => data?.data, [data]);

  const memoizedDispatch = useCallback(() => {
    if (finalData) {
      dispatch(setTestimonials(finalData));
    }
  }, [finalData, dispatch]);

  // Using useEffect to dispatch only when finalData changes
  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  useEffect(() => {
    if (sliderRef.current) {
    }
  }, []);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,


    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
        },
      }
    ],
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error instanceof Error) {
    return <ErrorHandleMessage msg={error.message} />;
  }

  return (
    <div
      className="py-16 bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(rgba(31, 22, 7, 0.85), rgba(31, 22, 7, 0.85)), url(${img7})`,
      }}
    >
      <div className="container mx-auto">
        <div className="text-center max-w-[740px] mx-auto">
          <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] sm:leading-[50px] font-semibold text-white" data-aos="fade-yp" data-aos-duration="1200" >
            What our clients say about us?
          </h4>
          <p className="sm:text-lg text-white mt-2 mx-auto" data-aos="fade-up" data-aos-duration="1200" >
            See what our property managers, landlords, and tenants have to say
          </p>
        </div>
        <div className="mt-10 md:mt-14">
          <div className="lg:px-20 relative">
            <div className="hidden lg:block">
              <button
                className="border border-white w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center text-white bg-[#1F1607] hover:bg-primary hover:border-primary duration-300 absolute z-30 left-0 bottom-0 md:top-1/2 md:-translate-y-1/2"
                onClick={previous}
              >
                <KeyboardArrowLeftOutlined className=" md:!text-3xl" />
              </button>
              <button
                className="border border-white w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center text-white bg-[#1F1607] hover:bg-primary hover:border-primary duration-300 absolute z-30 right-0 bottom-0 md:top-1/2 md:-translate-y-1/2"
                onClick={next}
              >
                <KeyboardArrowRightOutlined className=" md:!text-3xl" />
              </button>
            </div>
            <div className="reviewSec">
              <Slider {...settings} ref={sliderRef}>
                {data?.data.map((data, i) => (
                  <div className="px-2" key={data._id}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 items-end md:items-center gap-6">
                      <div className="text-white col-span-2">
                        <div className="mb-4 flex gap-4 items-center">
                          <div className="w-20 h-20 rounded-full border-[3px] border-primary p-1">
                            <span><img src={userImg} alt="" /></span>
                          </div>
                          <p className="flex flex-col gap-1">
                            <span className="text-xl font-semibold leading-4">{data?.name}</span>{" "}
                            <span>{data?.designation}</span>
                          </p>
                        </div>
                        <p className="text-sm md:text-base lg:text-lg tracking-wider lg:leading-7">
                          {data.comment}
                        </p>
                      </div>
                      <div>
                        <div>
                          <img src={img12} className="w-full object-cover rounded-2xl max-h-[150px] sm:max-h-[250px] min-h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSec;

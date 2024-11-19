import { useEffect, useRef } from "react";
import img7 from "../../assets/images/img7.png";
import Slider from "react-slick";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";

const ReviewSec = () => {
  let sliderRef = useRef<Slider | null>(null);;

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
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
    ],
  };
  return (
    <div
      className="py-16 bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(rgba(31, 22, 7, 0.85), rgba(31, 22, 7, 0.85)), url(${img7})`,
      }}
    >
      <div className="container mx-auto">
        <div className="text-center max-w-[740px] mx-auto">
          <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] sm:leading-[50px] font-semibold text-white">
            What our clients say about us?
          </h4>
          <p className="sm:text-lg text-white mt-4 max-w-[490px] mx-auto">
            See what our property managers, landlords, and tenants have to say
          </p>
        </div>
        <div className="mt-10 md:mt-14">
          <div className="md:px-20 relative">
            <div>
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
            <div>
              <Slider {...settings} ref={sliderRef}>
                <div className="px-2">
                  <div className="text-center text-white">
                    <p className="text-lg sm:text-xl md:text-2xl font-montserrat tracking-wide md:leading-8">
                      “Estatery is the platform I go to on almost a daily basis
                      for 2nd home and vacation condo shopping, or to just look
                      at dream homes in new areas. Thanks for fun home shopping
                      and comparative analyzing, Estatery!”
                    </p>
                    <p className="text-lg sm:text-xl mt-10">
                      <span className="font-semibold">Mira Culos</span>, Guest{" "}
                    </p>
                  </div>
                </div>
                <div className="px-2">
                  <div className="text-center text-white">
                    <p className="text-lg sm:text-xl md:text-2xl font-montserrat tracking-wide md:leading-8">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum nesciunt delectus maxime, possimus ea facere
                      fugiat libero, ducimus quod nisi aliquid enim a et aut
                      harum. Placeat cum veniam recusandae! ”
                    </p>
                    <p className="text-lg sm:text-xl mt-10">
                      <span className="font-semibold">inder</span>, Guest{" "}
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSec;

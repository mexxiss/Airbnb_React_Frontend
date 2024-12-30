import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const FAQ = lazy(() => import("../../Components/Home/FAQ"));
const WeList = lazy(() => import("../../Components/Home/WeList"));
const ShortTerm = lazy(() => import("../../Components/Home/ShortTerm"));
const ReviewSec = lazy(() => import("../../Components/Home/ReviewSec"));
const BrandFeature = lazy(
  () => import("../../Components/BrandFeature/BrandFeature")
);
import { icon27 } from "../../assets/icons/index.ts";
import { bg1, img1, img2, img3 } from "../../assets/images/index.ts";
// import img4 from "../../assets/images/img4.png";

const AboutUs = () => {
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
              About Us
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
              <span>About Us</span>
            </p>
          </div>
        </div>
      </div>

      {/* about us section */}
      <div className="pt-14 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <h4
            className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:[42px] font-semibold text-[#1F1607]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Bridging Properties with People
          </h4>
          <p
            className="text-[#60410C] mt-3 font-semibold"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Our name speaks for itself – we’re dedicated to providing honest,
            top-tier concierge services. Our goal is to ensure you feel at ease
            while renting your home, making the entire experience smooth and
            enjoyable.
          </p>
          <p
            className="text-[#60410C] mt-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            A true globetrotter, he’s lived and traveled across the world.
            Fluent in 15 languages, including English, Arabic, Swedish, French,
            Russian, Spanish, Italian, Turkish, Urdu, German, Hindi, Filipino,
            Swahili, Afrikaans, and Polish, he understands both your needs and
            those of your guests. Most importantly, his focus is on helping you
            maximize your earnings.
          </p>
          <div className="mt-10 md:mt-16">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <img
                src={img1}
                className="h-full object-cover object-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={img2}
                className="h-full object-cover object-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={img3}
                className="h-full object-cover object-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrandFeature />
        <ReviewSec />
        <ShortTerm />
        <WeList />
        {/* <FAQ title='About Us FAQs' /> */}
      </Suspense>
    </>
  );
};

export default AboutUs;

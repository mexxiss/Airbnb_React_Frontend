import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { icon27 } from "../../assets/icons/index.ts";
import {
  bg1,
  img11,
  img9,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
} from "../../assets/images/index.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

const FAQ = lazy(() => import("../../Components/Home/FAQ"));

const ListingManagement = () => {
  const homeContent = useSelector((state: RootState) => state.homeContent.data);

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
            <h2 className="text-4xl sm:text-[42px] md:text-5xl font-bold text-center text-[#1F1607] font-light] ">
              Listing Management
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
              <span>Service</span>
              <span>
                <img src={icon27} className="w-4" />
              </span>
              <span className="inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
                Listing Management
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20 relative">
        <div className="container mx-auto">
          <div>
            <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
              Listing Management
            </h4>
            <p className="mt-3  text-[#60410C]">
              {homeContent?.listing_management?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 sm:py-14 md:py-16 mt-14 md:mt-16 lg:mt-20 bg-[#fff6e7]">
        <div className="container mx-auto">
          <div className="">
            <div>
              <h4 className="text-3xl sm:text-[34px] xl:text-[36px] font-semibold text-text1 text-center ">
                Where we list
              </h4>
            </div>
            <div className="mt-12 space-y-8">
              <div className="grid grid-cols-3 gap-8 max-w-[900px] mx-auto">
                <img
                  src={logo1}
                  className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
                />
                <img
                  src={logo2}
                  className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
                />
                <img
                  src={logo3}
                  className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
                />
                <img
                  src={logo4}
                  className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
                />
                <img
                  src={logo5}
                  className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
                />
                <img
                  src={logo6}
                  className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 3xl:gap-14">
            <div>
              <img
                src={img11}
                className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] h-full object-cover max-w-[600px] lg:max-w-full w-full"
              />
            </div>
            <div>
              <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                What’s Included
              </h4>
              <ul className="list-decimal pl-6 mt-6 flex flex-col gap-6">
                {homeContent?.listing_management?.what_inclued.map(
                  (item, index) => (
                    <li key={index}>
                      <h6 className="text-[#1F1607] text-xl font-medium">
                        {item.title}
                      </h6>
                      <p className="text-[#4D5461] mt-3">{item.description}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1F1607] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row  gap-3 md:gap-20 text-center md:text-left">
            <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-white text-nowrap">
              Pricing Your Listing
            </h4>
            <p className="text-[#DCC397] md:text-lg">
              Pricing is a critical element of effective property management. We
              leverage advanced algorithms alongside manual adjustments to keep
              your property competitively priced. Factors like seasonality,
              demand, holidays, and global events are carefully considered to
              determine the optimal nightly rate. Our in-house pricing expert
              monitors these trends daily, making updates as needed to maximize
              your property’s revenue.
            </p>
          </div>
          <div className="text-center mt-8">
            <button className="btn1">
              <Link to={"/contact-us"}>Contact us</Link>
            </button>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <FAQ title="Holiday Home Listing FAQs" img_url={img9} />
      </Suspense>
    </>
  );
};

export default ListingManagement;

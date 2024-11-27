import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { icon26, icon27, star } from "../../assets/icons/index.ts";
import { bg1, img1 } from "../../assets/images/index.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
const FAQ = lazy(() => import("../../Components/Home/FAQ"));

const CleaningMaintenance = () => {
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
            <h2 className="text-4xl sm:text-[42px] md:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
              Cleaning & Maintenance
            </h2>
            <p className="flex items-center gap-4 text-[#4C360E]">
              <span className="">
                <Link to="/" className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
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
              <span>Cleaning & Maintenance</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <h4 className=" text-[26px] xs:text-3xl sm:text-[34px] xl:text-[36px] 2xl:[42px] font-semibold text-[#1F1607] sm:leading-[48px]">
            Airbnb Cleaning <br />
            Service & Maintenance
          </h4>
          <p className="text-[#60410C] mt-3">
            In-house cleaning and maintenance services are provided to ensure
            properties are perfect for guests.
          </p>
        </div>
      </div>

      <div className="pt-16 md:pt-20 lg:pt-24">
        <div className="container mx-auto">
          <div className="pl-12 xs:pl-20 relative z-20">
            <div className="max-w-max sm:max-w-[200px] bg-white w-full rounded-b-xl sm:rounded-b-[20px] shadow-[40.05px_40.05px_74.38px_0px_#7065F026] border-2 border-[#ecebf5] px-4 pt-4 sm:pt-10 pb-4 sm:pb-7 flex items-center justify-center relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-4 inline-block">
                <img src={icon26} className="w-6 sm:w-8 h-6 sm:h-8" />
              </span>
              <div className="text-center">
                <span className="text-5xl sm:text-7xl text-text1 inline-block">
                  4.8
                </span>
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <img src={star} className="w-4" />
                  <img src={star} className="w-4" />
                  <img src={star} className="w-4" />
                  <img src={star} className="w-4" />
                  <img src={star} className="w-4" />
                </div>
                <p className="text-[#505864] sm:text-lg mt-3 sm:mt-4">
                  Trusted on
                </p>
                <p className="text-text1 sm:text-lg mt-2 sm:mt-3">
                  500+ Reviews
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 xl:gap-14 -mt-16 sm:-mt-40">
            <div>
              <img
                src={img1}
                className="rounded-tr-[30px] rounded-bl-[30px] md:rounded-tr-[100px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] md:rounded-bl-[100px] h-[85%] object-cover"
              />

              <div className="shadow-[10px_10px_40px_0px_#00092926] bg-white rounded-2xl py-4 px-4 xs:px-8 flex items-center gap-6 xs:gap-8 justify-center -translate-y-1/2  lg:w-full sm:max-w-[80%] mx-auto">
                <div className="2xl:flex gap-2 mx-auto text-center 2xl:text-left">
                  <p className="text-4xl sm:text-6xl font-semibold text-primary">
                    {homeContent?.properties_sale}
                  </p>
                  <p className="text-lg text-[#505864] ">Property Sale</p>
                </div>
                <div className="2xl:flex gap-2 mx-auto text-center 2xl:text-left">
                  <p className="text-4xl sm:text-6xl font-semibold text-primary">
                    {homeContent?.apartment_rent}
                  </p>
                  <p className="text-lg text-[#505864] ">Apartment Rent</p>
                </div>
              </div>
            </div>
            <div className="lg:pb-10">
              <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1">
                What’s Included
              </h4>
              <ul className="list-decimal pl-6 mt-6 flex flex-col gap-6">
                {homeContent?.cleaning_maintenance?.what_inclued.map((item, index) => (
                  <li key={index}>
                    <h6 className="text-[#1F1607] text-xl font-medium">
                      {item.title}
                    </h6>
                    <p className="text-[#4D5461] mt-2">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <FAQ title="Cleaning & Maintenance FAQs" />
      </Suspense>
    </>
  );
};

export default CleaningMaintenance;

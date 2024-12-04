import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { icon27 } from "../../assets/icons/index.ts";
import { bg1, img9, mangeSupportFaq } from "../../assets/images/index.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

const FAQ = lazy(() => import("../../Components/Home/FAQ"));

const ManagementSupport = () => {
  const homeContent = useSelector((state: RootState) => state.homeContent.data);

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
            <h2 className="text-4xl sm:text-[42px] md:text-5xl font-bold text-center text-[#1F1607] font-light] ">
              Management Support
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
                Management Support
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20 md:pb-36 relative">
        <div className="container mx-auto">
          <div className="md:flex ">
            <div className="md:w-2/5 order-1 md:order-2">
              <div className="md:absolute right-0 max-w-[450px] md:max-w-full md:w-[calc(45%)] lg:w-[calc(45%)] md:ml-auto rounded-2xl md:rounded-none md:rounded-bl-[100px] overflow-hidden top-0 h-full">
                <img src={img9} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-1/2 lg:w-[50%] order-2 md:order-1 mt-8 md:mt-0">
              <div>
                <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                  {homeContent?.management_support?.title}
                </h4>
                <p className="mt-3  text-[#60410C]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                  {homeContent?.management_support?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-16 lg:pt-0 md:-mt-24 lg:-mt-12 overflow-hidden">
        <div className="container mx-auto">
          <div className="relative py-12  before:absolute before:bg-[#fff6e7] before:w-[calc(100%_+_2000px)] before:-left-10 before:rounded-l-[40px] before:top-0 before:h-full before:-z-10">
            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              {homeContent?.management_support?.bottom_content.map(
                (item, index) => (
                  <div key={index}>
                    <h6 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#1F1607]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                      {item.title}
                    </h6>
                    <p className="text-[#4D5461] mt-3 leading-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FAQ title="Management Support FAQs" img_url={mangeSupportFaq} />
      </Suspense>
    </>
  );
};

export default ManagementSupport;

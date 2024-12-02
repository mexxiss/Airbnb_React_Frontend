import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { icon27 } from "../../assets/icons/index.ts";
import { bg1, img10, img9, interiorFaq } from "../../assets/images/index.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

const FAQ = lazy(() => import("../../Components/Home/FAQ"));

const InteriorDesign = () => {
  const homeContent = useSelector((state: RootState) => state.homeContent.data);

  return (
    <div>
      <div
        className="pt-20 sm:pt-28 pb-10 sm:pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
        style={{
          backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-4">
            <h2 className="text-4xl sm:text-[42px] md:text-5xl font-bold text-center text-[#1F1607] font-light] ">
              Interior Design
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
                Interior Design
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20 relative">
        <div className="container mx-auto">
          <div>
            <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
              Airbnb Interior Design
            </h4>
            <p className="mt-3  text-[#60410C]">
              {homeContent?.interior_design_page?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 3xl:gap-14">
            <div>
              <img
                src={img10}
                className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] h-full object-cover max-w-[600px] lg:max-w-full w-full"
              />
            </div>
            <div className="">
              <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1">
                What’s Included
              </h4>
              <ul className="list-decimal pl-6 mt-6 flex flex-col gap-6">
                {homeContent?.interior_design_page?.what_inclued.map(
                  (item, index) => (
                    <li key={index}>
                      <h6 className="text-xl md:text-2xl font-medium text-[#1F1607]">
                        {item.title}
                      </h6>
                      <div className="text-[#4D5461 mt-3">
                        <p>{item.description}</p>
                        <ul className="mt-3 list-disc pl-6 flex flex-col gap-1">
                          {item?.others?.map((other, key) => (
                            <li key={key}> {other}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 3xl:gap-14">
            <div className="order-1 lg:order-2">
              <img
                src={img9}
                className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] h-full object-cover max-w-[600px] lg:max-w-full w-full"
              />
            </div>
            <div className="order-2 lg:order-1">
              <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1">
                How it works?
              </h4>
              <ul className="list-decimal pl-6 mt-6 flex flex-col gap-6">
                {homeContent?.interior_design_page?.how_it_works.map(
                  (item, index) => (
                    <li key={index}>
                      <h6 className="text-xl md:text-2xl font-medium text-[#1F1607]">
                        {index + 1}. {item.title}
                      </h6>
                      <p className="text-[#4D5461] mt-3 leading-6">
                        {item.description}
                      </p>
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
              Packages & Price
            </h4>
            <p className="text-[#DCC397] md:text-lg">
              Our Interior Design team operates with pre-set packages to ensure
              swift project completion. These packages cover all essentials,
              excluding large appliances or specialized items.
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
        <FAQ title="Interior Design FAQs" img_url={interiorFaq} />
      </Suspense>
    </div>
  );
};

export default InteriorDesign;

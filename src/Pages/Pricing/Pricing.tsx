import { Link } from "react-router-dom";
import { Suspense, lazy, useCallback, useEffect, useMemo } from "react";
import { icon27, Pointer } from "../../assets/icons/index.ts";
import { bg1, priceFaq } from "../../assets/images/index.ts";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchPricing } from "../../services/apiServices.ts";
import { PricingState } from "../../types/priceTypes.ts";
import { setPricingData } from "../../store/features/priceSlice.ts";
import Loader from "../../Components/Loader/Loader.tsx";
import { RootState } from "../../store/store.ts";
import ErrorHandleMessage from "../../Components/ErrorHandleComponent/ErrorHandleMessage.tsx";

const FAQ = lazy(() => import("../../Components/Home/FAQ"));

// import { ArrowRightRounded } from "@mui/icons-material";
// import Slider from "react-slick";

const Pricing = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, error, data } = useQuery<PricingState>({
    queryKey: ["pricing"],
    queryFn: fetchPricing,
  });

  const finalData = useMemo(() => data, [data]);

  const memoizedDispatch = useCallback(() => {
    if (finalData) {
      dispatch(setPricingData(finalData));
    }
  }, [finalData, dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const price = useSelector((state: RootState) => state.price);

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
              Pricing
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
              <span>Pricing</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] font-light] leading-[50px] 2xl:leading-[58px]" data-aos="fade-up" data-aos-duration="1000" >
              Pricing
            </h3>
            <p className="max-w-[950px] mx-auto text-[#60410C] lg:text-lg  mt-3 text-center" data-aos="fade-up" data-aos-duration="1000" >
              We ensure your property is strategically listed to achieve maximum
              revenue potential. Our success is tied to yours — we earn when you
              do. It's that straightforward.
            </p>
            <Link to="/estimate-revenue">
              <button className="btn1 mt-8 md:mt-12" data-aos="fade-up" data-aos-duration="1000" >Estimate revenue</button>
            </Link>
          </div>

          {/* plans */}
          <div className="plans mt-16 sm:mt-20 md:mt-16">
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {price.data.map((data) => (
                  <div
                    key={data.title}
                    className={`py-6 lg:py-10 px-5 lg:px-8 overflow-x-hidden ${data.title === "Full Management Fee"
                      ? "bg-[#1F1607]"
                      : "bg-[#fff6e7]"
                      }  rounded-3xl`}
                  >
                    <h4
                      className={`text-2xl font-semibold ${data.title === "Full Management Fee"
                        ? "text-white"
                        : "text-[#282938]"
                        } `} data-aos="fade-right" data-aos-duration="800" 
                    >
                      {data.title}
                    </h4>
                    <p
                      className={`my-4 text-2xl xl:text-3xl 2xl:text-4xl ${data.title === "Full Management Fee"
                        ? "text-white"
                        : "text-[#282938]"
                        } font-medium`} data-aos="fade-right" data-aos-duration="1000" 
                    >
                      {data.figures}
                    </p>
                    <p
                      className={`${data.title === "Full Management Fee"
                        ? "text-white"
                        : "text-[#282938]"
                        } font-medium text-sm md:text-base`} data-aos="fade-right" data-aos-duration="1200" 
                    >
                      {data?.description}
                    </p>
                    <ul className="mt-5 lg:mt-8 flex flex-col gap-4">
                      {data.offers.map((off_data, index) => (
                        <li
                          className="flex gap-3 text-sm md:text-base"
                          key={off_data} data-aos="fade-right" data-aos-duration={400 + index * 50} data-aos-delay={50 + index * 20}                        >
                          <img
                            src={Pointer}
                            className="w-3 h-3.5 mt-1 lg:mt-1.5"
                          />{" "}
                          <span
                            className={`${data.title === "Full Management Fee"
                              ? "text-white"
                              : "text-[#1F1607]"
                              } font-light`}
                          >
                            {off_data}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <FAQ title="Pricing FAQs" img_url={priceFaq} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Pricing;

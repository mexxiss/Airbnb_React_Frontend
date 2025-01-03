import { Link } from "react-router-dom";
import { Select } from "@mantine/core";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { icon27, icon28, icon29, icon31 } from "../../assets/icons/index.ts";
import { bg1, img8, img9, estimateRevFaq } from "../../assets/images/index.ts";
import icon32 from "../../assets/icons/icon32.png";
import icon33 from "../../assets/icons/icon33.png";
import icon34 from "../../assets/icons/icon34.png";
import icon35 from "../../assets/icons/icon35.png";
import icon36 from "../../assets/icons/icon36.png";

import { Label, Radio } from "flowbite-react";
import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchCalculatedRevenue, fetchEstimateRevenue } from "../../services/apiServices.ts";
import { IEstimateRevenueDoc } from "../../types/estimateRevenueTypes.ts";
import ErrorHandleMessage from "../../Components/ErrorHandleComponent/ErrorHandleMessage.tsx";
import Loader from "../../Components/Loader/Loader.tsx";
import { setEstimateRevenueData } from "../../store/features/estimateRevenueSlice.ts";
import { RootState } from "../../store/store.ts";
const FAQ = lazy(() => import("../../Components/Home/FAQ"));

interface IEstimateRevenueQuery {
  data: IEstimateRevenueDoc[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const EstimateRevenue = () => {
  const dispatch = useDispatch();
  const [showMsg, setShowMsg] = useState(false);
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null); // State for selected area ID
  const [selectedBedId, setSelectedBedId] = useState<string | null>(null);
  const [selectedFurnishingId, setSelectedFurnishingId] = useState<string | null>(null); // State for selected furnishing
  const [calculatedData, setCalculatedData] = useState<any | null>(null); // State for fetched data

  const { data, isLoading, isError, error } = useQuery<IEstimateRevenueQuery>({
    queryKey: ['estimateRevenue'],
    queryFn: fetchEstimateRevenue,
  });

  const revenueDocs = useMemo<IEstimateRevenueDoc[]>(() => {
    return data ? (Array.isArray(data) ? data : []) : [];
  }, [data]);

  const memoizedDispatch = useCallback(() => {
    if (revenueDocs.length) {
      dispatch(setEstimateRevenueData(revenueDocs));
    }
  }, [revenueDocs]);

  useEffect(() => memoizedDispatch(), [memoizedDispatch]);

  const content = useSelector((state: RootState) => state.estimateRevenue.data);

  const areaOptions =
    content?.map((item: { _id: string; area_name: string }) => ({
      label: item.area_name,
      value: item._id,
    })) || [];

  const selectedAreaData = content?.find(
    (item: { _id: string }) => item._id === selectedAreaId
  );

  const bedsOptions =
    selectedAreaData?.beds.map((bed: { _id: string; title: string }) => ({
      label: bed.title,
      value: bed._id,
    })) || [];

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedAreaId && selectedFurnishingId && selectedBedId) {
      try {
        const response = await fetchCalculatedRevenue(
          selectedAreaId,
          selectedFurnishingId,
          selectedBedId
        );
        setCalculatedData(response);
        setShowMsg(true);
      } catch (error) {
        console.error("Error fetching calculated revenue:", error);
      }
    } else {
      alert("Please select all options before calculating.");
    }
  };

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
            <h2 className="text-[38px] sm:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
              Estimate Revenue
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
              <span>Estimate Revenue</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col text-center">
            <h3 className="text-[26px] xs:text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] font-light] md:leading-[50px] 2xl:leading-[58px]" data-aos="fade-up" data-aos-duration="1000" >
              Airbnb & Holiday Home Revenue Estimator
            </h3>
            <p className=" text-[#60410C] lg:text-lg  mt-3 text-center" data-aos="fade-up" data-aos-duration="1000" >
              Calculator estimates your potential earnings based on location,
              property size, and design, giving you an accurate revenue
              forecast.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-16 py-14 lg:mt-20 bg-[#fff6e7]">
        <div className="container mx-auto">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 md:gap-10 ">
              <div data-aos="fade-right" data-aos-duration="1000" >
                <div className="bg-white px-5 py-8 rounded-xl shadow-xl">
                  <h3 className="text-xl xs:text-2xl lg:text-3xl font-semibold text-[#1F1607]">
                    Vacation Rental Calculator
                  </h3>
                  <form className="mt-5 sm:mt-8">
                    <div className="flex flex-col gap-y-5">
                      <div>
                        <Select
                          placeholder="Area"
                          data={areaOptions || []}
                          className="bg-white border border-primary rounded-full flex items-center justify-between px-6 gap-2 h-12"
                          rightSection={
                            <KeyboardArrowDownOutlined className="text-[#DCC397]" />
                          }
                          value={selectedAreaId}
                          onChange={(value) => setSelectedAreaId(value)}
                        />
                      </div>
                      <div>
                        <Select
                          placeholder="Bedrooms"
                          data={bedsOptions}
                          className="bg-white border border-primary rounded-full flex items-center justify-between px-6 gap-2 h-12"
                          rightSection={
                            <KeyboardArrowDownOutlined className="text-[#DCC397]" />
                          }
                          value={selectedBedId}
                          onChange={(value) => setSelectedBedId(value)}
                        />
                      </div>


                      <div>
                        <div className="radio flex gap-8">
                          {selectedAreaData?.furnishing?.map((item: { _id: string; title: string }) => (
                            <div key={item._id} className="flex items-center gap-2">
                              <Radio
                                id={item._id}
                                name="furnishing"
                                value={item._id}
                                onChange={() => setSelectedFurnishingId(item._id)}
                                className="focus:ring-offset-0 focus:shadow-none !focus:ring-0 border border-primary"
                              />
                              <Label htmlFor="Standard">{item.title}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-right">
                        <button
                          className="btn1 min-w-[250px] w-full sm:w-auto"
                          onClick={handleCalculate}
                        >
                          Calculate
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="" data-aos="fade-left" data-aos-duration="1000" >
                <div className="pt-8 md:pt-24 text-center md:text-left">
                  {!showMsg ?
                    <p className="text-2xl">Count <b>how much</b> you <br /> <b>can earn</b> daily on average</p>
                    :
                    <div>
                      <p className="text-2xl">A <b>{calculatedData.bedTitle}</b> property in <b>{calculatedData.areaName}</b> can earn</p>
                      <span className="text-6xl text-[#a58143] inline-block mt-6 mb-2"><b>{calculatedData.revenue} <span style={{ fontSize: "1.5rem" }}>د.إ</span></b></span>
                      <p style={{ fontSize: "1.2em", color: "gray" }}>daily on average *</p>
                      <p className="mt-6" style={{ fontSize: "0.8rem", color: "gray" }}>*Estimate is based on realistic occupancies and similar listings in your area.</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >

      <div className="pt-14 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <div className="flex items-center max-w-[1080px] mx-auto">
            <div className="md:block hidden w-1/2 lg:w-2/5 pr-10" data-aos="fade-right" data-aos-duration="1000" >
              <img src={img8} className="transform rotate-y-180" />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5" data-aos="fade-left" data-aos-duration="1000" >
              <div className="bg-[#fff6e7] rounded-xl md:shadow-[8px_8px_10px_2px_#c4903738]">
                <div className="px-5 py-8 rounded-xl shadow-[5px_4px_#fff6e7_inset]">
                  <h4 className="text-xl xs:text-2xl lg:text-3xl font-semibold text-[#1F1607]">
                    Sign up today and start making money
                  </h4>
                  <div className="mt-5 sm:mt-10 contact_us">
                    <form action="">
                      <div className="grid lg:grid-cols-2 gap-4">
                        <div className="">
                          <div className="bg-[#fef4e3] border border-primary rounded-full flex items-center justify-between px-6 gap-2 h-12">
                            <input
                              type="text"
                              className="w-full p-0 border-none focus:ring-0 bg-transparent"
                              placeholder="Full Name"
                            />
                            <span>
                              <img src={icon31} className="w-4" />
                            </span>
                          </div>
                          <div className="bg-[#fef4e3] border border-primary rounded-full flex items-center justify-between px-6 gap-2 h-12 mt-4">
                            <input
                              type="text"
                              className="w-full p-0 border-none focus:ring-0 bg-transparent"
                              placeholder="Phone Number"
                            />
                            <span>
                              <img src={icon29} className="w-4" />
                            </span>
                          </div>
                        </div>
                        <div className=" lg:col-row-2">
                          <textarea
                            rows={2}
                            cols={10}
                            className="bg-[#fef4e3] rounded-xl w-full px-6 py-3 border-primary focus:ring-0 min-h-12 h-full"
                            placeholder="Tell us more about your property "
                          ></textarea>
                        </div>
                        <div className="bg-[#fef4e3] border border-primary rounded-full flex items-center justify-between px-6 h-12 gap-2">
                          <input
                            type="text"
                            className="w-full p-0 border-none focus:ring-0 bg-transparent"
                            placeholder="Email Address"
                          />
                          <span>
                            <img src={icon28} className="w-4" />
                          </span>
                        </div>
                        <div className="">
                          <button className="btn1 flex items-center justify-center w-full gap-2">
                            Send Message{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14 md:pt-16 lg:pt-20 lg:pb-28 relative">
        <div className="container mx-auto">
          <div>
            <div className="lg:flex">
              <div className="lg:w-2/5 order-1 lg:order-2">
                <div className="lg:absolute right-0 max-w-[450px] lg:w-[calc(40%)] ml-auto rounded-2xl lg:rounded-l-[100px] overflow-hidden top-0 h-full">
                  <img src={img9} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:w-[55%] order-2 lg:order-1 mt-8 lg:mt-0">
                <div>
                  <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]" data-aos="fade-right" data-aos-duration="1000" >
                    Income
                  </h4>
                  <p className="mt-3  text-[#60410C]" data-aos="fade-right" data-aos-duration="1000" >
                    As the owner, you’ll earn from guests staying at your
                    property. Income varies based on seasonality, pricing, and
                    occupancy. Short-term rentals often generate higher returns
                    than long-term leases, as the property is fully furnished
                    with working utilities for ease of guest stays. The
                    flexibility of short-term rentals allows you to sell
                    whenever you choose, all while your asset appreciates.
                    Perfect!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-16 lg:pt-0 lg:-mt-14 overflow-hidden">
        <div className="container mx-auto">
          <div className="relative py-12  before:absolute before:bg-[#fff6e7] before:w-[calc(100%_+_2000px)] before:-left-10 before:rounded-l-[40px] before:top-0 before:h-full before:-z-10">
            <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]" data-aos="fade-right" data-aos-duration="1000" >
              How to maximise returns
            </h4>
            <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-8">
              <li className="text-[#1F1607] lg:text-lg lg:max-w-[250px]">
                <img src={icon35} className="w-14" data-aos="fade-right" data-aos-duration="800" />
                <p className="mt-3" data-aos="fade-up" data-aos-duration="1000" > 1. Optimize Pricing</p>
              </li>
              <li className="text-[#1F1607] lg:text-lg lg:max-w-[250px]">
                <img src={icon32} className="w-14" data-aos="fade-right" data-aos-duration="800" />
                <p className="mt-3" data-aos="fade-up" data-aos-duration="1000" > 2. Enhance Property Appeal</p>
                <Link
                  to="/"
                  className="text-[#4D5461] underline inline-block mt-2" data-aos="fade-up" data-aos-duration="1200"
                >
                  check interior design
                </Link>
              </li>
              <li className="text-[#1F1607] lg:text-lg lg:max-w-[250px]">
                <img src={icon33} className="w-14" data-aos="fade-right" data-aos-duration="800" />
                <p className="mt-3" data-aos="fade-up" data-aos-duration="1000" > 3. Increase Occupancy</p>
                <Link
                  to="/"
                  className="text-[#4D5461] underline inline-block mt-2" data-aos="fade-up" data-aos-duration="1200"
                >
                  check listings page
                </Link>
              </li>
              <li className="text-[#1F1607] lg:text-lg lg:max-w-[250px]">
                <img src={icon36} className="w-14" data-aos="fade-right" data-aos-duration="800" />
                <p className="mt-3" data-aos="fade-up" data-aos-duration="1000" > 4. Maintain Excellent Guest Reviews</p>
                <Link
                  to="/"
                  className="text-[#4D5461] underline inline-block mt-2" data-aos="fade-up" data-aos-duration="1200"
                >
                  check cleaning & maintenance
                </Link>
              </li>
              <li className="text-[#1F1607] lg:text-lg lg:max-w-[250px]">
                <img src={icon34} className="w-14" data-aos="fade-right" data-aos-duration="800" />
                <p className="mt-3" data-aos="fade-up" data-aos-duration="1000" > 5. Regular Property Maintenance</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FAQ title="Estimate Revenue FAQs" img_url={estimateRevFaq} />
      </Suspense>
    </>
  );
};

export default EstimateRevenue;

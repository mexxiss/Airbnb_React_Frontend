import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { icon6, icon7, icon8, icon9 } from "../../assets/icons/index.ts";
import Slider from "react-slick";
import { Select } from "@mantine/core";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IEstimateRevenueDoc } from "../../types/estimateRevenueTypes.ts";
import { useQuery } from "@tanstack/react-query";
import { fetchCalculatedRevenue, fetchEstimateRevenue } from "../../services/apiServices.ts";
import { setEstimateRevenueData } from "../../store/features/estimateRevenueSlice.ts";
import { useNavigate } from "react-router-dom";

interface IEstimateRevenueQuery {
  data: IEstimateRevenueDoc[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const Banner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cities, setCities] = useState<string[]>([]);
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null); 
  const [selectedBedId, setSelectedBedId] = useState<string | null>(null);
  const [selectedFurnishingId, setSelectedFurnishingId] = useState<string | null>(null);
  const homeContent = useSelector((state: RootState) => state.homeContent.data);

  const { data, isLoading, isError, error } = useQuery<IEstimateRevenueQuery>({
    queryKey: ['estimateRevenue'],
    queryFn: fetchEstimateRevenue,
  });

  const revenueDocs = useMemo<IEstimateRevenueDoc[]>(() => {
    return data ? (Array.isArray(data) ? data : []) : [];
  }, [data]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        // Fetch all countries (to find UAE)
        const countries = await GetCountries();
        // Find UAE country object
        const uaeCountry = countries.find(
          (country) => country.name === "United Arab Emirates"
        );
        if (!uaeCountry) {
          console.error("United Arab Emirates not found!");
          return;
        }
        // Get all states (Emirates) in the UAE using country ID
        const uaeStates = await GetState(uaeCountry.id);
        const allCities = await Promise.all(
          uaeStates.map(async (state) => {
            // Get cities in each state
            const citiesInState = await GetCity(uaeCountry.id, state.id);
            return {
              state: state.name, // State name (Emirate)
              cities: citiesInState.map((city) => city.name), // City names in the state
            };
          })
        );
        const finalCities = allCities.map((cities) =>
          cities.cities.map((city) => city)
        );
        setCities(finalCities.flat()); // Update the state with cities of all Emirates
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

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

  const furnishingOptions = selectedAreaData?.furnishing.map((f_type: { _id: string; title: string }) => ({
    label: f_type.title,
    value: f_type._id,
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
        
        navigate(`/estimate-revenue?area=${response.areaName}&beds=${response.bedTitle}&furnishing=${response.furnishingTitle}`, {
          state: {
            areaId: selectedAreaId,
            furnishingId: selectedFurnishingId,
            bedId: selectedBedId,
            revenue: response
          },
        });
      } catch (error) {
        console.error("Error fetching calculated revenue:", error);
      }
    } else {
      alert("Please select all options before calculating.");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    fade: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
    ],
  };

  return (
    <>
      <div className="banner bgGradient min-h-[80vh] pb-10">
        <div className="relative md:pb-16 xl:pb-0">
          <div className="bannerSlider absolute top-0 right-0 h-1/2 md:h-full w-[calc(100%)] xl:w-[calc(50%)]">
            <div className="absolute w-full h-full left-0 top-0 bg-[#ffffff38] z-10 lg:hidden"></div>
            <div className="h-full sliderInner">
              <Slider {...settings}>
                {homeContent?.banner_images.map((img, i) => (
                  <div className="h-full" key={i}>
                    <img src={img} key={i} className="h-full object-cover" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="pt-32 sm:pt-28">
              <h1 className=" text-3xl xs:text-4xl sm:*:text-5xl md:text-[54px] text-text1 font-bold sm:leading-[60px]" data-aos="fade-right" data-aos-duration="800" >
                Airbnb <br />
                Management <span className="text-primary">Dubai</span>
              </h1>
              <p className="sm:text-lg font-medium mt-5" data-aos="fade-right" data-aos-duration="1000" >
                Exceptional Property Management for Short-Term Rentals in Dubai
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 mt-8 mb-16 sm:mb-12" data-aos="fade-right" data-aos-duration="1200" >
                <button className="btn1">MANAGE MY PROPERTY</button>
                <button className="btn2">BOOK A PROPERTY</button>
              </div>
              <div className="mb-12">
                <div className="bg-white border-2 border-[#c3c3d9] md:border-none rounded-2xl py-5 px-6 md:w-max shadow-xl md:shadow-none" data-aos="zoom-in" data-aos-duration="1200" >
                  <h2 className="text-2xl xs:text-3xl md:text-[36px] text-text1 font-medium">
                    Estimate your revenue
                  </h2>
                  <div className="mt-4">
                    <div className="lg:flex items-center justify-between gap-7">
                      <div className="flex flex-wrap lg:flex-nowrap gap-7 items-center">
                        <div className="w-full md:max-w-[180px]">
                          <label
                            htmlFor="Area"
                            className="text-text2 font-medium"
                          >
                            Area
                          </label>
                          <div className="">
                            <Select
                              placeholder="Select City"
                              data={areaOptions || []}
                              className=""
                              rightSection={
                                <KeyboardArrowDownOutlined className="text-black" />
                              }
                              value={selectedAreaId}
                              onChange={(value) => setSelectedAreaId(value)}
                            />
                          </div>
                        </div>
                        <div className="min-w-px w-full md:w-px h-px md:h-10 bg-[#b3b1c1] block"></div>
                        <div className="w-full md:max-w-[180px]">
                          <label
                            htmlFor="Bedrooms"
                            className="text-text2 font-medium"
                          >
                            Bedrooms
                          </label>
                          <div className="">
                            <Select
                              placeholder="Select Bedrooms"
                              data={bedsOptions}
                              className=""
                              rightSection={
                                <KeyboardArrowDownOutlined className="text-black" />
                              }
                              value={selectedBedId}
                              onChange={(value) => setSelectedBedId(value)}
                            />
                          </div>
                        </div>
                        <div className="min-w-px w-full md:w-px h-px md:h-10 bg-[#b3b1c1] block"></div>
                        <div className="w-full md:max-w-[180px]">
                          <label
                            htmlFor="Furnishing"
                            className="text-text2 font-medium"
                          >
                            Furnishing
                          </label>
                          <div className="">
                            <Select
                              placeholder="Furnishing"
                              data={furnishingOptions}
                              className=""
                              rightSection={
                                <KeyboardArrowDownOutlined className="text-black" />
                              }
                              value={selectedFurnishingId}
                              onChange={(value) => setSelectedFurnishingId(value)}
                            />
                          </div>
                        </div>
                        <div className="min-w-px w-full md:w-px h-px md:h-10 bg-[#b3b1c1] md:hidden lg:block"></div>
                      </div>
                      <button className="btn1 mt-5 lg:mt-0 w-full lg:w-auto" onClick={handleCalculate}>
                        Calculate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-14">
                  <div>
                    <div className="w-16 h-16 rounded-full border-2 border-primary lg:border-border1 p-1 relative" data-aos="fade-up" data-aos-duration="1200" >
                      <span className="flex items-center justify-center bg-[#e4c38a] rounded-full w-full h-full">
                        <img src={icon6} className="w-8" />
                      </span>
                      <span className="bg-primary rounded-lg absolute -right-0.5 -bottom-0.5 w-6 h-6 flex items-center justify-center">
                        <img src={icon8} className="w-4" />
                      </span>
                    </div>
                    <h4 className="text-primary font-bold text-2xl mt-4" data-aos="fade-up" data-aos-duration="1200" >
                      {homeContent?.total_customers}+ customers
                    </h4>
                    <p className="text-text1 font-medium" data-aos="fade-up" data-aos-duration="1200" >
                      believe in our service
                    </p>
                  </div>
                  <div>
                    <div className="w-16 h-16 rounded-full border-2 border-primary lg:border-border1 p-1 relative" data-aos="fade-up" data-aos-duration="1200" >
                      <span className="flex items-center justify-center bg-[#e4c38a] rounded-full w-full h-full">
                        <img src={icon7} className="w-8" />
                      </span>
                      <span className="bg-primary rounded-lg absolute -right-0.5 -bottom-0.5 w-6 h-6 flex items-center justify-center">
                        <img src={icon9} className="w-4" />
                      </span>
                    </div>
                    <h4 className="text-primary font-bold text-2xl mt-4" data-aos="fade-up" data-aos-duration="1200" >
                      {homeContent?.total_properties}+ properties
                    </h4>
                    <p className="text-text1 font-medium" data-aos="fade-up" data-aos-duration="1200" >
                      and house ready for occupancy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

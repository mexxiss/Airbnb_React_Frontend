import { KeyboardArrowDownOutlined } from "@mui/icons-material";

import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";
import icon9 from "../../assets/icons/icon9.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
// import img4 from "../../assets/images/img4.png";
// import img5 from "../../assets/images/img5.png";
import Slider from "react-slick";
import { Select } from "@mantine/core";

const Banner = () => {
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
                <div className="h-full">
                  <img src={img1} className="h-full object-cover" />
                </div>
                <div className="h-full">
                  <img src={img2} className="h-full object-cover" />
                </div>
                <div className="h-full">
                  <img src={img3} className="h-full object-cover" />
                </div>
              </Slider>
            </div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="pt-32 sm:pt-28">
              <h1 className=" text-3xl xs:text-4xl sm:*:text-5xl md:text-[54px] text-text1 font-bold sm:leading-[60px]">
                Airbnb <br />
                Management <span className="text-primary">Dubai</span>
              </h1>
              <p className="sm:text-lg font-medium mt-5">
                Premier property management for short-term rentals across Dubai
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 mt-8 mb-16 sm:mb-12">
                <button className="btn1">MANAGE MY PROPERTY</button>
                <button className="btn2">BOOK A PROPERTY</button>
              </div>
              <div className="mb-12">
                <div className="bg-white border-2 border-[#c3c3d9] md:border-none rounded-2xl py-5 px-6 md:w-max shadow-xl md:shadow-none">
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
                              placeholder='Select City'
                              data={['Dubai', 'Al Furjan', 'Dubai South', 'Dubai Hills']}
                              className=''
                              rightSection={<KeyboardArrowDownOutlined className='text-black' />}
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
                              placeholder='Select Bedrooms'
                              data={['One Bed', 'Two Beds', 'Three Beds', 'Four Beds']}
                              className=''
                              rightSection={<KeyboardArrowDownOutlined className='text-black' />}
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
                              placeholder='Furnishing'
                              data={['Premium', 'Standard']}
                              className=''
                              rightSection={<KeyboardArrowDownOutlined className='text-black' />}
                            />
                          </div>
                        </div>
                        <div className="min-w-px w-full md:w-px h-px md:h-10 bg-[#b3b1c1] md:hidden lg:block"></div>
                      </div>
                      <button className="btn1 mt-5 lg:mt-0 w-full lg:w-auto">Calculate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-14">
                  <div>
                    <div className="w-16 h-16 rounded-full border-2 border-primary lg:border-border1 p-1 relative">
                      <span className="flex items-center justify-center bg-[#e4c38a] rounded-full w-full h-full">
                        <img src={icon6} className="w-8" />
                      </span>
                      <span className="bg-primary rounded-lg absolute -right-0.5 -bottom-0.5 w-6 h-6 flex items-center justify-center">
                        <img src={icon8} className="w-4" />
                      </span>
                    </div>
                    <h4 className="text-primary font-bold text-2xl mt-4">
                      50k+ customers
                    </h4>
                    <p className="text-text1 font-medium">
                      believe in our service
                    </p>
                  </div>
                  <div>
                    <div className="w-16 h-16 rounded-full border-2 border-primary lg:border-border1 p-1 relative">
                      <span className="flex items-center justify-center bg-[#e4c38a] rounded-full w-full h-full">
                        <img src={icon7} className="w-8" />
                      </span>
                      <span className="bg-primary rounded-lg absolute -right-0.5 -bottom-0.5 w-6 h-6 flex items-center justify-center">
                        <img src={icon9} className="w-4" />
                      </span>
                    </div>
                    <h4 className="text-primary font-bold text-2xl mt-4">
                      10k+ properties
                    </h4>
                    <p className="text-text1 font-medium">
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

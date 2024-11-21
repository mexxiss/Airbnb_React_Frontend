import { useSelector } from "react-redux";
import icon10 from "../../assets/icons/icon10.png";
import icon11 from "../../assets/icons/icon11.png";
import { RootState } from "../../store/store";

const About = () => {
  const homeContent = useSelector((state: RootState) => state.homeContent.data);
  return (
    <>
      <div className="relative bg-[#4D360E] py-20">
        <div className="container mx-auto">
          <div className="lg:flex justify-between gap-4 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-white lg:max-w-[360px] leading-[50px] 2xl:leading-[58px] mx-auto lg:mx-0">
              What <span className="text-primary">people</span> say about{" "}
              <span className="text-primary">us</span>
            </h2>
            <p className="text-[#B7B5CC] font-medium lg:max-w-[600px] xl:max-w-[750px] lg:text-justify mx-auto lg:mx-0 mt-3 lg:mt-0">
              {homeContent?.what_people_says?.description}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 my-8 sm:my-12">
            <div className="bg-white bg-opacity-20 rounded-3xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-5 md:gap-[30px]">
                <div className="min-w-16 w-16 h-16 md:min-w-20 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#3A2705]">
                  <img src={icon10} className="w-8 md:w-10" />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 font-jakarta">
                    Short Let Management
                  </h4>
                  <p className="md:text-lg text-[#C6C4D6] font-jakarta">
                    We help homeowners unlock their property’s earning
                    potential, thanks to recent changes in Dubai’s tourism
                    policies. Our team handles everything from listing and
                    hosting to maintenance and 24/7 guest management, ensuring a
                    seamless short-term rental experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-5 md:gap-[30px]">
                {" "}
                <div className="min-w-16 w-16 h-16 md:min-w-20 md:w-20 md:h-20 rounded-full border border-border1 p-1 relative">
                  <span className="flex items-center justify-center bg-primary rounded-full w-full h-full">
                    <img src={icon11} className="w-8 md:w-10" />
                  </span>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-text1 mb-2 md:mb-4 font-jakarta">
                    Vacation Rental Management
                  </h4>
                  <p className="md:text-lg text-text2 font-jakarta">
                    We manage all aspects of host management, from listing your
                    property on Airbnb to interior design, staging, cleaning,
                    and maintenance, ensuring a hassle-free experience. Keep
                    reading for more details.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-primary" />
          <div className="mt-8 sm:mt-12">
            <div className="flex items-center justify-center gap-4 sm:gap-10 lg:gap-14 text-center">
              <div>
                <h4 className="font-jakarta font-bold text-3xl sm:text-4xl md:text-[42px] text-white">
                  {homeContent?.property_return_rate}%
                </h4>
                <p className="font-jakarta text-[#C6C4D6] font-medium mt-1 text-sm sm:text-base">
                  Property Return Rate
                </p>
              </div>
              <div className="min-w-px w-px h-16 bg-[#b3b1c1] block"></div>
              <div>
                <h4 className="font-jakarta font-bold text-3xl sm:text-4xl md:text-[42px] text-white">
                  {homeContent?.property_rent}
                </h4>
                <p className="font-jakarta text-[#C6C4D6] font-medium mt-1 text-sm sm:text-base">
                  Property in Rent
                </p>
              </div>
              <div className="min-w-px w-px h-16 bg-[#b3b1c1] block"></div>
              <div>
                <h4 className="font-jakarta font-bold text-3xl sm:text-4xl md:text-[42px] text-white">
                  {homeContent?.daily_complete_transactions}
                </h4>
                <p className="font-jakarta text-[#C6C4D6] font-medium mt-1 text-sm sm:text-base">
                  Daily Completed Transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

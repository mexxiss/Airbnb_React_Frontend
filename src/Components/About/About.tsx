import { useSelector } from "react-redux";
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
            {homeContent?.what_people_says?.facts.map((fact, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-3xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-5 md:gap-[30px]">
                  <div className="min-w-16 w-16 h-16 md:min-w-20 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#3A2705]">
                    <img src={fact.icon} className="w-8 md:w-10" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 font-jakarta">
                      {fact.title}
                    </h4>
                    <p className="md:text-lg text-[#C6C4D6] font-jakarta">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

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

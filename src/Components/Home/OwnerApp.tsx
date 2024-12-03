import { ownerApp } from "../../assets/images/index.ts";
import { icon24 } from "../../assets/icons/index.ts";

const OwnerApp = () => {
  return (
    <div className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-[30%] relative rounded-xl bg-[#F7F7FD] border-2 border-border1 flex flex-col justify-between overflow-hidden">
            <div className="p-4 xl:p-8 !pb-10 lg:mb-8 relative z-10">
              <div className="sm:max-w-[75%] lg:max-w-full">
                <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-text1" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="50">
                  Owner app
                </h4>
                <p className="mt-3 mb-5 font-medium text-secondary" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="btn1 !rounded-xl !px-5 !capitalize" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                  Browse Properties
                </button>
              </div>
            </div>
            <img data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400"
              src={ownerApp}
              className="hidden sm:inline-block mx-auto w-24 sm:w-32 lg:w-44 absolute bottom-0 right-4 lg:static"
            />
          </div>
          <div className="lg:w-[65%] 2xl:w-[62%] mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-6 sm:gap-10 xl:gap-x-20 gap-y-10">
              <div>
                <div className="min-w-14 w-14 h-14 sm:min-w-20 sm:w-20 sm:h-20 rounded-full border border-border1 p-1 relative"
                  data-aos="fade-left" data-aos-duration="1200" data-aos-delay="100">
                  <span className="flex items-center justify-center bg-[#f7eddd] rounded-full w-full h-full">
                    <img src={icon24} className="w-6 sm:w-9" />
                  </span>
                </div>
                <div className="mt-3 sm:mt-5">
                  <h6 className="text-xl sm:text-2xl font-medium text-text1" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                    View Your Live Calendar
                  </h6>
                  <p className=" text-[#4D5461] mt-3" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
                    Monitor your property's availability in real time, with insights into occupancy, average nightly rates, projected earnings, and more.
                  </p>
                </div>
              </div>
              <div>
                <div className="min-w-14 w-14 h-14 sm:min-w-20 sm:w-20 sm:h-20 rounded-full border border-border1 p-1 relative"
                  data-aos="fade-left" data-aos-duration="1200" data-aos-delay="100">
                  <span className="flex items-center justify-center bg-[#f7eddd] rounded-full w-full h-full">
                    <img src={icon24} className="w-6 sm:w-9" />
                  </span>
                </div>
                <div className="mt-3 sm:mt-5">
                  <h6 className="text-xl sm:text-2xl font-medium text-text1" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                    Check Your Monthly Statements
                  </h6>
                  <p className=" text-[#4D5461] mt-3" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
                    Access your monthly statements instantly and track your payouts with ease.
                  </p>
                </div>
              </div>
              <div>
                <div className="min-w-14 w-14 h-14 sm:min-w-20 sm:w-20 sm:h-20 rounded-full border border-border1 p-1 relative"
                  data-aos="fade-left" data-aos-duration="1200" data-aos-delay="100">
                  <span className="flex items-center justify-center bg-[#f7eddd] rounded-full w-full h-full">
                    <img src={icon24} className="w-6 sm:w-9" />
                  </span>
                </div>
                <div className="mt-3 sm:mt-5">
                  <h6 className="text-xl sm:text-2xl font-medium text-text1" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                    Contact Support
                  </h6>
                  <p className=" text-[#4D5461] mt-3" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
                    Reach our Client Support team directly through the app for any assistance you may need.
                  </p>
                </div>
              </div>
              <div>
                <div className="min-w-14 w-14 h-14 sm:min-w-20 sm:w-20 sm:h-20 rounded-full border border-border1 p-1 relative"
                  data-aos="fade-left" data-aos-duration="1200" data-aos-delay="100">
                  <span className="flex items-center justify-center bg-[#f7eddd] rounded-full w-full h-full">
                    <img src={icon24} className="w-6 sm:w-9" />
                  </span>
                </div>
                <div className="mt-3 sm:mt-5">
                  <h6 className="text-xl sm:text-2xl font-medium text-text1" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                    Block Personal Stays
                  </h6>
                  <p className=" text-[#4D5461] mt-3" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
                    Easily block dates for personal stays at your property, whenever you need, through the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerApp;

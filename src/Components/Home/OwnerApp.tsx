
import img6 from "../../assets/images/img6.png";
import icon24 from "../../assets/icons/icon24.png";

const OwnerApp = () => {
  return (
    <div className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-[30%] relative rounded-xl bg-[#F7F7FD] border-2 border-border1 flex flex-col justify-between">
            <div className="p-4 sm:p-8 lg:mb-8 relative z-10">
              <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-text1">
                Owner app
              </h4>
              <p className="mt-3 mb-5 font-medium text-secondary font-jakarta">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="btn1 !rounded-xl !px-5 !capitalize">
                Browse Properties
              </button>
            </div>
            <img src={img6} className="ml-auto w-32 sm:w-40 md:w-56 absolute bottom-0 right-0 lg:static" />
          </div>
          <div className="lg:w-[65%] 2xl:w-[62%] mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-6 sm:gap-10 xl:gap-x-20 gap-y-10">
              <div>
                <div className="min-w-14 w-14 h-14 sm:min-w-20 sm:w-20 sm:h-20 rounded-full border border-border1 p-1 relative">
                  <span className="flex items-center justify-center bg-[#f7eddd] rounded-full w-full h-full">
                    <img src={icon24} className="w-6 sm:w-9" />
                  </span>
                </div>
                <div className="mt-3 sm:mt-5">
                  <h6 className="text-xl sm:text-2xl font-medium text-text1">
                    View your Live Calendar
                  </h6>
                  <p className=" text-[#4D5461] mt-3">
                    See occupancy, average nightly net rate, projected earnings
                    and more
                  </p>
                </div>
              </div>
              <div>
                <div className="min-w-14 w-14 h-14 sm:min-w-20 sm:w-20 sm:h-20 rounded-full border border-border1 p-1 relative">
                  <span className="flex items-center justify-center bg-[#f7eddd] rounded-full w-full h-full">
                    <img src={icon24} className="w-6 sm:w-9" />
                  </span>
                </div>
                <div className="mt-3 sm:mt-5">
                  <h6 className="text-xl sm:text-2xl font-medium text-text1">
                    View your Monthly Statements
                  </h6>
                  <p className=" text-[#4D5461] mt-3">
                    Access your statements on the go, and see your payouts
                  </p>
                </div>
              </div>
              <div>
                <div className="min-w-14 w-14 h-14 sm:min-w-20 sm:w-20 sm:h-20 rounded-full border border-border1 p-1 relative">
                  <span className="flex items-center justify-center bg-[#f7eddd] rounded-full w-full h-full">
                    <img src={icon24} className="w-6 sm:w-9" />
                  </span>
                </div>
                <div className="mt-3 sm:mt-5">
                  <h6 className="text-xl sm:text-2xl font-medium text-text1">
                    Contact Support
                  </h6>
                  <p className=" text-[#4D5461] mt-3">
                    Contact the Client Support team directly from the app
                  </p>
                </div>
              </div>
              <div>
                <div className="min-w-14 w-14 h-14 sm:min-w-20 sm:w-20 sm:h-20 rounded-full border border-border1 p-1 relative">
                  <span className="flex items-center justify-center bg-[#f7eddd] rounded-full w-full h-full">
                    <img src={icon24} className="w-6 sm:w-9" />
                  </span>
                </div>
                <div className="mt-3 sm:mt-5">
                  <h6 className="text-xl sm:text-2xl font-medium text-text1">
                    Block Owner Stays
                  </h6>
                  <p className=" text-[#4D5461] mt-3">
                    Use the app to block personal stays at your property, any
                    time
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

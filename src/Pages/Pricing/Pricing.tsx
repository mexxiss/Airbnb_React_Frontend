import React from "react";
import icon27 from "../../assets/icons/icon27.png";
import bg1 from "../../assets/images/bg1.jpg";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      {/* banner */}
      <div
        className="pt-32 pb-20 bg-cover bg-bottom"
        style={{
          backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-8">
            <h2 className="text-4xl xl:text-[42px] 2xl:text-[60px] font-semibold text-center text-[#1F1607] ">
              Pricing
            </h2>
            <p className="flex items-center gap-4 text-[#4C360E]">
              <span className="">
                <Link to="/">Home</Link>
              </span>
              <span>
                <img src={icon27} className="w-4" />
              </span>
              <span>Pricing</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] leading-[50px] 2xl:leading-[58px]">
              Pricing
            </h3>
            <p className="max-w-[550px] mx-auto text-[#60410C] lg:text-lg font-montserrat mt-3">
              We ensure your property is listed for optimum revenue.We make
              money when you make money. It’s as simple as that.
            </p>
            <div>
              <button className="btn1 mt-12">Estimate revenue</button>
            </div>
          </div>

          {/* plans */}
          <div className="plans">
            <div>
              <div className="grid grid-cols-3 gap-5">
                <div className="py-10 px-8 bg-[#FFFBF4]">
                  <h4 className="text-3xl font-semibold text-[#282938]">On-Boarding</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

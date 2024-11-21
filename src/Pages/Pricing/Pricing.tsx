import { Link } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { icon27, Pointer } from '../../assets/icons';
import { bg1 } from '../../assets/images';

const FAQ = lazy(() => import('../../Components/Home/FAQ'));

// import { ArrowRightRounded } from "@mui/icons-material";
// import Slider from "react-slick";

const Pricing = () => {

  return (
    <>
      {/* banner */}
      <div
        className="pt-28 pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
        style={{
          backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-4">
            <h2 className="text-[42px] sm:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
              Pricing
            </h2>
            <p className="flex items-center gap-4 text-[#4C360E]">
              <span className="">
                <Link to="/" className="hover:underline">Home</Link>
              </span>
              <span>
                <img src={icon27} className="w-4" />
              </span>
              <span>Pricing</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] font-light] leading-[50px] 2xl:leading-[58px]">
              Pricing
            </h3>
            <p className="max-w-[550px] mx-auto text-[#60410C] lg:text-lg font-montserrat mt-3 text-center">
              We ensure your property is listed for optimum revenue.We make
              money when you make money. It’s as simple as that.
            </p>
            <div>
              <button className="btn1 mt-8 md:mt-12">Estimate revenue</button>
            </div>
          </div>

          {/* plans */}
          <div className="plans mt-16 sm:mt-20 md:mt-16">
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="py-6 lg:py-10 px-5 lg:px-8 bg-[#fff6e7] rounded-3xl">
                  <h4 className="text-2xl font-semibold text-[#282938]">On-Boarding</h4>
                  <p className="my-4 text-2xl xl:text-3xl 2xl:text-4xl text-[#282938] font-medium">Free</p>
                  <p className="text-[#282938] font-medium text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <ul className="mt-5 lg:mt-8 flex flex-col gap-4">
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Styling</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Initial Inspection</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Professional Photography</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        DET Compliance Set-Up</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Property Listing</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Organize Insurance</span>
                    </li>
                  </ul>
                </div>
                <div className="py-6 lg:py-10 px-5 lg:px-8 bg-[#1F1607] rounded-3xl">
                  <h4 className="text-xl xl:text-2xl font-semibold text-white">Full management fee</h4>
                  <p className="my-4 text-2xl xl:text-3xl 2xl:text-4xl text-white font-medium">17%</p>
                  <p className="text-white font-medium opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <ul className="mt-5 lg:mt-8 flex flex-col gap-4">
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Styling</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Frank Porter Portal App</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Multi-channel marketing</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Paying Tourism Dirham</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Price optimization</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Monthly Revenue Statements</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Guest Communication</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Check-in/check-out</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Guest vetting</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Luxury toiletries</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Hotel quality linens and towels</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Replenishment of essentials</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Organize Property Maintenance</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        Organize Property Cleaning</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-white font-light">
                        24/7 Guest Support</span>
                    </li>
                  </ul>
                </div>
                <div className="py-6 lg:py-10 px-5 lg:px-8 bg-[#fff6e7] rounded-3xl">
                  <h4 className="text-2xl font-semibold text-[#282938]">Extra services</h4>
                  <p className="my-4 text-2xl xl:text-3xl 2xl:text-4xl text-[#282938] font-medium">Price on Request</p>
                  <p className="text-[#282938] font-medium text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <ul className="mt-5 lg:mt-8 flex flex-col gap-4">
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Interior Design</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Set Up Utilities</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Pay Utility Bills</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Maintenance Works</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <img src={Pointer} className="w-3 h-3.5 mt-1 lg:mt-1.5" /> <span className="text-[#1F1607] font-light">
                        Other Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
                <FAQ />
            </Suspense>
        </div>
      </div>
    </>
  );
};

export default Pricing;

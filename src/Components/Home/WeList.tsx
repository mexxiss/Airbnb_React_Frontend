import { logo1, logo2, logo3, logo4, logo5, logo6 } from "../../assets/images/index.ts";

const WeList = () => {
  return (
    <div className="bg-[#fff6e7] py-16">
      <div className="container mx-auto">
        <div>
          <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-text1 text-center" data-aos="fade-down" data-aos-duration="1200" >
            We list your property on multiple hosting platforms
          </h4>
        </div>
        <div className="mt-12 space-y-8">
          <div className="grid grid-cols-3 gap-8 items-center justify-center max-w-[900px] mx-auto">
            <img
              src={logo1}
               data-aos="zoom-in" data-aos-duration="1200"  className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
            />
            <img
              src={logo2}
               data-aos="zoom-in" data-aos-duration="1200"  className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
            />
            <img
              src={logo3}
               data-aos="zoom-in" data-aos-duration="1200"  className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
            />
            <img
              src={logo4}
               data-aos="zoom-in" data-aos-duration="1200"  className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
            />
            <img
              src={logo5}
               data-aos="zoom-in" data-aos-duration="1200"  className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
            />
            <img
              src={logo6}
               data-aos="zoom-in" data-aos-duration="1200"  className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeList;

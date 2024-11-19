
import img1 from "../../assets/images/img1.png";
import star from "../../assets/icons/star.png";
import icon26 from "../../assets/icons/icon26.png";

const ShortTerm = () => {
  return (
    <div className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <div className="pl-12 xs:pl-20 relative z-20">
          <div className="max-w-max sm:max-w-[200px] bg-white w-full rounded-b-xl sm:rounded-b-[20px] shadow-[40.05px_40.05px_74.38px_0px_#7065F026] border-2 border-[#ecebf5] px-4 pt-4 sm:pt-10 pb-4 sm:pb-7 flex items-center justify-center relative">
            <span className="absolute left-1/2 -translate-x-1/2 -top-4 inline-block">
              <img src={icon26} className="w-6 sm:w-8 h-6 sm:h-8" />
            </span>
            <div className="text-center">
              <span className="text-5xl sm:text-7xl text-text1 inline-block">4.8</span>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <img src={star} className="w-4" />
                <img src={star} className="w-4" />
                <img src={star} className="w-4" />
                <img src={star} className="w-4" />
                <img src={star} className="w-4" />
              </div>
              <p className="text-[#505864] sm:text-lg mt-3 sm:mt-4">Trusted on</p>
              <p className="text-text1 sm:text-lg mt-2 sm:mt-3">500+ Reviews</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 -mt-16 sm:-mt-40">
          <div>
            <img
              src={img1}
              className="rounded-tr-[30px] rounded-bl-[30px] md:rounded-tr-[100px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] md:rounded-bl-[100px] h-full object-cover"
            />
          </div>
          <div className="lg:pb-10">
            <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] sm:leading-[50px] font-semibold text-text1">
              Short term rental Dubai: The facts and figures
            </h4>
            <p className="sm:text-lg text-[#505864] mt-5">
              Dubai combines rich Arabic culture with cutting-edge technology,
              making it a top destination for tourists. With tourism surpassing
              pre-pandemic levels, the short-term rental market is booming.
              Average daily rates are 650 AED, with an 82% occupancy rate,
              offering exceptional profit potential. Contact us to maximize your
              returns.
            </p>
            <div className="mt-10 sm:mt-14 shadow-[10px_10px_40px_0px_#00092926] bg-white rounded-2xl py-4 px-4 xs:px-8 flex items-center gap-6 xs:gap-8 justify-center lg:-translate-x-1/2 max-w-[600px] mx-auto lg:w-full">
              <div className="lg:flex gap-2 mx-auto text-center lg:text-left">
                <p className="text-4xl sm:text-6xl font-semibold text-primary">250+</p>
                <p className="text-lg text-[#505864] ">Property Sale</p>
              </div>
              <div className="lg:flex gap-2 mx-auto text-center lg:text-left">
                <p className="text-4xl sm:text-6xl font-semibold text-primary">550+</p>
                <p className="text-lg text-[#505864] ">Apartment Rent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortTerm;


import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";

const WeList = () => {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto">
        <div>
          <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-text1 text-center">
            We list your property on multiple hosting platforms
          </h4>
        </div>
        <div className="mt-12 space-y-8">
          <div className="grid grid-cols-3 gap-8 items-center justify-center max-w-[900px] mx-auto">
            <img
              src={logo1}
              className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
            />
            <img
              src={logo2}
              className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
            />
            <img
              src={logo3}
              className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
            />
            <img
              src={logo4}
              className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
            />
            <img
              src={logo5}
              className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
            />
            <img
              src={logo6}
              className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeList;

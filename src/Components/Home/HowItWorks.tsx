
import icon12 from "../../assets/icons/icon12.png";
import icon15 from "../../assets/icons/icon15.png";
import icon18 from "../../assets/icons/icon18.png";
import icon19 from "../../assets/icons/icon19.png";
import icon20 from "../../assets/icons/icon20.png";
import icon21 from "../../assets/icons/icon21.png";
import icon22 from "../../assets/icons/icon22.png";
import icon23 from "../../assets/icons/icon23.png";

const HowItWorks = () => {
  const data = [
    {
      img: icon18,
      name: "Get in Touch",
    },
    {
      img: icon19,
      name: "Contract Signed",
    },
    {
      img: icon20,
      name: "Initial Inspection",
    },
    {
      img: icon15,
      name: "Interior Design / Styling",
    },
    {
      img: icon21,
      name: "Maintenance Works",
    },
    {
      img: icon22,
      name: "Photography and Listing",
    },
    {
      img: icon12,
      name: "Guest Management",
    },
    {
      img: icon23,
      name: "Relax and Count your Dirhams",
    },
  ];
  return (
    <div className="py-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center max-w-[640px] mx-auto">
          <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-text1">
            How it works?
          </h4>
          <p className="font-montserrat md:text-lg text-[#593B05] mt-2">
            We pride ourselves on our curious minds which make us responsive and
            solution-orientated, determined to approach business challenges
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 md:gap-x-0 md:flex flex-wrap items-center xl:justify-between gap-y-10">
            {data.map((item, index) => (
              <div className="md:w-1/3 xl:w-1/4 md:even:mt-14">
                <div className="flex flex-col items-center justify-center gap-3 max-w-[200px] w-full h-[180px] sm:h-[200px] rounded-full rounded-tr-none shadow-xl bg-white mx-auto p-3 lg:p-6 relative">
                  <span className="absolute right-2 top-2 text-2xl sm:text-3xl font-medium text-primary opacity-20">
                    0{index + 1}
                  </span>
                  <img src={item.img} className="w-12" />
                  <p className="text-center font-medium text-text1">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

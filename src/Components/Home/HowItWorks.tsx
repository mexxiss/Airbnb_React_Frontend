import {
  icon12,
  icon15,
  icon18,
  icon19,
  icon20,
  icon21,
  icon22,
  icon23,
} from "../../assets/icons/index.ts";

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
    <div className="py-16 bg-[#fff6e7]">
      <div className="container mx-auto">
        <div className="text-center max-w-[640px] mx-auto">
          <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-text1">
            How it works?
          </h4>
          <p className=" md:text-lg text-[#593B05] mt-2">
            We pride ourselves on our curious minds which make us responsive and
            solution-orientated, determined to approach business challenges
          </p>
        </div>
        <div className="mt-12">
          <div className="grid xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-6 sm:gap-y-8">
            {data.map((item, index) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center gap-3 w-full rounded-2xl rounded-tr-none shadow-xl bg-white mx-auto p-3 lg:p-4 relative"
              >
                <span className="absolute right-2 top-2 text-2xl sm:text-3xl font-medium text-primary opacity-60">
                  0{index + 1}
                </span>
                <img src={item.img} className="w-12" />
                <p className="text-center font-semibold text-text1">
                  {item.name}
                </p>
                <p className="text-center text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Totam, deserunt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

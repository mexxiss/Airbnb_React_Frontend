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
      description: "Reach out to us for an initial consultation and to discuss your property's potential."
    },
    {
      img: icon19,
      name: "Contract Signed",
      description: "Once the details are finalized, we’ll sign the contract to move forward with the partnership."
    },
    {
      img: icon20,
      name: "Initial Inspection",
      description: "Our team conducts a thorough inspection to assess your property and plan for the next steps."
    },
    {
      img: icon15,
      name: "Interior Design / Styling",
      description: "We transform your space with expert styling and design to create an inviting environment for guests."
    },
    {
      img: icon21,
      name: "Maintenance Works",
      description: "Our maintenance team ensures your property is in top condition, handling any necessary repairs or improvements."
    },
    {
      img: icon22,
      name: "Photography and Listing",
      description: "Professional photography is done to showcase your property in the best light, followed by listing it on popular platforms."
    },
    {
      img: icon12,
      name: "Guest Management",
      description: "We handle all aspects of guest interaction, ensuring smooth check-ins, support during their stay, and check-outs."
    },
    {
      img: icon23,
      name: "Relax and Count your Dirhams",
      description: "Sit back, relax, and watch your earnings grow while we manage everything for you."
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
                  {item.description}
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

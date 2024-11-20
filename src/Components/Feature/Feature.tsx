import icon12 from "../../assets/icons/icon12.png";
import icon13 from "../../assets/icons/icon13.png";
import icon14 from "../../assets/icons/icon14.png";
import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";
import icon17 from "../../assets/icons/icon17.png";
import icon5 from "../../assets/icons/icon5.png";

const Feature = () => {
  const data = [
    {
      title: "Management Support",
      img: icon12,
      description:
        "Our 24/7 teams handle support, payments, fees, and compliance, with client help via app or email.",
    },
    {
      title: "Listing Management",
      img: icon13,
      description:
        "Our team crafts standout profiles, highlighting your property’s best features to attract maximum attention",
    },
    {
      title: "Cleaning & Maintenance",
      img: icon14,
      description:
        "We provide cleaning, fast maintenance to ensure guest satisfaction and keep your home in top condition.",
    },
    {
      title: "Interior Design",
      img: icon15,
      description:
        "We provide fast, bespoke interior design to furnish your property to a premium standard, attracting guests year-round.",
    },
    {
      title: "Estimate Revenue",
      img: icon16,
      description:
        "We’ll provide a revenue projection based on your property, ensuring maximum earnings through bookings.",
    },
  ];
  return (
    <div className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-x-5 lg:gap-x-8 gap-y-10">
            {data.map((item, index) => (
              <div
                key={index}
                className={`w-full md:w-[47%] lg:w-[31%] px-6 lg:px-8 rounded-[20px] 
                ${
                  index === 1
                    ? "bg-primary text-white"
                    : "bg-[#fff6e7] text-text1"
                }`}
              >
                <div className="h-full flex flex-col justify-between py-6 lg:py-8 border-b-[3px] border-primary">
                  <div>
                    <div className="mb-7">
                      <img src={item.img} className="w-[60px]" />
                    </div>
                    <h4
                      className={`text-2xl font-medium ${
                        index === 1 ? "text-white" : "text-text1"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`font-montserrat text-lg font-normal py-2 ${
                        index === 1 ? "text-white" : "text-text2"
                      }`}
                    >
                      {item.description}{" "}
                    </p>
                  </div>
                  <button
                    aria-label={`Read more about ${item.title}`}
                    className={`mt-5 group flex items-center gap-2 py-1 ${
                      index === 1 ? "text-white" : "text-primary"
                    }`}
                  >
                    Read More{" "}
                    <img
                      src={index === 1 ? icon5 : icon17}
                      className="w-4 group-hover:translate-x-2 duration-500"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

import { icon17, icon5 } from "../../assets/icons/index.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Feature = () => {
  const homeContent = useSelector((state: RootState) => state.homeContent.data);

  return (
    <div className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-x-5 lg:gap-x-8 gap-y-10">
            {homeContent?.features.map((item, index) => (
              <div
                key={index}
                data-aos="flip-left" data-aos-duration={1500 + index * 100} data-aos-delay={50 + index * 50}
                className={`w-full md:w-[47%] lg:w-[31%] px-6 lg:px-8 rounded-[20px] 
                ${index === 1
                    ? "bg-primary text-white"
                    : "bg-[#fff6e7] text-text1"
                  }`}
              >
                <div className="h-full flex flex-col justify-between py-6 lg:py-8 border-b-[3px] border-primary">
                  <div>
                    <div className="mb-7">
                      <img src={item.icon} className="w-[60px]" />
                    </div>
                    <h4
                      className={`text-2xl font-medium ${index === 1 ? "text-white" : "text-text1"
                        }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={` text-lg font-normal py-2 ${index === 1 ? "text-white" : "text-text2"
                        }`}
                    >
                      {item.description}{" "}
                    </p>
                  </div>
                  <button
                    aria-label={`Read more about ${item.title}`}
                    className={`mt-5 group flex items-center gap-2 py-1 ${index === 1 ? "text-white" : "text-primary"
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

import { Link } from "react-router-dom";
import {
  icon27,
  icon28,
  icon29,
  icon31,
  icon5,
} from "../../assets/icons/index.ts";
import { bg1, img8 } from "../../assets/images/index.ts";
import { Select } from "@mantine/core";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const BookingContact = () => {
  return (
    <>
      {/* banner */}
      <div
        className="pt-20 sm:pt-28 pb-10 sm:pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
        style={{
          backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-4">
            <h2 className="text-[42px] sm:text-5xl font-bold text-center text-[#1F1607] font-light]">
              Get in touch
            </h2>
            <p className="flex items-center gap-4 text-[#4C360E]">
              <span className="">
                <Link to="/" className="hover:underlinehover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
                  Home
                </Link>
              </span>
              <span>
                <img src={icon27} className="w-4" />
              </span>
              <span>Contact</span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-full lg:w-3/5 lg:pr-16">
              <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:[42px] font-semibold text-[#1F1607]">
                Contact me
              </h4>
              <div className="mt-10 contact_us">
                <form action="">
                  <div className="grid xs:grid-cols-2 gap-4">
                    <div className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12">
                      <input
                        type="text"
                        className="w-full p-0 border-none focus:ring-0 bg-transparent"
                        placeholder="Full Name"
                      />
                      <span>
                        <img src={icon31} className="w-4" />
                      </span>
                    </div>
                    <div className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12">
                      <input
                        type="text"
                        className="w-full p-0 border-none focus:ring-0 bg-transparent"
                        placeholder="Email Address"
                      />
                      <span>
                        <img src={icon28} className="w-4" />
                      </span>
                    </div>
                    <div className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12">
                      <input
                        type="text"
                        className="w-full p-0 border-none focus:ring-0 bg-transparent"
                        placeholder="Phone Number"
                      />
                      <span>
                        <img src={icon29} className="w-4" />
                      </span>
                    </div>
                    <div className="">
                      <Select
                        placeholder="Subject"
                        data={["React", "Angular", "Vue", "Svelte"]}
                        className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12"
                        rightSection={
                          <KeyboardArrowDownOutlined className="text-[#DCC397]" />
                        }
                      />
                    </div>
                    <div className=" xs:col-span-2">
                      <textarea
                        className="bg-[#fef4e3] rounded-xl w-full px-6 py-3 border-none focus:ring-0 min-h-32"
                        placeholder="Write Your Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn1 flex items-center  gap-2">
                      Send Message{" "}
                      <span>
                        <img src={icon5} className="w-4" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:block hidden w-2/5 pl-6 lg:pl-0">
              <img src={img8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingContact;

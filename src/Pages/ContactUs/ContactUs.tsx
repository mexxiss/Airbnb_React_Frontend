import { Link } from "react-router-dom";
import { icon27, icon28, icon29, icon30 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import ContactForm from "./Form/ContactForm.tsx";
import GoogleMapsComponent from "../../Components/GoogleMap/GoogleMapsComponent.tsx";

const ContactUs = () => {
  const contactUs = useSelector((state: RootState) => state.contactus.data);

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
              Contact
            </h2>
            <p className="flex items-center gap-4 text-[#4C360E]">
              <span className="">
                <Link
                  to="/"
                  className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
                >
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

      <div className="pt-14 md:pt-16 lg:pt-20">
        <div className="container mx-auto">
          <h3 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] font-light] leading-[50px] 2xl:leading-[58px] text-center">
            Get in touch
          </h3>
          <p className="max-w-[900px] mx-auto text-[#60410C] lg:text-lg  mt-2 text-center">
            Every home is different, and so is our approach. For more
            information, get in touch with us. Fill out the form below for a
            quick call back, or call/e-mail us directly.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="py-4 sm:py-7 px-6 bg-white rounded-xl shadow-[0px_0px_20px_0px_#0000001A]">
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#fff6e7]">
                  <img src={icon28} className="w-8" />
                </div>
                <div className="mt-4">
                  <p className="text-xl font-medium text-black mb-2">
                    Email Address
                  </p>
                  <ul className="flex flex-col gap-1">
                    {contactUs?.emails?.map((email) => (
                      <li key={email} className="text-[#AEAEAE] md:text-lg ">
                        {email}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-4 sm:py-7 px-6 bg-white rounded-xl shadow-[0px_0px_20px_0px_#0000001A]">
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#fff6e7]">
                  <img src={icon29} className="w-8" />
                </div>
                <div className="mt-4">
                  <p className="text-xl font-medium text-black mb-2">
                    Phone Number
                  </p>
                  <ul className="flex flex-col gap-1">
                    {contactUs?.phones.map((phone) => (
                      <li key={phone} className="text-[#AEAEAE] md:text-lg ">
                        {phone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-4 sm:py-7 px-6 bg-white rounded-xl shadow-[0px_0px_20px_0px_#0000001A]">
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#fff6e7]">
                  <img src={icon30} className="w-8" />
                </div>
                <div className="mt-4">
                  <p className="text-xl font-medium text-black mb-2">
                    Our Loaction
                  </p>
                  <ul className="flex flex-col gap-1">
                    <li className="text-[#AEAEAE] md:text-lg ">
                      {contactUs?.location?.address}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />

      {/* map */}
      <div>
        <div>
          <GoogleMapsComponent />
        </div>
      </div>
    </>
  );
};

export default ContactUs;

import { Link } from "react-router-dom";
import {
  icon27,
  icon28,
  icon29,
  icon30,
  icon31,
  icon5,
} from "../../assets/icons/index.ts";
import { bg1, img8, map } from "../../assets/images/index.ts";

import { Select } from "@mantine/core";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { ContactResponse, ContactData } from "../../types/contactTypes.ts";
import { useCallback, useEffect, useMemo } from "react";
import { setContact } from "../../store/features/contactUsSlice.ts";
import { fetchContact } from "../../services/apiServices.ts";
import { RootState } from "../../store/store.ts";
import ContactForm from "./Form/ContactForm.tsx";
import GoogleMapsComponent from "../../Components/GoogleMap/GoogleMapsComponent.tsx";
import ErrorHandleMessage from "../../Components/ErrorHandleComponent/ErrorHandleMessage.tsx";

const ContactUs = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, error, data } = useQuery<ContactResponse>({
    queryKey: ["contact"],
    queryFn: fetchContact,
  });

  // Memoizing the finalData to avoid unnecessary recalculations
  const finalData = useMemo(() => data?.data as ContactData, [data]);

  const dispatchContact = useCallback(() => {
    if (finalData) {
      dispatch(setContact(finalData));
    }
  }, [dispatch, finalData]);

  useEffect(() => {
    if (finalData) {
      dispatchContact();
    }
  }, [finalData, dispatchContact]);

  if (isError && error instanceof Error) {
    return <ErrorHandleMessage msg={error.message} />;
  }

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
            <h2 className="text-[42px] sm:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
              Get in touch
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                      <li
                        key={email}
                        className="text-[#AEAEAE] md:text-lg font-montserrat"
                      >
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
                      <li
                        key={phone}
                        className="text-[#AEAEAE] md:text-lg font-montserrat"
                      >
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
                    <li className="text-[#AEAEAE] md:text-lg font-montserrat">
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

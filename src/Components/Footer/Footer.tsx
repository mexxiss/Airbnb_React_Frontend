import { icon25, whiteLogo } from "../../assets/icons/index.ts";
import { Link } from "react-router-dom";
import {
  Call,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  X,
} from "@mui/icons-material";
import { RootState } from "../../store/store.ts";
import { useSelector } from "react-redux";

const Footer = () => {
  const contactUs = useSelector((state: RootState) => state.contactus.data);
  const { phone } = useSelector((state: RootState) => state.country);
  return (
    <div className="bg-[#170F00]">
      <div className="py-10 border-b border-white">
        <div className="container mx-auto">
          <div className="flex sm:items-center justify-center flex-col sm:flex-row gap-3 sm:gap-6">
            <p className="text-[22px] text-white font-bold text-nowrap">
              Subscribe Us
            </p>
            <div className="flex justify-between items-center border border-white h-10 pl-3.5 pr-2 w-full max-w-[420px]">
              <input
                type="text"
                className="p-0 border-none focus:ring-0 w-full bg-transparent placeholder:text-[#B7B7B7] text-white"
                placeholder="Email"
              />
              <button>
                <img src={icon25} className="w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-10 text-white">
            <div className="col-span-2 sm:col-span-3 md:col-span-2 space-y-6 pr-8 order-1">
              <div>
                <img src={whiteLogo} className="max-w-[164px] w-full" />
              </div>
              <p className="text-[#B7B7B7]">
                Experience top-tier Airbnb management services that eliminate
                the complexities of renting out your property. Sit back, relax,
                and watch your earnings grow effortlessly!
              </p>
            </div>
            <div className="order-2 md:order-3 lg:order-2">
              <h6 className="text-white text-lg font-semibold">About Us</h6>
              <ul className="mt-5 space-y-4 text-[#B7B7B7]">
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/media">Media</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/blogs">Blog</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/videos">Videos</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/airbnb-dubai">Airbnb Dubai</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/airbnb-requirements">Airbnb Requirements and Fees Dubai</Link>
                </li>
              </ul>
            </div>
            <div className="order-3 md:order-4 lg:order-3">
              <h6 className="text-white text-lg font-semibold">Main</h6>
              <ul className="mt-5 space-y-4 text-[#B7B7B7]">
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/services/cleaning-maintenance">Services</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/estimate-revenue">Estimate Revenue</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/contact-us">Contact</Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link to="/howtovideos">How to Videos</Link>
                </li>
              </ul>
            </div>
            <div className="order-5 sm:order-3 md:order-5 lg:order-3">
              <h6 className="text-white text-lg font-semibold">Follow us</h6>
              <ul className="mt-5 text-[#B7B7B7] flex sm:flex-col items-center sm:items-start gap-4">
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link
                    to="https://www.facebook.com/login/"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <FacebookOutlined />{" "}
                    <span className="hidden sm:inline-block">Facebook</span>
                  </Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link
                    to="https://www.linkedin.com/login/in"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <LinkedIn />{" "}
                    <span className="hidden sm:inline-block">LinkedIn</span>
                  </Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link
                    to="https://x.com/"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <X />{" "}
                    <span className="hidden sm:inline-block">Twitter</span>
                  </Link>
                </li>
                <li className="text-sm hover:text-primary hover:translate-x-1.5 duration-300">
                  <Link
                    to="https://www.instagram.com/accounts/login/?hl=en"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <Instagram />{" "}
                    <span className="hidden sm:inline-block">Instagram</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 order-4 sm:order-5 md:order-2 lg:order-5">
              <h6 className="text-white text-lg font-semibold">Contact </h6>
              <div className="text-[#B7B7B7] mt-5 space-y-5">
                <p className="flex gap-3">
                  <LocationOn /> {contactUs?.location.address}
                </p>
                <p className="flex gap-3">
                  <Call /> {phone || "+91-8779043458"}
                </p>
                <p className="flex gap-3">
                  <Mail /> {contactUs?.emails[0] || "support@mexxiss.com"}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10 sm:pt-16">
            <p className="text-sm text-center text-white font-futura">
              Copyright © 2024 Airbnb. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import logo from "../../assets/icons/logo.png";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import NavMenu from "./NavMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { MenuOutlined } from "@mui/icons-material";

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div className="header relative before:absolute before:left-0 before:top-0 before:w-full before:h-[calc(100%_-_50px)] before:bg-[#F5F5F6]">
      <div className="py-4 md:py-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-4 xs:gap-8">
              <li>
                <button className="text-text1 opacity-70 duration-300 text-xs xs:text-sm flex items-center gap-4 ">
                  <span className="md:flex items-center justify-center px-2.5 py-2 h-14 bg-primary hidden ">
                    <img src={icon1} className="w-5" />
                  </span>{" "}
                  +91 123456789
                </button>
              </li>
              <li>
                <button className="text-text1 opacity-70 duration-300 text-xs xs:text-sm flex items-center gap-4 ">
                  <span className="md:flex items-center justify-center px-2.5 py-2 h-14 bg-primary hidden ">
                    <img src={icon2} className="w-5" />
                  </span>{" "}
                  hello@example.com
                </button>
              </li>
            </ul>
            <ul className="flex items-center gap-8">
              {/* <li className="hidden sm:block">
                <button className="text-text1 opacity-70 duration-300 text-sm flex items-center gap-2">
                  <span>
                    <img src={icon3} className="w-5" />
                  </span>{" "}
                  Translate
                </button>
              </li> */}
              <li>
                <button className="text-text1 opacity-70 duration-300 text-xs xs:text-sm flex items-center gap-1 xs:gap-2">
                  <span>
                    <img src={icon4} className="w-4 xs:w-5" />
                  </span>{" "}
                  Log in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* main header */}
      <div className=" sticky top-0 z-50 bg-white sm:bg-transparent shadow-[0px_2px_15px_0px_#0000001A sm:shadow-none">
        <div className="container mx-auto">
          <div className="flex items-center justify-between sm:bg-white sm:shadow-[0px_2px_15px_0px_#0000001A] sm:px-4 md:px-6 sm:md-8 py-3.5 rounded-b-xl rounded-tr-xl">
            <div className="flex items-center gap-3">
              <button
                className="xl:hidden"
                onClick={() => setMenuShow(true)}
              >
                <MenuOutlined className="!text-2xl sm:!text-3xl md:!text-4xl text-text2" />
              </button>
              <div className="logo">
                <img
                  src={logo}
                  className="max-w-[80px] sm:max-w-[120px] md:max-w-[150px]"
                />
              </div>
            </div>
            <div>
              <NavMenu />
            </div>
            <div>
              <button className="btn1">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu menuShow={menuShow} setMenuShow={setMenuShow} />
    </div>
  );
};

export default Header;

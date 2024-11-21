import { useEffect } from "react";
import logo from "../../assets/icons/logo.png";
import { NavLink } from "react-router-dom";
import { CloseOutlined } from "@mui/icons-material";

interface Iprops {
  menuShow: boolean;
  setMenuShow: (value: boolean) => void;
}
const MobileMenu = ({ menuShow, setMenuShow }: Iprops) => {
  const customStyle = ["overflow-hidden", "xl:overflow-auto"];

  useEffect(() => {
    if (menuShow) {
      customStyle.forEach((cls) => document.body.classList.add(cls));
    } else {
      customStyle.forEach((cls) => document.body.classList.remove(cls));
    }
  }, [menuShow]);

  const closeMenu = () => {
    setMenuShow(false);
  };
  return (
    <>
      <div
        className={`fixed w-full h-full top-0 left-0 z-[99] xl:hidden ${!menuShow ? "opacity-0 invisible duration-150 " : "duration-300 "
          }`}
      >
        <div
          className={`w-max flex relative z-[999] 2xl:hidden md:w-fit ${menuShow
            ? "translate-x-0 duration-300 "
            : "-translate-x-full duration-150"
            }`}
        >
          {/* Main menu Section */}
          <div className="bg-white w-[240px] sm:w-[320px] top-0 left-0 h-screen relative z-20 overflow-auto py-4 main_menu">
            <div className="px-4">
              <img src={logo} alt="" className="blueFilter h-9" />
            </div>
            <ul className="flex flex-col gap-3 mt-6 text-text1">
              <li>
                <NavLink
                  to="/booking/home"
                  className={({ isActive }) =>
                    `text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 block ${isActive && "bg-[#060c260f]"
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="opacity-80">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/booking/contact-us"
                  className={({ isActive }) =>
                    `text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 block ${isActive && "bg-[#060c260f]"
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="opacity-80">Contact Us</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/booking/services"
                  className={({ isActive }) =>
                    `text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 block ${isActive && "bg-[#060c260f]"
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="opacity-80">Service</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/booking/privacy-policy"
                  className={({ isActive }) =>
                    `text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 block ${isActive && "bg-[#060c260f]"
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span className="opacity-80">Privacy Policy</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <button
            className="absolute top-5 -right-8 sm:-right-10"
            onClick={closeMenu}
          >
            <CloseOutlined className="text-white" />{" "}
          </button>
        </div>

        {/* Bg Overlay */}
        <div
          className={`fixed w-full h-full top-0 left-0 bg-black z-[99] bg-opacity-40 xl:hidden ${menuShow
            ? "opacity-100 visible  duration-300"
            : "invisible opacity-0  duration-100"
            }  ${menuShow && "backdrop-blur-[2px]  delay-100"}`}
          onClick={closeMenu}
        ></div>
      </div>
    </>
  );
};

export default MobileMenu;

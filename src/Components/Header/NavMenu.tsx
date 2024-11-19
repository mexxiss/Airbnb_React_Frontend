import {
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceActive, setIsServiceActive] = useState(false);
  const location = useLocation()

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const serviceRoutes = [
      "/services/cleaning-maintenance",
      "/services/interior-design",
      "/services/listing-management",
      "/services/management-support",
    ];
    setIsServiceActive(serviceRoutes.some((route) => location.pathname.includes(route)));
  }, [location]);

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ul className="xl:flex items-center gap-6 2xl:gap-8 hidden">
        <li className="group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:text-primary py-2  ${isActive
                ? "text-primary text-shadow-custom after:absolute after:left-1/2 after:-translate-y-1/5 after:-bottom-[3px] after:min-w-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
                : " text-text1"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`py-1 tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:!text-primary py-2flex items-center ${isOpen || isServiceActive ? 'text-primary text-shadow-custom' : ""} ${isServiceActive && 'text-primary text-shadow-custom after:absolute after:left-1/2 after:-translate-y-1/5 after:-bottom-[3px] after:min-w-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary'}`}
          >
            Services{" "}
            <span>
              <KeyboardArrowDownOutlined />
            </span>
          </button>
          <div
            className={`absolute top-[90%] left-0 w-max z-10 text-left pt-2  ${isOpen ? "opacity-1 visible" : "opacity-0 invisible"
              }`}
          >
            <div className="py-3 rounded-xl rounded-tl-none bg-white shadow-[2px_0px_15px_0px_#0000003e]">
              <ul>
                <li>
                  <NavLink to="/services/cleaning-maintenance" className={({isActive}) => `px-4 py-2 w-full inline-block hover:bg-primary hover:text-white ${isActive && "bg-primary text-white"}`}>
                    Cleaning & Maintenance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/interior-design" className={({isActive}) => `px-4 py-2 w-full inline-block hover:bg-primary hover:text-white ${isActive && "bg-primary text-white"}`}>
                    Interior Design
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/listing-management" className={({isActive}) => `px-4 py-2 w-full inline-block hover:bg-primary hover:text-white ${isActive && "bg-primary text-white"}`}>
                    Listing Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/management-support" className={({isActive}) => `px-4 py-2 w-full inline-block hover:bg-primary hover:text-white ${isActive && "bg-primary text-white"}`}>
                    Management Support
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group">
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:text-primary py-2  ${isActive
                ? "text-primary text-shadow-custom after:absolute after:left-1/2 after:-translate-y-1/5 after:-bottom-[3px] after:min-w-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
                : " text-text1"
              }`
            }
          >
            Gallery
          </NavLink>
        </li>
        <li className="group">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:text-primary py-2  ${isActive
                ? "text-primary text-shadow-custom after:absolute after:left-1/2 after:-translate-y-1/5 after:-bottom-[3px] after:min-w-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
                : " text-text1"
              }`
            }
          >
            Pricing
          </NavLink>
        </li>
        <li className="group">
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:text-primary py-2  ${isActive
                ? "text-primary text-shadow-custom after:absolute after:left-1/2 after:-translate-y-1/5 after:-bottom-[3px] after:min-w-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
                : " text-text1"
              }`
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="group">
          <NavLink
            to="/estimate-revenue"
            className={({ isActive }) =>
              `tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:text-primary py-2  ${isActive
                ? "text-primary text-shadow-custom after:absolute after:left-1/2 after:-translate-y-1/5 after:-bottom-[3px] after:min-w-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
                : " text-text1"
              }`
            }
          >
            Estimate Revenue
          </NavLink>
        </li>
        <li className="group">
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:text-primary py-2  ${isActive
                ? "text-primary text-shadow-custom after:absolute after:left-1/2 after:-translate-y-1/5 after:-bottom-[3px] after:min-w-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
                : " text-text1"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;

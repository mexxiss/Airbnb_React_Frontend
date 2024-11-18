import {
  ArrowRightRounded,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

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
            className={`tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:!text-primary py-2flex items-center ${isOpen && 'text-primary text-shadow-custom'}`}
          >
            Services{" "}
            <span>
              <KeyboardArrowDownOutlined />
            </span>
          </button>
          <div
            className={`absolute top-[90%] left-0 w-max z-10 text-left pt-4 ${isOpen ? "opacity-1 visible" : "opacity-0 invisible"
              }`}
          >
            <div className="py-3 rounded-xl rounded-tl-none bg-white shadow-[0px_2px_15px_0px_#0000001A]">
              <ul>
                <li>
                  <Link to="/" className="px-4 py-2 w-full inline-block hover:bg-gray-50">
                    Cleaning & Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/" className="px-4 py-2 w-full inline-block hover:bg-gray-50">
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/" className="px-4 py-2 w-full inline-block hover:bg-gray-50">
                    Listing Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/" className="px-4 py-2 w-full inline-block hover:bg-gray-50">
                    Management Support
                  </Link>
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
            to="/service"
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

import { NavLink } from "react-router-dom";

const NavMenu = () => {

    return (
        <>
            <ul className="xl:flex items-center gap-6 2xl:gap-8 hidden">
                <li className="group">
                    <NavLink
                        to="/booking/home"
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
                <li className="group">
                    <NavLink
                        to="/booking/contact-us"
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
                <li className="group">
                    <NavLink
                        to="/booking/services"
                        className={({ isActive }) =>
                            `tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:text-primary py-2  ${isActive
                                ? "text-primary text-shadow-custom after:absolute after:left-1/2 after:-translate-y-1/5 after:-bottom-[3px] after:min-w-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
                                : " text-text1"
                            }`
                        }
                    >
                        Service
                    </NavLink>
                </li>
                <li className="group">
                    <NavLink
                        to="/booking/privacy-policy"
                        className={({ isActive }) =>
                            `tracking-wide text-sm xl:text-base duration-300 relative hover:text-shadow-custom hover:text-primary py-2  ${isActive
                                ? "text-primary text-shadow-custom after:absolute after:left-1/2 after:-translate-y-1/5 after:-bottom-[3px] after:min-w-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
                                : " text-text1"
                            }`
                        }
                    >
                        Privacy Policy
                    </NavLink>
                </li>
            </ul>
        </>
    );
};

export default NavMenu;

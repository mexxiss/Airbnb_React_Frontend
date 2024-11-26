import { NavLink, useParams } from "react-router-dom";
import logo from "../../assets/icons/whiteLogo.png";
import {
  CalendarMonthOutlined,
  HomeWorkOutlined,
  ReceiptLongOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
const Sidebar = () => {
  const { id } = useParams();
  return (
    <div className="bg-primary py-6 h-full">
      <div className="px-5">
        <img src={logo} className="w-32 lg:w-36 xl:w-40" />
      </div>
      <ul className="mt-8">
        <li>
          <NavLink
            to="/user-panel/properties"
            className={({ isActive }) =>
              `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${
                isActive
                  ? "border-[#fff3dd] bg-[#d5b67f]"
                  : "border-transparent"
              }`
            }
          >
            <HomeWorkOutlined /> Properties
          </NavLink>
        </li>
        {id && (
          <li>
            <NavLink
              to="/user-panel/calender/10"
              className={({ isActive }) =>
                `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${
                  isActive
                    ? "border-[#fff3dd] bg-[#d5b67f]"
                    : "border-transparent"
                }`
              }
            >
              <CalendarMonthOutlined /> Calender
            </NavLink>
          </li>
        )}
        {id && (
          <li>
            <NavLink
              to="/user-panel/statements/10"
              className={({ isActive }) =>
                `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${
                  isActive
                    ? "border-[#fff3dd] bg-[#d5b67f]"
                    : "border-transparent"
                }`
              }
            >
              <ReceiptLongOutlined /> Statements
            </NavLink>
          </li>
        )}
        {id && (
          <li>
            <NavLink
              to="/user-panel/maintenance/10"
              className={({ isActive }) =>
                `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${
                  isActive
                    ? "border-[#fff3dd] bg-[#d5b67f]"
                    : "border-transparent"
                }`
              }
            >
              <ReceiptLongOutlined /> Maintenance
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to={`/user-panel/settings/${id}`}
            className={({ isActive }) =>
              `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${
                isActive
                  ? "border-[#fff3dd] bg-[#d5b67f]"
                  : "border-transparent"
              }`
            }
          >
            <SettingsOutlined /> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

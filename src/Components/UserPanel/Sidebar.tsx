import { NavLink } from 'react-router-dom'
import logo from '../../assets/icons/whiteLogo.png'
import { CalendarMonthOutlined, HelpOutline, HomeWorkOutlined, ReceiptLongOutlined, SettingsOutlined } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <div className="bg-primary py-6 h-full">
      <div className='px-5'>
        <img src={logo} className='w-32 lg:w-36 xl:w-40' />
      </div>
      <div className='px-4'>
        <hr className='my-8' />
      </div>
      <ul className=''>
        <li>
          <NavLink to="/user-panel/properties" className={({ isActive }) => `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${isActive ? "border-[#fff3dd] bg-[#d5b67f]" : "border-transparent"}`}><HomeWorkOutlined /> Properties</NavLink>
        </li>
        <li>
          <NavLink to="/user-panel/calender" className={({ isActive }) => `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${isActive ? "border-[#fff3dd] bg-[#d5b67f]" : "border-transparent"}`}><CalendarMonthOutlined /> Calender</NavLink>
        </li>
        <li>
          <NavLink to="/user-panel/statements" className={({ isActive }) => `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${isActive ? "border-[#fff3dd] bg-[#d5b67f]" : "border-transparent"}`}><ReceiptLongOutlined /> Statements</NavLink>
        </li>
        <li>
          <NavLink to="/user-panel/maintenance" className={({ isActive }) => `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${isActive ? "border-[#fff3dd] bg-[#d5b67f]" : "border-transparent"}`}><ReceiptLongOutlined /> Maintenance</NavLink>
        </li>
        <li>
          <NavLink to="/user-panel/settings" className={({ isActive }) => `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${isActive ? "border-[#fff3dd] bg-[#d5b67f]" : "border-transparent"}`}><SettingsOutlined /> Settings</NavLink>
        </li>
        <li className='px-4'>
          <hr className='my-8' />
        </li>
        <li>
          <NavLink to="/user-panel/help" className={({ isActive }) => `text-sm duration-300 px-5 py-2.5 text-white tracking-wider hover:bg-[#d5b67f] uppercase flex items-center gap-3 border-l-[6px] ${isActive ? "border-[#fff3dd] bg-[#d5b67f]" : "border-transparent"}`}><HelpOutline /> Help</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;

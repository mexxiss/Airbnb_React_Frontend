import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/UserPanel/Sidebar.tsx'
import Header from '../Components/UserPanel/Header.tsx'
import { useState } from 'react'

const UserPanel = () => {
  const [isCollapse, setIsCollapse] = useState(false)
  const [isSidebarShow, setSideBarShow] = useState(false)

  const handleToggleSideBar = () => {
    setSideBarShow(!isSidebarShow)
  }
  return (
    <div>
      <div className='flex h-screen'>
        <div
          className={`h-screen duration-300 w-[200px] fixed z-[30] md:static ${isCollapse ? 'md:-ml-[200px]' : 'm-0'
            } ${isSidebarShow ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <Sidebar />
        </div>
        <div className={`fixed z-20 w-full h-full left-0 top-0 bg-black bg-opacity-45 md:hidden ${!isSidebarShow ? "opacity-0 invisible" : "opacity-100 visible"}`} onClick={handleToggleSideBar} ></div>
        <div
          className={`duration-300 ${isCollapse ? "w-full" : "w-full md:w-[calc(100%_-_200px)]"}`}>
          <div>
            <Header isCollapse={isCollapse} setIsCollapse={setIsCollapse} isSidebarShow={isSidebarShow} setSideBarShow={setSideBarShow} />
          </div>
          <div className='px-4 md:px-10 h-[calc(100vh_-_63px)] overflow-auto py-4'>
            <Outlet />
          </div>
        </div>
      </div>
    </div >
  )
}

export default UserPanel

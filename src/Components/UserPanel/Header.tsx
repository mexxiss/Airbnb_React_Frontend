import { MenuOutlined, NotificationsOutlined, PersonOutlined } from "@mui/icons-material"

interface IsProps {
    isCollapse: boolean;
    setIsCollapse: (value: boolean) => void;
    isSidebarShow: boolean;
    setSideBarShow: (value: boolean) => void;
}
const Header = ({ isCollapse, setIsCollapse, isSidebarShow, setSideBarShow }: IsProps) => {
    const handleToggleCollapse = () => {
        setIsCollapse(!isCollapse)
    }
    const handleToggleSideBar = () => {
        setSideBarShow(!isSidebarShow)
    }

    return (
        <div className="px-4 md:px-10 py-4 border-b border-primary">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div>
                        <button className="text-gray-500 hidden md:inline-block" onClick={handleToggleCollapse}>
                            <MenuOutlined className="!text-3xl" />
                        </button>
                        <button className="text-gray-500 md:hidden" onClick={handleToggleSideBar}>
                            <MenuOutlined className="!text-3xl" />
                        </button>
                    </div>
                </div>
                <div>
                    <h5 className="text-lg text-primary">My places</h5>
                </div>
                <div className="flex items-center gap-5">
                    <button className="relative">
                        <NotificationsOutlined className="text-gray-500 !text-3xl" />
                        <span className="absolute top-0 -right-1 flex items-center justify-center text-white bg-primary rounded-full text-[11px] w-4 h-4">0</span>
                    </button>
                    <div className="w-7 h-7 rounded-full border border-primary flex items-center justify-center">
                        <PersonOutlined className="text-gray-700 !text-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

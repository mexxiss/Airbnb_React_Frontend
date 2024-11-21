import { Link } from 'react-router-dom'
import {icon27} from "../../assets/icons/index.ts";
import {bg1} from "../../assets/images/index.ts";
import { CalendarMonthOutlined, CleaningServicesOutlined, GroupsOutlined, KingBedOutlined, RoomServiceOutlined, WifiOutlined } from '@mui/icons-material';

const Service = () => {
    return (
        <>

            {/* banner */}
            <div
                className="pt-20 sm:pt-28 pb-10 sm:pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
                style={{
                    backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
                }}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-center flex-col gap-4">
                        <h2 className="text-[42px] sm:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
                            Service
                        </h2>
                        <p className="flex items-center gap-4 text-[#4C360E]">
                            <span className="">
                                <Link to="/booking/home" className="hover:underline">Home</Link>
                            </span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span>Service</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='pt-14 sm:pt-20 pb-36'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 sm:gap-7 max-w-[1100px] mx-auto">
                        <div className='flex items-center justify-center flex-col gap-4 px-4 sm:px-8 py-6 border border-[#1F160726] rounded-3xl shadow-[0px_10px_20px_0px_#DCC3971F]'>
                            <div className='w-20 h-20 rounded-full bg-[#faecd5] mx-auto flex items-center justify-center text-primary'>
                                <WifiOutlined className='!text-4xl' />
                            </div>
                            <p className='text-text1 sm:text-lg xl:text-xl font-medium text-center capitalize'>high-speed WiFi in all properties</p>
                        </div>
                        <div className='flex items-center justify-center flex-col gap-4 px-4 sm:px-8 py-6 border border-[#1F160726] rounded-3xl shadow-[0px_10px_20px_0px_#DCC3971F]'>
                            <div className='w-20 h-20 rounded-full bg-[#faecd5] mx-auto flex items-center justify-center text-primary'>
                                <KingBedOutlined className='!text-4xl' />
                            </div>
                            <p className='text-text1 sm:text-lg xl:text-xl font-medium text-center capitalize'>premium linens & towels</p>
                        </div>
                        <div className='flex items-center justify-center flex-col gap-4 px-4 sm:px-8 py-6 border border-[#1F160726] rounded-3xl shadow-[0px_10px_20px_0px_#DCC3971F]'>
                            <div className='w-20 h-20 rounded-full bg-[#faecd5] mx-auto flex items-center justify-center text-primary'>
                                <CleaningServicesOutlined className='!text-4xl' />
                            </div>
                            <p className='text-text1 sm:text-lg xl:text-xl font-medium text-center capitalize'>additional cleaning provided on request</p>
                        </div>
                        <div className='flex items-center justify-center flex-col gap-4 px-4 sm:px-8 py-6 border border-[#1F160726] rounded-3xl shadow-[0px_10px_20px_0px_#DCC3971F]'>
                            <div className='w-20 h-20 rounded-full bg-[#faecd5] mx-auto flex items-center justify-center text-primary'>
                                <RoomServiceOutlined className='!text-4xl' />
                            </div>
                            <p className='text-text1 sm:text-lg xl:text-xl font-medium text-center capitalize'>luxury amenities on arrival</p>
                        </div>
                        <div className='flex items-center justify-center flex-col gap-4 px-4 sm:px-8 py-6 border border-[#1F160726] rounded-3xl shadow-[0px_10px_20px_0px_#DCC3971F]'>
                            <div className='w-20 h-20 rounded-full bg-[#faecd5] mx-auto flex items-center justify-center text-primary'>
                                <CalendarMonthOutlined className='!text-4xl' />
                            </div>
                            <p className='text-text1 sm:text-lg xl:text-xl font-medium text-center capitalize'>longer-term stays are allowed</p>
                        </div>
                        <div className='flex items-center justify-center flex-col gap-4 px-4 sm:px-8 py-6 border border-[#1F160726] rounded-3xl shadow-[0px_10px_20px_0px_#DCC3971F]'>
                            <div className='w-20 h-20 rounded-full bg-[#faecd5] mx-auto flex items-center justify-center text-primary'>
                                <GroupsOutlined className='!text-4xl' />
                            </div>
                            <p className='text-text1 sm:text-lg xl:text-xl font-medium text-center capitalize'>Frank Porter team is available for you</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service

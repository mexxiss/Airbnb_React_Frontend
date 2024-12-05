import { Link } from 'react-router-dom'
import { icon27 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";
import { CalendarMonthOutlined } from '@mui/icons-material';

const Media = () => {
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
                        <h2 className="text-[42px] sm:text-5xl font-bold text-center text-[#1F1607] font-light]">
                            Media
                        </h2>
                        <p className="flex items-center gap-4 text-[#4C360E]">
                            <span className="">
                                <Link
                                    to="/"
                                    className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
                                >
                                    Home
                                </Link>
                            </span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span>Media</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-10">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center flex-col">
                        <h3 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] font-light] leading-[50px] 2xl:leading-[58px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                            Media
                        </h3>
                        <p className="max-w-[950px] mx-auto text-[#60410C] lg:text-lg  mt-3 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            Frank Porter world-class Airbnb management services, takes the hassle out of renting out your property on Airbnb and similar platforms, so you can sit back, relax and count your dirhams.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-10 md:py-16 lg:py-20">
                <div className="container mx-auto">
                    <div>
                        <h3 className="text-center text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] font-light] leading-[50px] 2xl:leading-[58px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                            Our Features
                        </h3>
                    </div>
                    <div className='mt-8'>
                        <ul>
                            <li className='border-t border-primary border-opacity-50 py-6 group'>
                                <div className='flex gap-8'>
                                    <div className='w-1/4'>
                                        <img src='https://web-api.frankporter.com/wp-content/uploads/2022/07/khaleejTimes.svg' alt='Feature 1' className='w-full h-20 object-contain mr-auto opacity-50 group-hover:opacity-100 duration-300' />
                                    </div>
                                    <div>
                                        <p className='flex items-center gap-2 opacity-60 text-sm'><CalendarMonthOutlined className='!text-lg' /> <span>11.2024</span></p>
                                        <h6 className='text-lg text-text1 mt-2'>How short-term lets are boosting the UAE economy</h6>
                                        <Link to="#" className='inline-block mt-3 uppercase font-medium text-sm text-primary hover:text-text1 duration-300 group-hover:underline'>Read More</Link>
                                    </div>
                                </div>
                            </li>
                            <li className='border-t border-primary border-opacity-50 py-6 group'>
                                <div className='flex gap-8'>
                                    <div className='w-1/4'>
                                        <img src='https://web-api.frankporter.com/wp-content/uploads/2022/07/dubaiEye.svg' alt='Feature 1' className='w-full h-20 object-contain mr-auto opacity-50 group-hover:opacity-100 duration-300' />
                                    </div>
                                    <div>
                                        <p className='flex items-center gap-2 opacity-60 text-sm'><CalendarMonthOutlined className='!text-lg' /> <span>11.2024</span></p>
                                        <h6 className='text-lg text-text1 mt-2'>UAE landlords offering short-stay rentals have corporate tax decisions to make</h6>
                                        <Link to="#" className='inline-block mt-3 uppercase font-medium text-sm text-primary hover:text-text1 duration-300 group-hover:underline'>Read More</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Media

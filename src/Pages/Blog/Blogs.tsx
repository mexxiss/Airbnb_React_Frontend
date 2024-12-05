import { Link } from 'react-router-dom'
import { icon27 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";
import { CalendarMonthOutlined, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material';
const Blogs = () => {
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
                            Blogs
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
                            <span>Blogs</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-10 md:pb-16 lg:pb-20 pt-14">
                <div className="container mx-auto">
                    <div className="grid xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10">
                        {Array(10).fill(0).map(() => (
                            <div className='group relative'>
                                <Link to="/blog/1" className='absolute w-full h-full top-0 left-0 z-10'></Link>
                                <div className='h-[220px] w-full overflow-hidden'>
                                    <img src={bg1} className='w-full h-full object-cover object-center group-hover:scale-110 duration-300' />
                                </div>
                                <div className='mt-3'>
                                    <p className='flex items-center gap-2 opacity-60 text-sm'><CalendarMonthOutlined className='!text-lg' /> <span>11.2024</span></p>
                                    <h6 className='font-medium text-text1 text-lg xl:text-xl line-clamp-2 my-1.5'>Service-Driven Innovation</h6>
                                    <p className='text-sm opacity-70 line-clamp-3'>Anna Skigin, Founder and CEO of Frank Porter discusses how can leaders transform industries and business through personalised, hands-on communication and service. &nbsp; Leaders set the tone for change. Effective leaders engage directly with their</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-10'>
                        <ul className='flex items-center justify-center gap-3'>
                            <li className='flex items-center'>
                                <button>
                                    <span className='w-7 h-7 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white duration-300'><KeyboardArrowLeftOutlined className='!text-xl' /></span>
                                </button>
                            </li>
                            <li className='flex items-center'>
                                <button>
                                    <span className='w-7 h-7 rounded-full border flex items-center justify-center duration-300  border-primary bg-primary text-white'>1</span>
                                </button>
                            </li>
                            <li className='flex items-center'>
                                <button>
                                    <span className='w-7 h-7 rounded-full border flex items-center justify-center duration-300  border-transparent text-primary'>2</span>
                                </button>
                            </li>
                            <li className='flex items-center'>
                                <button>
                                    <span className='w-7 h-7 rounded-full border flex items-center justify-center duration-300  border-transparent text-primary'>3</span>
                                </button>
                            </li>
                            <li className='flex items-center'>
                                <button>
                                    <span className='w-7 h-7 rounded-full border flex items-center justify-center duration-300  border-transparent text-primary'>...</span>
                                </button>
                            </li>
                            <li className='flex items-center'>
                                <button>
                                    <span className='w-7 h-7 rounded-full border flex items-center justify-center duration-300  border-transparent text-primary'>7</span>
                                </button>
                            </li>
                            <li className='flex items-center'>
                                <button>
                                    <span className='w-7 h-7 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white duration-300'><KeyboardArrowRightOutlined className='!text-xl' /></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs

import { Link } from 'react-router-dom'
import { icon27 } from "../../assets/icons/index.ts";
import { bg1, img1, img2, img3, img4 } from "../../assets/images/index.ts";
import { CalendarMonthOutlined } from '@mui/icons-material';
const BlogDetails = () => {
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
                        <h2 className="text-3xl xs:text-4xl sm:text-[42px] md:text-5xl font-bold text-center text-[#1F1607] font-light] line-clamp-2">
                            How to furnish your Airbnb
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
                            <span className="">
                                <Link
                                    to="/blogs"
                                    className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
                                >
                                    Blogs
                                </Link>
                            </span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span className=' inline-block max-w-[120px] sm:max-w-[250px] overflow-hidden text-nowrap text-ellipsis'>How to furnish your Airbnb</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-10 md:pb-16 lg:pb-20 pt-14">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                        <div className="lg:w-[70%] lg:pr-8">
                            <div>
                                <div>
                                    <img src={bg1} className='max-h-[400px] w-full object-cover' />
                                    <p className='flex items-center gap-2 opacity-70 mt-2'><CalendarMonthOutlined className='!text-lg' /> <span>12-11-2024</span></p>
                                </div>
                                <div className='mt-6'>
                                    <h4 className='text-2xl md:text-3xl lg:text-4xl font-bold text-text1'>How to furnish your Airbnb</h4>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>Creating a beautiful and well furnished property goes beyond mere aesthetics. A well thought out interior design can be the make or break of your Airbnb. Whether your guests are coming for work or a vacation, it’s important to create a space that they want to spend time in and makes them feel relaxed during their stay. Here are six furnishing tips to make your Airbnb property a place where anyone would feel lucky to stay. </p>
                                    <h6 className='text-lg sm:text-xl md:text-2xl font-semibold text-text1 mt-6 md:mt-10'>Know your audience</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>Understanding your audience is vital when creating your space. Researching the demographics of Airbnb guests in your area can provide valuable insights into their preferences and expectations. Tailoring your furnishings to cater to their needs ensures a more personalized and enjoyable experience for your guests. </p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>Once you’ve done this, it’s about creating a balance of aesthetic and practicality. Remember that, even if there is a particular age group or demographic that would be most attracted to the location, it’s still important to appeal to a wider range of guests.</p>
                                    <h6 className='text-lg sm:text-xl md:text-2xl font-semibold text-text1 mt-6 md:mt-10'>Set a realistic budget</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>Furnishing your space doesn’t have to break the bank. Set a realistic budget that will give you enough leeway to pick up some great pieces, but won’t leave you worried about the cost.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>Invest in durable and easy-to-maintain pieces, prioritizing key areas such as the bedroom, living room, and kitchen. If these areas are looking stylish and have all of the required amenities, you should have satisfied guests.</p>
                                    <div className='mt-8'>
                                        <img src={img4} className='max-h-[300px] w-auto object-contain' />
                                    </div>
                                    <h6 className='text-lg sm:text-xl md:text-2xl font-semibold text-text1 mt-6 md:mt-10'>Set a realistic budget</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>Furnishing your space doesn’t have to break the bank. Set a realistic budget that will give you enough leeway to pick up some great pieces, but won’t leave you worried about the cost.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>Invest in durable and easy-to-maintain pieces, prioritizing key areas such as the bedroom, living room, and kitchen. If these areas are looking stylish and have all of the required amenities, you should have satisfied guests.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[30%] 3xl:pl-6">
                            <h6 className='text-lg uppercase font-semibold opacity-60'>Related articles
                            </h6>
                            <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-1 gap-x-5 gap-y-8'>
                                <div className='group relative'>
                                    <Link to="/blog/1" className='absolute w-full h-full top-0 left-0 z-10'></Link>
                                    <div className='h-[220px] w-full overflow-hidden'>
                                        <img src={img1} className='w-full h-full object-cover object-center group-hover:scale-110 duration-300' />
                                    </div>
                                    <div className='mt-3'>
                                        <p className='flex items-center gap-2 opacity-60 text-sm'><CalendarMonthOutlined className='!text-lg' /> <span>11.2024</span></p>
                                        <h6 className='font-medium text-text1 text-lg xl:text-xl line-clamp-2 my-1.5'>Service-Driven Innovation</h6>
                                        <p className='text-sm opacity-70 line-clamp-2'>Anna Skigin, Founder and CEO of Frank Porter discusses how can leaders transform industries and business through personalised, hands-on communication and service. &nbsp; Leaders set the tone for change. Effective leaders engage directly with their</p>
                                    </div>
                                </div>
                                <div className='group relative'>
                                    <Link to="/blog/1" className='absolute w-full h-full top-0 left-0 z-10'></Link>
                                    <div className='h-[220px] w-full overflow-hidden'>
                                        <img src={img2} className='w-full h-full object-cover object-center group-hover:scale-110 duration-300' />
                                    </div>
                                    <div className='mt-3'>
                                        <p className='flex items-center gap-2 opacity-60 text-sm'><CalendarMonthOutlined className='!text-lg' /> <span>11.2024</span></p>
                                        <h6 className='font-medium text-text1 text-lg xl:text-xl line-clamp-2 my-1.5'>Service-Driven Innovation</h6>
                                        <p className='text-sm opacity-70 line-clamp-2'>Anna Skigin, Founder and CEO of Frank Porter discusses how can leaders transform industries and business through personalised, hands-on communication and service. &nbsp; Leaders set the tone for change. Effective leaders engage directly with their</p>
                                    </div>
                                </div>
                                <div className='group relative'>
                                    <Link to="/blog/1" className='absolute w-full h-full top-0 left-0 z-10'></Link>
                                    <div className='h-[220px] w-full overflow-hidden'>
                                        <img src={img3} className='w-full h-full object-cover object-center group-hover:scale-110 duration-300' />
                                    </div>
                                    <div className='mt-3'>
                                        <p className='flex items-center gap-2 opacity-60 text-sm'><CalendarMonthOutlined className='!text-lg' /> <span>11.2024</span></p>
                                        <h6 className='font-medium text-text1 text-lg xl:text-xl line-clamp-2 my-1.5'>Service-Driven Innovation</h6>
                                        <p className='text-sm opacity-70 line-clamp-2'>Anna Skigin, Founder and CEO of Frank Porter discusses how can leaders transform industries and business through personalised, hands-on communication and service. &nbsp; Leaders set the tone for change. Effective leaders engage directly with their</p>
                                    </div>
                                </div>
                                <div className='group relative'>
                                    <Link to="/blog/1" className='absolute w-full h-full top-0 left-0 z-10'></Link>
                                    <div className='h-[220px] w-full overflow-hidden'>
                                        <img src={img4} className='w-full h-full object-cover object-center group-hover:scale-110 duration-300' />
                                    </div>
                                    <div className='mt-3'>
                                        <p className='flex items-center gap-2 opacity-60 text-sm'><CalendarMonthOutlined className='!text-lg' /> <span>11.2024</span></p>
                                        <h6 className='font-medium text-text1 text-lg xl:text-xl line-clamp-2 my-1.5'>Service-Driven Innovation</h6>
                                        <p className='text-sm opacity-70 line-clamp-2'>Anna Skigin, Founder and CEO of Frank Porter discusses how can leaders transform industries and business through personalised, hands-on communication and service. &nbsp; Leaders set the tone for change. Effective leaders engage directly with their</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogDetails


import { Link } from 'react-router-dom'
import icon27 from "../../assets/icons/icon27.png";
import icon28 from "../../assets/icons/icon28.png";
import icon29 from "../../assets/icons/icon29.png";
import icon30 from "../../assets/icons/icon30.png";
import icon31 from "../../assets/icons/icon31.png";
import icon5 from "../../assets/icons/icon5.png";
import bg1 from "../../assets/images/bg1.jpg";
import img8 from "../../assets/images/img8.png";
import map from "../../assets/images/map.png";
import { Select } from '@mantine/core';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';

const ContactUs = () => {
    return (
        <>

            {/* banner */}
            <div
                className="pt-28 pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
                style={{
                    backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
                }}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-center flex-col gap-4">
                        <h2 className="text-[42px] sm:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
                            Get in touch
                        </h2>
                        <p className="flex items-center gap-4 text-[#4C360E]">
                            <span className="">
                                <Link to="/" className="hover:underline">Home</Link>
                            </span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span>Contact</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='pt-14 md:pt-16 lg:pt-20'>
                <div className="container mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className='py-4 sm:py-7 px-6 bg-white rounded-xl shadow-[0px_0px_20px_0px_#0000001A]'>
                            <div className="flex flex-col h-full">
                                <div className='w-20 h-20 rounded-full flex items-center justify-center bg-[#fff6e7]'>
                                    <img src={icon28} className='w-8' />
                                </div>
                                <div className='mt-4'>
                                    <p className='text-xl font-medium text-black mb-2'>Email Address</p>
                                    <ul className='flex flex-col gap-1'>
                                        <li className='text-[#AEAEAE] md:text-lg font-montserrat'>dummy@email.com</li>
                                        <li className='text-[#AEAEAE] md:text-lg font-montserrat'>Support@property.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='py-4 sm:py-7 px-6 bg-white rounded-xl shadow-[0px_0px_20px_0px_#0000001A]'>
                            <div className="flex flex-col h-full">
                                <div className='w-20 h-20 rounded-full flex items-center justify-center bg-[#fff6e7]'>
                                    <img src={icon29} className='w-8' />
                                </div>
                                <div className='mt-4'>
                                    <p className='text-xl font-medium text-black mb-2'>Phone Number</p>
                                    <ul className='flex flex-col gap-1'>
                                        <li className='text-[#AEAEAE] md:text-lg font-montserrat'>+91 987 987 6543</li>
                                        <li className='text-[#AEAEAE] md:text-lg font-montserrat'>+(1) 123 456 7890</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='py-4 sm:py-7 px-6 bg-white rounded-xl shadow-[0px_0px_20px_0px_#0000001A]'>
                            <div className="flex flex-col h-full">
                                <div className='w-20 h-20 rounded-full flex items-center justify-center bg-[#fff6e7]'>
                                    <img src={icon30} className='w-8' />
                                </div>
                                <div className='mt-4'>
                                    <p className='text-xl font-medium text-black mb-2'>Our Loaction</p>
                                    <ul className='flex flex-col gap-1'>
                                        <li className='text-[#AEAEAE] md:text-lg font-montserrat'>Fardan Building, 4 Sheikh Zayed Rd, Business Bay, Dubai, United Arab Emirates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-14 md:py-16 lg:py-20'>
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <div className='w-full lg:w-3/5 lg:pr-16'>
                            <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:[42px] font-semibold text-[#1F1607]">
                                Send Us Message
                            </h4>
                            <div className='mt-10 contact_us'>
                                <form action="">
                                    <div className='grid xs:grid-cols-2 gap-4'>
                                        <div className='bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12'>
                                            <input type="text" className='w-full p-0 border-none focus:ring-0 bg-transparent' placeholder='Full Name' />
                                            <span><img src={icon31} className='w-4' /></span>
                                        </div>
                                        <div className='bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12'>
                                            <input type="text" className='w-full p-0 border-none focus:ring-0 bg-transparent' placeholder='Email Address' />
                                            <span><img src={icon28} className='w-4' /></span>
                                        </div>
                                        <div className='bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12'>
                                            <input type="text" className='w-full p-0 border-none focus:ring-0 bg-transparent' placeholder='Phone Number' />
                                            <span><img src={icon29} className='w-4' /></span>
                                        </div>
                                        <div className=''>
                                            <Select
                                                placeholder='Subject'
                                                data={['React', 'Angular', 'Vue', 'Svelte']}
                                                className='bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12'
                                                rightSection={<KeyboardArrowDownOutlined className='text-[#DCC397]' />}
                                            />

                                        </div>
                                        <div className=' xs:col-span-2'>
                                            <textarea className='bg-[#fef4e3] rounded-xl w-full px-6 py-3 border-none focus:ring-0 min-h-32' placeholder='Write Your Message'>
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <button className='btn1 flex items-center  gap-2'>Send Message <span><img src={icon5} className='w-4' /></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='lg:block hidden w-2/5 pl-6 lg:pl-0'>
                            <img src={img8} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* map */}
            <div>
                <div>
                    <img src={map} alt="" />
                </div>
            </div>
        </>
    )
}

export default ContactUs

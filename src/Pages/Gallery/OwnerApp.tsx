import { Link } from "react-router-dom"
import { icon27 } from "../../assets/icons/index.ts";
import { bg1, image30, image31, interiorFaq } from "../../assets/images/index.ts";
import { CheckCircle } from "@mui/icons-material";
import { Suspense } from "react";
import FAQ from "../../Components/Home/FAQ.tsx";

const OwnerApp = () => {
    return (
        <div>
            <div
                className="pt-20 sm:pt-28 pb-10 sm:pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
                style={{
                    backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
                }}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-center flex-col gap-4">
                        <h2 className="text-4xl sm:text-[42px] md:text-5xl font-bold text-center text-[#1F1607] font-light] ">
                            Owner App
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
                            <span className="inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
                                Owner App
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-14 md:py-16 relative">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                            Owner App
                        </h4>
                        <p className="mt-3  text-[#60410C]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150">
                            Start your AIRBNB journey, and view your property stats on the go.
                        </p>
                        <button className="btn1 mt-5">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFFBF4]">
                <div className="container mx-auto">
                    <div className="py-14 sm:py-16 md:py-20 relative">
                        <div className="lg:max-w-[50%] xl:max-w-[60%]">
                            <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] xl:leading-[50px] font-semibold text-text1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                                Your Bookings Anytime, Anywhere
                            </h4>
                            <div className="mt-4">
                                <h6 className="text-lg md:text-xl font-medium text-[#1F1607]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                                    Calendar with Bookings Overview, Number of Stays, Booked Nights and Availability
                                </h6>
                                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150" className="text-[#4D5461] mt-3">Our Owner App provides you full transparency about your property’s bookings – in real time. You can check the calendar, current and future occupancy, access your property details and view your monthly statements</p>
                            </div>
                            <div className="lg:hidden">
                                <img src={image30} className="w-full max-w-[500px] mx-auto" />
                            </div>
                            <div className="mt-5">
                                <ul className="grid xs:grid-cols-2 xl:grid-cols-3 gap-5">
                                    <li className="flex items-start gap-2"><span><CheckCircle /></span>View your Live Calendar</li>
                                    <li className="flex items-start gap-2"><span><CheckCircle /></span>Block Personal Stays at your property</li>
                                    <li className="flex items-start gap-2"><span><CheckCircle /></span>Contact the Client Support team</li>
                                </ul>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 hidden lg:block">
                            <img src={image30} className="w-full max-w-[500px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-14 md:pt-16 lg:pt-20">
                <div className="container mx-auto">
                    <div className="lg:pb-16 relative">
                        <div className="lg:max-w-[50%] xl:max-w-[60%] ml-auto">
                            <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] xl:leading-[50px] font-semibold text-text1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                                Manage your Property your way
                            </h4>
                            <div className="mt-4">
                                <h6 className="text-lg md:text-xl font-medium text-[#1F1607]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                                    We provide FULL flexibility straight from your phone
                                </h6>
                                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150" className="text-[#4D5461] mt-3">Book your personal Owner Stay by blocking dates directly on the calendar. For any support, you can contact us via the Support Form.</p>
                            </div>
                            <div className="lg:hidden">
                                <img src={image31} className="w-full max-w-[500px] mx-auto" />
                            </div>
                            <div className="mt-5">
                                <ul className="grid xs:grid-cols-2 xl:grid-cols-3 gap-5">
                                    <li className="flex items-start gap-2"><span><CheckCircle /></span>Quick preview to Your properties</li>
                                    <li className="flex items-start gap-2"><span><CheckCircle /></span>View your Monthly Statements</li>
                                    <li className="flex items-start gap-2"><span><CheckCircle /></span>Dynamically generated statistics</li>
                                </ul>
                            </div>
                        </div>
                        <div className="absolute left-0 bottom-0 hidden lg:block">
                            <img src={image31} className="w-full max-w-[450px]" />
                        </div>
                    </div>
                </div>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <FAQ title="Owner App FAQs" img_url={interiorFaq} />
            </Suspense>
        </div>
    )
}

export default OwnerApp
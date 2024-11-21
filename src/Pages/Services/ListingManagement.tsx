import { Link } from 'react-router-dom'
import icon27 from "../../assets/icons/icon27.png";
import bg1 from "../../assets/images/bg1.jpg";
import img11 from "../../assets/images/img11.png";
import FAQ from '../../Components/Home/FAQ';
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";

const ListingManagement = () => {
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
                        <h2 className="text-4xl sm:text-[42px] md:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
                            Listing Management
                        </h2>
                        <p className="flex items-center gap-4 text-[#4C360E]">
                            <span className="">
                                <Link to="/" className="hover:underline">Home</Link>
                            </span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span>Service</span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span>Listing Management</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='pt-14 md:pt-16 lg:pt-20 md:pb-20 relative'>
                <div>
                    <div className="container mx-auto">
                        <div className="md:flex ">
                            <div className='md:w-2/5 order-1 md:order-2'>
                                <div className='md:absolute right-0 max-w-[450px] md:max-w-full md:w-[calc(45%)] lg:w-[calc(40%)] md:ml-auto rounded-2xl md:rounded-none md:rounded-bl-[100px] overflow-hidden top-0 h-[60%] 2xl:h-full'>
                                    <img src={img11} className='w-full h-full object-cover object-center' />
                                </div>
                            </div>
                            <div className="md:w-1/2 lg:w-[55%] order-2 md:order-1 mt-8 md:mt-0">
                                <div>
                                    <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                                        Listing Management
                                    </h4>
                                    <p className='mt-3 font-montserrat md:text-lg text-[#60410C]'>The listings team creates, lists, and updates your property listing on various platforms where we advertise. This includes taking and editing top-quality photos and creating property-specific descriptions to make your home stand out among the rest. Once everything is live, the team continues to monitor all platforms and make updates when necessary.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative pt-16 lg:pt-0 lg:mt-12 overflow-hidden'>
                    <div className="container mx-auto">
                        <div className='relative py-8  before:absolute before:bg-[#fff6e7] before:w-[calc(100%_+_2000px)] before:-left-10 before:rounded-l-[40px] before:top-0 before:h-full before:-z-10'>
                            <div className="lg:w-1/2">
                                <div>
                                    <h4 className="text-3xl sm:text-[34px] xl:text-[36px] font-semibold text-text1 text-center md:text-left">
                                        Where we list
                                    </h4>
                                </div>
                                <div className="mt-12 space-y-8">
                                    <div className="grid grid-cols-3 lg:flex flex-wrap gap-8 items-start justify-start max-w-[900px] mx-auto">
                                        <img
                                            src={logo1}
                                            className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
                                        />
                                        <img
                                            src={logo2}
                                            className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
                                        />
                                        <img
                                            src={logo3}
                                            className="max-h-[40px] lg:h-[60px] w-auto mx-auto"
                                        />
                                        <img
                                            src={logo4}
                                            className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
                                        />
                                        <img
                                            src={logo5}
                                            className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
                                        />
                                        <img
                                            src={logo6}
                                            className="max-h-[40px] lg:h-[48px] w-auto mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-14 md:py-16 lg:py-20'>
                <div className="container mx-auto">
                    <div>
                        <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                            What’s Included
                        </h4>
                        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>Photography and Editing</h6>
                                <p className='text-[#4D5461] md:text-lg mt-3'>Our in-house photographers take beautiful photos of the property, including all views and building amenities. The photos are edited for the best flow, emphasising the most important features of the property.</p>
                            </div>
                            <div>
                                <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>Property Descriptions</h6>
                                <p className='text-[#4D5461] md:text-lg mt-3'>The listings team writes catchy and unique Airbnb property descriptions, along with any area-specific references. Then the team lists the property on the multiple advertising channels, editing them to suit the channel used.</p>
                            </div>
                            <div>
                                <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>Updating Listings</h6>
                                <p className='text-[#4D5461] md:text-lg mt-3'>The listings team continuously checks properties and the channels to ensure information is correct throughout. They also update listings if required, in the event of pool closures, works in buildings or property upgrades - as an example. This ensures guests are aware of any new information. The team is also responsible for responding to guest reviews.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#1F1607] py-16'>
                <div className='container mx-auto'>
                    <div className="flex flex-col md:flex-row  gap-3 md:gap-20 text-center md:text-left">
                        <h4 className='text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-white text-nowrap'>
                            Pricing Your Listing
                        </h4>
                        <p className='text-[#DCC397] md:text-lg'>Pricing is one of the most important aspects of property management. We use a combination of algorithms and manual changes to ensure your property is always well-priced. Seasonality, supply, holidays, world events – all these things play an important role in the price per night. Our in-house pricing specialist looks at this daily and updates prices when needed.
                        </p>
                    </div>
                    <div className='text-center mt-8'>
                        <button className="btn1">
                            Contact us
                        </button>
                    </div>
                </div>
            </div>

            <FAQ />
        </>
    )
}

export default ListingManagement

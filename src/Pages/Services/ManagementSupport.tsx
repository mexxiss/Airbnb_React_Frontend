import { Link } from 'react-router-dom'
import icon27 from "../../assets/icons/icon27.png";
import bg1 from "../../assets/images/bg1.jpg";
import img9 from "../../assets/images/img9.png";
import FAQ from '../../Components/Home/FAQ';
const ManagementSupport = () => {
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
                            Management Support
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
                            <span>Management Support</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='pt-14 md:pt-16 lg:pt-20 md:pb-36 relative'>
                <div className="container mx-auto">
                    <div className="md:flex ">
                        <div className='md:w-2/5 order-1 md:order-2'>
                            <div className='md:absolute right-0 max-w-[450px] md:max-w-full md:w-[calc(45%)] lg:w-[calc(45%)] md:ml-auto rounded-2xl md:rounded-none md:rounded-bl-[100px] overflow-hidden top-0 h-full'>
                                <img src={img9} className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className="md:w-1/2 lg:w-[50%] order-2 md:order-1 mt-8 md:mt-0">
                            <div>
                                <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                                    Property Management Support Teams
                                </h4>
                                <p className='mt-3 font-montserrat md:text-lg text-[#60410C]'>Property management is a big job, so we’ve separated our service into teams for better efficiency and follow up. This ensures our owners, and our guests get the maximum support. Learn all about our property management support teams here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative pt-16 lg:pt-0 md:-mt-24 lg:-mt-12 overflow-hidden'>
                <div className="container mx-auto">
                    <div className='relative py-12  before:absolute before:bg-[#fff6e7] before:w-[calc(100%_+_2000px)] before:-left-10 before:rounded-l-[40px] before:top-0 before:h-full before:-z-10'>

                        <div className="mt-8 grid sm:grid-cols-2 gap-8">
                            <div>
                                <h6 className='text-xl md:text-2xl lg:text-3xl font-medium text-[#1F1607]'>Guest Support Team</h6>
                                <p className='text-[#4D5461] mt-3 leading-6'>The Guest Support Team deals with all guest-related matters – from the initial inquiry to the physical check-in, as well as support throughout the stay. The team is 24/7 and speaks multiple languages, ensuring the absolute best support for our guests.</p>
                            </div>
                            <div>
                                <h6 className='text-xl md:text-2xl lg:text-3xl font-medium text-[#1F1607]'>Admin Support Team</h6>
                                <p className='text-[#4D5461] mt-3 leading-6'>The Admin Support Team handles all the airbnb requirements and government compliance, and the back end of the business including building access, permits, DET check-ins and check-outs, security deposits, platform issues etc.</p>
                            </div>
                            <div>
                                <h6 className='text-xl md:text-2xl lg:text-3xl font-medium text-[#1F1607]'>Client Support Team</h6>
                                <p className='text-[#4D5461] mt-3 leading-6'>The Client Support Team handles all host-related matters. Whether it’s helping with an Owner Stay or explaining a Monthly Statement – the team is available to answer any questions. This team is also responsible for renewing permits, and ensuring our KYC is up to date.</p>
                            </div>
                            <div>
                                <h6 className='text-xl md:text-2xl lg:text-3xl font-medium text-[#1F1607]'>Revenue Support Team</h6>
                                <p className='text-[#4D5461] mt-3 leading-6'>The Revenue Support Team is involved in the revenue management of the property – which means ensuring the pricing is correct throughout the year and our owners make the most money. The team amends pricing based on demand and supply – using a combination of algorithms and manual adjustments. We also price differently depending on the channel used (ex. Airbnb versus Booking.com). Read more about our pricing strategies here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FAQ />
        </>
    )
}

export default ManagementSupport

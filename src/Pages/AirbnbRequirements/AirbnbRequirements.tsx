import { Link } from 'react-router-dom'
import { icon27 } from "../../assets/icons/index.ts";
import { bg1, img10, img11, img12, interiorFaq } from "../../assets/images/index.ts";
import FAQ from '../../Components/Home/FAQ.tsx';
import { Suspense } from 'react';

const AirbnbRequirements = () => {
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
                            Airbnb requirements
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
                            <span className=' inline-block max-w-[120px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis'>Airbnb requirements and fees Dubai (DET)</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-14 md:pt-16 lg:pt-20 relative">
                <div className="container mx-auto">
                    <div>
                        <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                            Airbnb Dubai requirements and fees (DET)
                        </h4>
                        <p className="mt-3  text-[#60410C]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150">
                            Once upon a time, Dubai’s short term rental industry was run entirely by big-name hoteliers — but this is no longer the case. Thanks to the popularity of Airbnb and similar platforms, homeowners and tenants are now able to apply for a holiday home license to list their properties for lucrative guest stays.
                        </p>
                        <p className="mt-3  text-[#60410C]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150">
                            However, this is not a simple process: it involves gathering many required documents, registering with the DET and paying monthly fees. Here’s what you need to do to meet the legal requirements and list on Airbnb in Dubai.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-14 md:pt-16 lg:pt-20">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 3xl:gap-14">
                        <div>
                            <img
                                src={img10}
                                className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] max-h-[400px] h-full object-cover max-w-[600px] lg:max-w-full w-full"
                            />
                        </div>
                        <div className="">
                            <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50">
                                What is the DET?
                            </h4>
                            <div className="text-[#4D5461 mt-3 flex flex-col gap-4">
                                <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">The DET (formerly the DTCM) is the Department of Economy and Tourism in Dubai, which acts as the principal authority for short-term property rental in the city. This body is responsible for the provision of all event, holiday home and tour guide permits, as well as hotel classification.</p>
                                <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">In order to lease your property as a holiday home, you’ll first need to provide all of your important documentation to the DET for approval. Permits are issued on an annual basis and will need to be renewed each year.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="pt-14 md:pt-16 lg:pt-20">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 3xl:gap-14">
                        <div className='order-1 lg:order-2'>
                            <img
                                src={img11}
                                className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] h-full object-cover max-w-[600px] lg:max-w-full w-full"
                            />
                        </div>
                        <div className='order-2 lg:order-1'>
                            <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50">
                                How to get your holiday home license in Dubai for Airbnb
                            </h4>
                            <ul className="mt-6 flex flex-col gap-6">
                                <li>
                                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">To start leasing your property, you’ll need a holiday home permit. This is the certification that states that your property meets the technical specifications and legal requirements for short-term rental.</p>
                                </li>
                                <li>
                                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">To start this process, the host looking to lease (this being the holiday home operator, homeowner or tenant) needs to submit an application to the DET for processing and approval.</p>
                                </li>
                                <li>
                                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Firstly, you should register for an account on the portal. Next, add your unit (property) and provide the required information — such as the unit type, number of bedrooms, and area. Then, supply copies of the required documents. These include:</p>
                                    <div className="text-[#4D5461 mt-3">
                                        <ul className="mt-3 list-disc pl-6 flex flex-col gap-1">
                                            <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">The title deed or sales purchase agreement and payment completion certificate</li>
                                            <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">The landlord’s signed passport or Emirates ID</li>
                                            <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">The property management letter</li>
                                            <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">A recent Dubai Electricity & Water Authority (DEWA) bill</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

            <div className="pt-14 md:pt-16 lg:pt-20">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 3xl:gap-14">
                        <div className=''>
                            <img
                                src={img12}
                                className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] h-full object-cover max-w-[600px] lg:max-w-full w-full"
                            />
                        </div>
                        <div className=''>
                            <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50">
                                How to keep your listing fully compliant
                            </h4>
                            <ul className="mt-6 flex flex-col gap-6">
                                <li>
                                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">As a permit-holder, it is your responsibility to ensure that your property follows Dubai’s rules and regulations for short-term rentals, subject to regular inspections from the DET.</p>
                                </li>
                                <li>
                                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">To keep your listing compliant, your property must satisfy the technical requirements and be equipped with the fittings stipulated by the Holiday Home Regulation Guide. Each month, Tourism Dirham fees must be paid to the DET based on your property’s occupancy, and guest passport copies should be submitted at check-in.</p>
                                </li>
                                <li>
                                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">To keep your listing compliant, your property must satisfy the technical requirements and be equipped with the fittings stipulated by the Holiday Home Regulation Guide. Each month, Tourism Dirham fees must be paid to the DET based on your property’s occupancy, and guest passport copies should be submitted at check-in.</p>
                                </li>
                                <li>
                                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">For an accurate estimate of how much revenue your property could generate, we recommend using our calculator.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

            <Suspense fallback={<div>Loading...</div>}>
                <FAQ title="Holiday Home License FAQs" img_url={interiorFaq} />
            </Suspense>
        </>
    )
}

export default AirbnbRequirements

import { Link } from "react-router-dom";
import { icon27 } from "../../assets/icons/index.ts";
import { bg1, img10, img11, img1, img2, img3, img12 } from "../../assets/images/index.ts";
import { Suspense } from "react";
import FAQ from "../../Components/Home/FAQ.tsx";

const AirbnbDubai = () => {
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
                            Airbnb Dubai
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
                            <span>Airbnb Dubai</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-14 md:pt-16 lg:pt-20 relative">
                <div className="container mx-auto">
                    <div>
                        <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                            Airbnb Dubai
                        </h4>
                        <p className="mt-3  text-[#60410C]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">For a few years, Airbnb felt like a delightful secret for people letting out holiday homes around the world. Those using the platform enjoyed excellent returns, easy bookings, high occupancy, and a feeling of ‘insider’ knowledge about this short-term rental platform. But it wouldn’t last forever, and now the secret’s out! Worldwide, Airbnb usage and hosting is growing in every market, and for every type of holiday home rental.
                        </p>
                        <p className="mt-3  text-[#60410C]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">Dubai is no exception to this trend. More and more guests are discovering that Airbnb is the best way to stay in Dubai — holidaymakers get to enjoy exclusive properties, a variety of amenities, personal touches, and better rates than traditional hotel stays. Property owners in Dubai are happy to rent out their house or apartment to guests from around the world who treat their property with the care and appreciation that they would their own home.
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
                                Why are investors flocking to Dubai to own Airbnb properties?
                            </h4>
                            <ul className="text-[#4D5461 mt-6 flex flex-col gap-6">
                                <li>
                                    <h6 className="text-[#1F1607] text-xl font-medium" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                        Dubai is a top holiday location
                                    </h6>
                                    <p className="text-[#4D5461] mt-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Dubai is an incredibly popular holiday location — some say the world’s most popular. With its luxurious lifestyle, abundance of activities, warm weather and beautiful beaches, the city welcomes around 15 million tourists a year. Consequently, there’s massive demand for places to stay in Dubai, making Airbnb properties all the rage.</p>
                                </li>
                                <li>
                                    <h6 className="text-[#1F1607] text-xl font-medium" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                        Dubai is hugely profitable
                                    </h6>
                                    <p className="text-[#4D5461] mt-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Dubai has been named the world’s most profitable city for an Airbnb landlord, with those based near the Burj Khalifa earning an average of £930 ($1,150) per night, or £339,450 per year. As a result, they stand to make enormous profits over time.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

            <div className="pt-14 md:pt-16 lg:pt-20">
                <div className="container mx-auto">
                    <h4 className="text-center text-2xl xs:text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        Why are investors flocking to Dubai to own Airbnb properties?
                    </h4>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 3xl:gap-x-10 gap-y-6 md:gap-y-12 mt-8">
                        <div className="">
                            <h6 className="text-[#1F1607] text-xl sm:text-2xl font-medium" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                Dubai Marina and JBR
                            </h6>
                            <p className="text-[#4D5461] mt-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Dubai Marina and JBR (Jumeirah Beach Residences) is one of the city’s most sought-after locations. Featuring a mile-long beach, a boulevard stacked with restaurants, bars and shops, and a marina packed with luxury yachts, all in the backdrop of Dubai’s futuristic skyscrapers, the area is the ideal location for an Airbnb property.</p>
                        </div>
                        <div className="">
                            <h6 className="text-[#1F1607] text-xl sm:text-2xl font-medium" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                Dubai Sports City
                            </h6>
                            <p className="text-[#4D5461] mt-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Home to the Manchester United Soccer School facility, the ICC's Global Cricket Academy, the inaugural World Hockey Academy, a David Lloyd Tennis Academy, and the Els Club championship golf course, Dubai Sports City is a bustling location popular with fitness fanatics. With a mix of villa compounds and apartment complexes and plenty of amenities close by, it’s no wonder the area is attractive for Airbnb hosts.</p>
                        </div>
                        <div className="">
                            <h6 className="text-[#1F1607] text-xl sm:text-2xl font-medium" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                Dubai Motor City
                            </h6>
                            <p className="text-[#4D5461] mt-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Situated opposite is Dubai Motor City, a motor sport themed property development featuring a 3.3 mile FIA certified race track and F1-X Dubai, a Formula One theme park. The region is also home to residential buildings and commercial properties, as well as various other amenities, from shops and restaurants, to healthcare centres and educational institutions.</p>
                        </div>
                        <div className="">
                            <h6 className="text-[#1F1607] text-xl sm:text-2xl font-medium" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                Downtown Dubai
                            </h6>
                            <p className="text-[#4D5461] mt-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Downtown Dubai covers an area of 0.77 square miles and is home to some of the city’s most famous landmarks, including the Burj Khalifa, the Dubai Mall and the Dubai Fountain. As such, it’s an immensely popular location for Airbnb properties, particularly considering how profitable being near to the Burj Khalifa is.</p>
                        </div>
                        <div className="">
                            <h6 className="text-[#1F1607] text-xl sm:text-2xl font-medium" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                Dubai International Financial Centre
                            </h6>
                            <p className="text-[#4D5461] mt-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Located near Downtown is the Dubai International Financial Centre (DIFC), a special economic zone that’s become a financial hub for the Middle East, Africa and South Asia (MEASA) markets. The region not only houses hundreds of financial institutions, but boasts retail outlets, restaurants, residential buildings, public green spaces, hotels and art galleries too.</p>
                        </div>
                        <div className="">
                            <h6 className="text-[#1F1607] text-xl sm:text-2xl font-medium" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                Business Bay
                            </h6>
                            <p className="text-[#4D5461] mt-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Business Bay is a trendy commercial and residential hub situated next door to Dubai Downtown. Offering a respite from the city’s biggest tourist hot spot, the region is still bustling in its own right, with the amenities you need to live a fulfilling city life. It’s also close by to City Walk, a region home to hundreds of exclusive shops, restaurants and leisure activities.</p>
                        </div>
                        <div className="">
                            <h6 className="text-[#1F1607] text-xl sm:text-2xl font-medium" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                JVT and JRC
                            </h6>
                            <p className="text-[#4D5461] mt-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">Dubai’s JVT (Jumeirah Village Triangle) and JRC (Jumeirah Village Circle) are two residential districts located next to each other, both of which are shaped like their names. The communities are among the most tranquil in Dubai, making them ideal for families. However, they’re still within close proximity to attractions like Dubai Marina, Sports City and Motor City, making JVT and JRC prime Airbnb spots.</p>
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
                                className="rounded-tr-[30px] rounded-bl-[30px] sm:rounded-tr-[60px] sm:rounded-bl-[60px]  h-full object-cover max-w-[600px] lg:max-w-full w-full"
                            />
                        </div>
                        <div className='order-2 lg:order-1'>
                            <h4 className=" text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                                Airbnb Dubai Property Management
                            </h4>
                            <div className="text-[#4D5461 mt-3 flex flex-col gap-4">
                                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150">Here at Frank Porter, we assist our clients in listing, renting and hosting their properties. With our Airbnb management services, you can sit back while we take care of everything for you. We not only help you find tenants by creating your profile and capturing aesthetic pictures of your property, but we also manage the prices, promotions and listings to help you maximise your revenue. We’ll also help you cater to your guests’ needs by renovating and cleaning your property.</p>
                                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150">Frank Porter is a name for quality and trust. We strive to offer credible services to our clients by providing reliability and dependability. Our team is focused on meeting the growing demand for complete expert services in Airbnb management, hosting and short term rental property management.</p>
                                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150">Renting local residences as holiday accommodation for short stays is a great option for both tourists and residents, with locals earning significantly by using their property as a holiday home. If this is what interests you, then connect with us at Frank Porter to make short term rental property management easier and more effective. Feel free to get in touch if you have any questions..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="pt-14 md:pt-16 lg:pt-20">
                <div className="container mx-auto">
                    <h4 className="text-center text-2xl xs:text-3xl sm:text-[34px] xl:text-[36px] sm:leading-[50px] font-semibold text-text1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        Some of the most amazing properties we manage in Dubai
                    </h4>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6 md:mt-10">
                        <div>
                            <img src={img1} className="w-full max-h-[300px] h-full object-cover" />
                        </div>
                        <div>
                            <img src={img2} className="w-full max-h-[300px] h-full object-cover" />
                        </div>
                        <div>
                            <img src={img3} className="w-full max-h-[300px] h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <FAQ title="Cleaning & Maintenance FAQs" img_url={img12} />
            </Suspense>
        </>
    )
}

export default AirbnbDubai

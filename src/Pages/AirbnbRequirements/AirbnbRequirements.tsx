import { Link } from 'react-router-dom'
import { icon27 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";

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

        </>
    )
}

export default AirbnbRequirements

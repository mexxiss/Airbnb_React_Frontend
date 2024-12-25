import { Link } from 'react-router-dom'
import { icon27 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";
import AC_POSTER from "../../assets/images/AC_POSTER.png";
import STOVE_POSTER from "../../assets/images/STOVE_POSTER.png";
import HEATER_POSTER from "../../assets/images/HEATER_POSTER.png";
import LOCK_POSTER from "../../assets/images/LOCK_POSTER.png";
import AC from "../../assets/videos/AC.mp4"
import Heater from "../../assets/videos/Heater.mp4"
import Stove from "../../assets/videos/Stove.mp4"
import Lock from "../../assets/videos/Lock.mp4"

const HowToVideos = () => {
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
                            How to Videos
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
                            <span>How to Videos</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-10 md:pt-16">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center flex-col">
                        <h3 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-[#1F1607] font-light] leading-[50px] 2xl:leading-[58px]" data-aos="fade-up" data-aos-duration="1000" >
                            Settle In: Easy Tutorials
                        </h3>
                        <p className="max-w-[950px] mx-auto text-[#60410C] lg:text-lg  text-center" data-aos="fade-up" data-aos-duration="1000" >
                            Welcome to your guide on using the appliances and features in your Frank Porter property. These videos provide all the essential information you need for a seamless experience.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-10 md:py-16 lg:py-20">
                <div className="container mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-5">
                        <div>
                            <h6 className='text-xl md:text-2xl text-text1 uppercase text-center'>AC</h6>
                            <div className='aspect-video mt-2'>
                                <video
                                    src={AC}
                                    controls
                                    poster={AC_POSTER}
                                    className="w-full h-full shadow-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <h6 className='text-xl md:text-2xl text-text1 uppercase text-center'>Heater</h6>
                            <div className='aspect-video mt-2'>
                                <video
                                    src={Heater}
                                    controls
                                    poster={HEATER_POSTER}
                                    className="w-full h-full shadow-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <h6 className='text-xl md:text-2xl text-text1 uppercase text-center'>Stove</h6>
                            <div className='aspect-video mt-2'>
                                <video
                                    src={Stove}
                                    controls
                                    poster={STOVE_POSTER}
                                    className="w-full h-full shadow-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <h6 className='text-xl md:text-2xl text-text1 uppercase text-center'>Lock</h6>
                            <div className='aspect-video mt-2'>
                                <video
                                    src={Lock}
                                    controls
                                    poster={LOCK_POSTER}
                                    className="w-full h-full shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowToVideos

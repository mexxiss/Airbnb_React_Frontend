import React from 'react'
import { Link } from 'react-router-dom'
import icon27 from "../../assets/icons/icon27.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import bg1 from "../../assets/images/bg1.jpg";
import FAQ from '../../Components/Home/FAQ';
import WeList from '../../Components/Home/WeList';
import ShortTerm from '../../Components/Home/ShortTerm';
import ReviewSec from '../../Components/Home/ReviewSec';
import BrandFeature from '../../Components/BrandFeature/BrandFeature';

const AboutUs = () => {
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
                        <h2 className="text-[42px] sm:text-5xl xl:text-[60px] font-semibold text-center text-[#1F1607] font-light] ">
                            About Us
                        </h2>
                        <p className="flex items-center gap-4 text-[#4C360E]">
                            <span className="">
                                <Link to="/">Home</Link>
                            </span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span>About Us</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* about us section */}
            <div className='pt-14 md:pt-16 lg:pt-20'>
                <div className="container mx-auto">
                    <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:[42px] font-semibold text-[#1F1607]">
                        We connect building with people
                    </h4>
                    <p className='text-[#60410C] mt-3'>It’s no coincidence that the name means honest concierge – they were born to do this. They make you feel comfortable renting out your home, and make the experience as pleasant as possible.</p>
                    <p className='text-[#60410C] mt-2'>He is a globetrotter – having traveled and lived all over the world. Fluent in 15 languages, including English, Arabic, Swedish, French, Russian, Spanish, Italian, Turkish, Urdu, German, Hindi, Filipino, Swahili, Afrikaans, and Polish – he understands both your needs and your guests’ needs. And most importantly, he is here to help you make money.</p>
                    <div className="mt-10 md:mt-16">
                        <div className='grid grid-cols-3 gap-2 sm:gap-4'>
                            <img src={img1} className="h-full object-cover object-center" />
                            <img src={img2} className="h-full object-cover object-center" />
                            <img src={img3} className="h-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>

            <BrandFeature />
            <ReviewSec />
            <ShortTerm />
            <WeList />
            <FAQ />
        </>
    )
}

export default AboutUs

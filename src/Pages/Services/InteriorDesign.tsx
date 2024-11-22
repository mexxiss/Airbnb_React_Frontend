import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { icon27 } from '../../assets/icons/index.ts';
import { bg1, img10 } from '../../assets/images/index.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

const FAQ = lazy(() => import('../../Components/Home/FAQ'));

const InteriorDesign = () => {
    const homeContent = useSelector((state: RootState) => state.homeContent.data);

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
                        <h2 className="text-4xl sm:text-[42px] md:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
                            Interior Design
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
                            <span>Interior Design</span>
                        </p>
                    </div>
                </div>
            </div>


            <div className='pt-14 md:pt-16 lg:pt-20 md:pb-28 relative'>
                <div className="container mx-auto">
                    <div className="md:flex ">
                        <div className='md:w-2/5 order-1 md:order-2'>
                            <div className='md:absolute right-0 max-w-[450px] md:max-w-full md:w-[calc(45%)] lg:w-[calc(40%)] md:ml-auto rounded-2xl md:rounded-none md:rounded-bl-[100px] overflow-hidden top-0 h-full'>
                                <img src={img10} className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className="md:w-1/2 lg:w-[55%] order-2 md:order-1 mt-8 md:mt-0">
                            <div>
                                <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                                    Airbnb Interior Design
                                </h4>
                                <p className='mt-3 font-montserrat md:text-lg text-[#60410C]'>{homeContent?.interior_design_page?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative pt-16 lg:pt-0 md:-mt-24 lg:-mt-14 overflow-hidden'>
                <div className="container mx-auto">
                    <div className='relative py-12  before:absolute before:bg-[#fff6e7] before:w-[calc(100%_+_2000px)] before:-left-10 before:rounded-l-[40px] before:top-0 before:h-full before:-z-10'>
                        <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                            What’s Included
                        </h4>
                        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {homeContent?.interior_design_page?.what_inclued.map((item, index) => (
                                <div key={index}>
                                    <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>{item.title}</h6>
                                    <div className='text-[#4D5461] md:text-lg mt-3'>
                                        <p>{item.description}</p>
                                        <ul className='mt-3 list-disc pl-6 flex flex-col gap-1'>
                                            {item?.others?.map((other, key) => (
                                                <li key={key}> {other}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-14 md:py-16 lg:py-20">
                <div className="container mx-auto">
                    <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                        How it works?
                    </h4>
                    <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {homeContent?.interior_design_page?.how_it_works.map((item, index) => (
                            <li key={index}>
                                <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>{index+1}. {item.title}</h6>
                                <p className='text-[#4D5461] mt-3 leading-6'>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='bg-[#1F1607] py-16'>
                <div className='container mx-auto'>
                    <div className="flex flex-col md:flex-row  gap-3 md:gap-20 text-center md:text-left">
                        <h4 className='text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-white text-nowrap'>
                            Packages & Price
                        </h4>
                        <p className='text-[#DCC397] md:text-lg'>The Interior Design team works with set packages to ensure projects have the highest turnaround. Our packages include everything except large appliances or any specific specialised items.</p>
                    </div>
                    <div className='text-center mt-8'>
                        <button className="btn1">
                            Contact us
                        </button>
                    </div>
                </div>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <FAQ title='Interior Design FAQs' />
            </Suspense>
        </div>
    )
}

export default InteriorDesign

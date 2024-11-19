import { Link } from 'react-router-dom'
import icon27 from "../../assets/icons/icon27.png";
import bg1 from "../../assets/images/bg1.jpg";
import img10 from "../../assets/images/img10.png";
import FAQ from '../../Components/Home/FAQ';

const InteriorDesign = () => {
    return (
        <div>

            {/* banner */}
            <div
                className="pt-28 pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
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
                                <p className='mt-3 font-montserrat md:text-lg text-[#60410C]'>If your Airbnb property is not furnished, our in-house interior design team can help. We provide Airbnb interior design services for all holiday homes, ensuring the properties are perfect for short-term rental. That means beautiful in photos, yet still functional by design. We have built up our know-how over the years, so we know exactly what works, and offer different holiday home interior packages suitable for any budget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative pt-16 lg:pt-0 md:-mt-24 lg:-mt-14 overflow-hidden'>
                <div className="container mx-auto">
                    <div className='relative py-12  before:absolute before:bg-[#fff8ec] before:w-[calc(100%_+_2000px)] before:-left-10 before:rounded-l-[40px] before:top-0 before:h-full before:-z-10'>
                        <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                            What’s Included
                        </h4>
                        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>Full Project</h6>
                                <div className='text-[#4D5461] md:text-lg mt-3'>
                                    <p>Our in-house Maintenance Team ensures that properties are ready for guests, responding to all issues raised and doing regular inspections. Some general maintenance issues include A/C fixes, water heater replacements, painting touch-ups, light bulb changes, leak fixes and more.</p>
                                    <ul className='mt-3 list-disc pl-6 flex flex-col gap-1'>
                                        <li> Furniture items, such as beds, couches and chairs</li>
                                        <li> Kitchen items, like cups, plates and cutlery</li>
                                        <li> Decorative items, such as vases and art</li>
                                        <li> Lights</li>
                                        <li> Carpets</li>
                                        <li> Bathroom items</li>
                                        <li> Guest essentials, such as a vacuum cleaner, hair dryer, pillows and duvets</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>Styling Project</h6>
                                <div className='text-[#4D5461] md:text-lg mt-3'>
                                    <p>We call it a ‘Styling Project’ if it’s anything less than a full furnishing project. Maybe your property is partly furnished, or you only need help with the décor or guest essentials. We work with you on your budget to ensure the property is ready for short-term rental. For smaller styling projects, our turnaround is one week.</p>
                                </div>
                            </div>
                            <div>
                                <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>Premium Interior Design Services</h6>
                                <div className='text-[#4D5461] md:text-lg mt-3'>
                                    <p>We also provide interior design services for personal projects, on a case-by-case basis. Please contact us for more details.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-14 md:py-16 lg:py-20">
                <div className="container mx-auto">
                    <h4 className="text-[26px] xs:text-3xl lg:text-[34px] font-semibold text-[#1F1607]">
                        How it works?
                    </h4>
                    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>1. Initial inspection</h6>
                            <p className='text-[#4D5461] mt-3 leading-6'>For any property we furnish, we start with the initial inspection, where we check the space to understand what is possible/needed. We also show comparable properties and design ideas from our latest projects.</p>
                        </div>
                        <div>
                            <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>2. Design Agreement</h6>
                            <p className='text-[#4D5461] mt-3 leading-6'>For any property we furnish, we start with the initial inspection, where we check the space to understand what is possible/needed. We also show comparable properties and design ideas from our latest projects.</p>
                        </div>
                        <div>
                            <h6 className='text-xl md:text-2xl font-medium text-[#1F1607]'>3. Implementation</h6>
                            <p className='text-[#4D5461] mt-3 leading-6'>Our interior design team begins the project with clear deadlines to have it up and running (and making you money!) ASAP.</p>
                        </div>
                    </div>
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

            <FAQ />
        </div>
    )
}

export default InteriorDesign

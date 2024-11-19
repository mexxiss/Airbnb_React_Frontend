import { useState } from 'react'
import icon27 from "../../assets/icons/icon27.png";
import bg1 from "../../assets/images/bg1.jpg";
import { Link } from 'react-router-dom';

const Gallery = () => {
    const [isActive, SetIsActive] = useState('all')

    const cate = [
        "all",
        "bedroom",
        "kitchen",
        "living room",
        "balcony",
        "pool",
        "dubai",
    ]
    return (
        <>

            {/* banner */}
            <div
                className="py-28 pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
                style={{
                    backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
                }}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-center flex-col gap-4">
                        <h2 className="text-[42px] sm:text-5xl xl:text-[60px] font-bold text-center text-[#1F1607] font-light] ">
                            Gallery
                        </h2>
                        <p className="flex items-center gap-4 text-[#4C360E]">
                            <span className="">
                                <Link to="/" className="hover:underline">Home</Link>
                            </span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span>Gallery</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-14 md:py-16 lg:py-20'>
                <div className="container mx-auto">
                    <div>
                        <ul className='flex overflow-auto justify-between items-center border-b-2 border-[#AEAEAE]'>
                            {cate.map((e, index) => (
                                <li key={index}>
                                    <button className={`px-8 py-1 text-nowrap text-center capitalize md:text-lg ${isActive === e ? "border-b-[3.5px] border-[#DCC397] font-medium text-[#DCC397]" : "text-[#1F1607] font-normal"}`} onClick={() => SetIsActive(e)}>
                                        {e}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-16">
                        <div className="flex">
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery

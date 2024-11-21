import { useState } from 'react'
import icon27 from "../../assets/icons/icon27.png";
import bg1 from "../../assets/images/bg1.jpg";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img10 from "../../assets/images/img10.png";
import img12 from "../../assets/images/img12.png";
import img7 from "../../assets/images/img7.png";
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
    const data = [
        {
            id: 1,
            img: img1,
            cate: "all"
        },
        {
            id: 2,
            img: img2,
            cate: "all"
        },
        {
            id: 3,
            img: img3,
            cate: "all"
        },
        {
            id: 4,
            img: img4,
            cate: "all"
        },
        {
            id: 5,
            img: img5,
            cate: "all"
        },
        {
            id: 6,
            img: img10,
            cate: "all"
        },
        {
            id: 7,
            img: img12,
            cate: "all"
        },
        {
            id: 8,
            img: img7,
            cate: "all"
        },
    ] 
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
                    <div className="mt-10">
                        <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {data.map((e, index) => (
                                <div key={index} className='max-h-60 lg:h-64 rounded-xl overflow-hidden'>
                                    <img src={e.img} className='w-full h-full object-cover object-center' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery

import { Modal } from "flowbite-react";
import { img5 } from "../../assets/images/index.ts";
import Slider from "react-slick";
import { CloseOutlined, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, LocationOnOutlined, StarRounded } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface IProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
    property: any
}

const PropertyQuickView = ({ openModal, setOpenModal, property }: IProps) => {
    const sliderRef = useRef<any>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isReadMore, setIsReadMore] = useState(false);
    console.log(property);
    useEffect(() => {
        if (openModal) {
            setTimeout(() => setIsVisible(true), 100);
        } else {
            setIsVisible(false);
        }
    }, [openModal]);

    const next = () => {
        sliderRef.current.slickNext();
    };
    const prev = () => {
        sliderRef.current.slickPrev();
    };

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Modal
                show={openModal}
                onClose={() => setOpenModal(false)}
                size="6xl"
                className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
                <Modal.Body className="p-0 rounded-lg">
                    <div className="quickView md:h-[450px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                            <div className="slider relative h-[300px] md:h-[450px]">    
                                <div className="absolute right-2 top-3 z-10 !h-max"><p className="px-4 py-1 bg-white text-primary rounded-full text-sm flex items-center justify-center gap-1"><span><LocationOnOutlined className="!text-lg" /></span> {property?.address?.city}, {property?.address?.country}</p></div>
                                <button className="absolute top-1/2 -translate-y-1/2 z-50 left-2 w-6 h-6 border flex items-center justify-center border-primary rounded-full text-primary hover:bg-primary hover:text-white duration-300" onClick={prev}><KeyboardArrowLeftOutlined /></button>
                                <button className="absolute top-1/2 -translate-y-1/2 z-50 right-2 w-6 h-6 border flex items-center justify-center border-primary rounded-full text-primary hover:bg-primary  hover:text-white duration-300" onClick={next}><KeyboardArrowRightOutlined /></button>
                                <div className="*:h-full">
                                    <Slider {...settings} ref={sliderRef} className="h-full">
                                        {property?.property_images.map((image: any, index: number) => (
                                            <div key={index} className="">
                                                <img src={image?.img_url} className="w-full h-full object-cover object-center" />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div>
                                <div className="p-4">
                                    <button className="absolute right-3 top-2" onClick={() => setOpenModal(false)}><CloseOutlined className="!text-xl" /></button>
                                    <div className="flex items-center justify-between md:mt-7">
                                        <div className="text-white text-sm bg-[#3BC22C] rounded h-7 flex items-center justify-center gap-1 px-2 capitalize">
                                            {/* <StarRounded className="!text-lg" /> 4.5 */}
                                            {property?.property_types}
                                        </div>
                                        <div className="text-[#1F1607] text-sm">
                                            <span>50</span> Reviews
                                        </div>
                                    </div>
                                    <h4 className="mt-4 mb-1 line-clamp-2 text-xl font-medium text-[#1F1607]">
                                        {property?.title}
                                    </h4>
                                    <p className="text-[#4D5461] text-sm gap-3 flex items-center">
                                        {property?.property_details?.max_guest_count} Guests <span className="w-1 h-1 bg-[#4D5461] rounded-full inline-block"></span> {property?.property_details?.beds_count} Bed{" "}
                                        <span className="w-1 h-1 bg-[#4D5461] rounded-full inline-block"></span> {property?.property_details?.bathrooms_count} Bathroom
                                    </p>
                                    <p className="text-[#1F1607] mt-4">
                                        AED <span className="font-semibold text-2xl">{property?.costs?.prices?.price_per_night}</span> per night
                                    </p>
                                    <div className="mt-4">
                                        <h6 className="text-lg font-medium text-[#1F1607]">Description</h6>
                                        <p className="mt-1 text-[#4D5461]">
                                            {property?.description?.substring(0, 200)}...{" "}
                                            <span className="text-primary cursor-pointer hover:underline" onClick={toggleReadMore}>
                                                know more
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <button className="btn1 !text-sm tracking-wider !font-normal flex items-center gap-2">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PropertyQuickView;

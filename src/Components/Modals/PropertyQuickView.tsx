import { Modal } from "flowbite-react";
import { img5 } from "../../assets/images/index.ts";
import Slider from "react-slick";
import { StarRounded } from "@mui/icons-material";

interface IProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
}

const PropertyQuickView = ({ openModal, setOpenModal }: IProps) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)} size="6xl">
                <Modal.Body className="p-0 rounded-none">
                    <div className="grid grid-cols-2 ">
                        <div>
                            <div className=" overflow-hidden">
                                <Slider {...settings} className="h-full">
                                    <div>
                                        <img src={img5} className="w-full h-full object-cover object-center" />
                                    </div>
                                    <div>
                                        <img src={img5} className="w-full h-full object-cover object-center" />
                                    </div>
                                    <div>
                                        <img src={img5} className="w-full h-full object-cover object-center" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div>
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-white text-sm bg-[#3BC22C] rounded h-7 flex items-center justify-center gap-1 px-2">
                                        <StarRounded className="!text-lg" /> 4.5
                                    </div>
                                    <div className="text-[#1F1607] text-sm">
                                        <span>50</span> Reviews
                                    </div>
                                </div>
                                <h4 className="mt-4 mb-1 line-clamp-2 text-xl font-medium text-[#1F1607]">Entire holiday home in Dubai, United Arab Emirates</h4>
                                <p className="text-[#4D5461] text-sm gap-3 flex items-center">2 Guests <span className="w-1 h-1 bg-[#4D5461] rounded-full inline-block"></span> 1 Bed <span className="w-1 h-1 bg-[#4D5461] rounded-full inline-block"></span> 1 Bathroom</p>
                                <p className="text-[#1F1607] mt-4"><span className="font-semibold text-2xl">₹5,214</span> per night</p>
                                <div className="mt-4">
                                    <h6 className="text-lg font-medium text-[#1F1607]" >Description</h6>
                                    <p className="mt-2 text-[#4D5461] line-clamp-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PropertyQuickView
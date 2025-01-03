import { CloseOutlined } from "@mui/icons-material";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";

interface IProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
    eventDetails: any;
}
const BookingDetails = ({ openModal, setOpenModal, eventDetails }: IProps) => {
    const [isVisible, setIsVisible] = useState(false);
    console.log(eventDetails);
    useEffect (() => {
        if (openModal) {
            setTimeout(() => setIsVisible(true), 100);
        } else {
            setIsVisible(false);
        }
    }, [openModal]);

    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)}
                className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <Modal.Body>
                    <button className="absolute right-3 top-2" onClick={() => setOpenModal(false)}><CloseOutlined className="!text-xl" /></button>
                    <div className="">
                        <h4 className="text-2xl font-medium text-primary">Booking Details</h4>
                        <div className="mt-3">
                            <h6 className="text-lg uppercase text-gray-600 font-medium tracking-wide">Reservation</h6>
                            <hr className="border-primary my-2" />
                            <ul className="flex flex-col gap-1">
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Reservation:</span>
                                    <span className="font-medium">BC-bjDd9c09dD</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Name:</span>
                                    <span className="font-medium">{eventDetails?.guest_name}</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Check-in:</span>
                                    <span className="font-medium">{new Date(eventDetails?.start).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.')}</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Check-out:</span>
                                    <span className="font-medium">{new Date(eventDetails?.end).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.')}</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Nights:</span>
                                    <span className="font-medium">{eventDetails?.nights}</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Source:</span>
                                    <span className="font-medium">{eventDetails?.source}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-5">
                            <h6 className="text-lg uppercase text-gray-600 font-medium tracking-wide">Finances</h6>
                            <hr className="border-primary my-2" />
                            <ul className="flex flex-col gap-1">
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Gross revenue:</span>
                                    <span className="font-medium">{eventDetails?.revenue_gross}</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700">
                                    <span>Management fee:</span>
                                    <span className="font-medium">-{eventDetails?.maintenance_fee}</span>
                                </li>
                                <li className="flex items-center justify-between text-gray-700 text-xl">
                                    <span>Total Amount:</span>
                                    <span className="font-medium">{eventDetails?.revenue_gross - eventDetails?.maintenance_fee}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BookingDetails
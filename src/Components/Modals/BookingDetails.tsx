import { Modal } from "flowbite-react";

interface IProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
    eventDetails: any;
}
const BookingDetails = ({ openModal, setOpenModal, eventDetails }: IProps) => {
    console.log(eventDetails);

    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Guest Name: {eventDetails?.guest_name || "No details available."}
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Start: {eventDetails?.start ? eventDetails.start.toString() : "No details available."}
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            End: {eventDetails?.end ? eventDetails.end.toString() : "No details available."}
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BookingDetails
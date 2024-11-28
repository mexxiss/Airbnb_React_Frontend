import { KeyboardArrowRightOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Help = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 gap-x-4 xl:gap-x-10 gap-y-6 md:gap-y-8 mt-8">
                <div className="border border-primary flex justify-between relative">
                    <Link to="/user-panel/help/faq" className='absolute w-full h-full'></Link>
                    <h6 className="text-xl text-gray-700 py-2.5 pl-3">FAQs</h6>
                    <div className='w-5 text-white bg-primary flex items-center justify-center'>
                        <KeyboardArrowRightOutlined />
                    </div>
                </div>
                <div className="border border-primary flex justify-between relative">
                    <Link to="/user-panel/help/contact-support" className='absolute w-full h-full'></Link>
                    <h6 className="text-xl text-gray-700 py-2.5 pl-3">Contact Us</h6>
                    <div className='w-5 text-white bg-primary flex items-center justify-center'>
                        <KeyboardArrowRightOutlined />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help

import { KeyboardArrowRightOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

const ContactSupport = () => {
    return (
        <div>
            {/* Breadcrumb */}
            <div>
                <ul className="text-sm text-gray-500 flex items-center gap-1">
                    <li>
                        <Link to="/user-panel/help" className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
                            Help
                        </Link>
                    </li>
                    <li>
                        <KeyboardArrowRightOutlined className="!text-xl" />
                    </li>
                    <li>
                        <span className="text-gray-800 inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">Contact Support</span>
                    </li>
                </ul>
            </div>

            <div className="mt-8">
                <form action="">
                    <div className="text-gray-500 flex flex-col gap-4">
                        <div>
                            <select name="" id="" className="w-full border-primary focus:ring-0 focus:border-primary">
                                <option value="General Question">General Question</option>
                                <option value="Technical Issue">Technical Issue</option>
                                <option value="My New Property">My New Property</option>
                            </select>
                        </div>
                        <div>
                            <textarea name="" id="" rows={6} className="w-full border-primary focus:ring-0 focus:border-primary" placeholder="Message"></textarea>
                        </div>
                        <div>
                            <button className="btn1 !rounded-none w-full">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSupport

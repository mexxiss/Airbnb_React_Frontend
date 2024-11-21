import { Link } from "react-router-dom";
import { logo, whiteLogo } from '../../assets/icons';
import { img12 } from '../../assets/images';

const ForgotPassword = () => {
    return (
        <div className="bg-white relative">
            <div className="absolute right-0 top-0 h-full lg:w-1/2 2xl:w-[40%]">
                <img src={img12} className="h-full w-full object-cover" />
            </div>
            <div className="bg-black bg-opacity-40 backdrop-blur-sm lg:bg-opacity-100 lg:bg-transparent lg:backdrop-blur-0 relative">
                <div className="container mx-auto">
                    <div className="min-h-screen py-10">
                        <div className="">
                            <div className="flex items-center justify-between w-full lg:w-1/2 2xl:w-3/5 lg:pr-10">
                                <div>
                                    <img src={logo} className="w-28 sm:w-36 hidden lg:inline-block" />
                                    <img src={whiteLogo} className="w-28 sm:w-36 lg:hidden" />
                                </div>
                                <Link to="/login" className="text-primary text-lg font-semibold">Login</Link>
                            </div>
                            <div className="flex items-center mt-16 sm:mt-24">
                                <div className="w-full lg:w-1/2 2xl:w-3/5 lg:pr-10">
                                    <div className="max-w-[540px] mx-auto">
                                        <h4 className="text-4xl sm:text-[42px] leading-[58px] font-semibold text-white lg:text-[#1F1607] text-center">Forgot Password?</h4>
                                        <p className="text-center text-white lg:text-[#1F1607] md:text-lg ">Please enter your email to reset password</p>
                                        <div className="mt-10">
                                            <form action="">
                                                <div className="flex gap-5 flex-col">
                                                    <div className="h-12 px-6 bg-[#fef4e3] rounded-full flex items-center border border-[#dcc39798]">
                                                        <input type="email" className="w-full border-none p-0 focus:ring-0 bg-transparent text-text1 placeholder:text-[#4D5461]"
                                                            placeholder="Email" />
                                                    </div>
                                                    <div>
                                                        <button className="w-full inline-block btn1 !h-12">Reset Password</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword

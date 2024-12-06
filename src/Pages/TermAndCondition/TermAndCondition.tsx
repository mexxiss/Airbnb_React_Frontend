import { useState } from "react";
import { icon27 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";
import { Link } from "react-router-dom";

const TermAndCondition = () => {
    const [isActive, SetIsActive] = useState("Terms & conditions");
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
                        <h2 className="text-[42px] sm:text-5xl font-bold text-center text-[#1F1607] font-light]">
                            Terms & conditions
                        </h2>
                        <p className="flex items-center gap-4 text-[#4C360E]">
                            <span className="">
                                <Link
                                    to="/"
                                    className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
                                >
                                    Home
                                </Link>
                            </span>
                            <span>
                                <img src={icon27} className="w-4" />
                            </span>
                            <span>Terms & conditions</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-10 md:pb-16 lg:pb-20 pt-14">
                <div className="container mx-auto">
                    <div>
                        <ul className="flex overflow-auto justify-between items-center border-b-2 border-[#AEAEAE]">
                            <li>
                                <button
                                    className={`px-8 py-1 text-nowrap text-center capitalize md:text-lg ${isActive === "Terms & conditions" ? "border-b-[3.5px] border-[#DCC397] font-medium text-[#DCC397]"
                                        : "text-[#1F1607] font-normal"
                                        }`}>Terms & conditions
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TermAndCondition

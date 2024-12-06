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
                        <h2 className="text-3xl xs:text-4xl sm:text-[42px] sm:text-5xl font-bold text-center text-[#1F1607] font-light]">
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
                        <ul className="flex overflow-x-auto items-center gap-4 border-b-2 border-[#AEAEAE] pb-[5.5px]">
                            <li>
                                <a href="#termCondition"
                                    className={`px-4 py-1 text-nowrap text-center capitalize md:text-lg xl:text-xl ${isActive === "Terms & conditions" ? "border-b-[3.5px] border-[#d2b787] font-medium text-[#aa8d5a]"
                                        : "text-[#1F1607] font-normal"
                                        }`} onClick={() => SetIsActive("Terms & conditions")}>Terms & conditions
                                </a>
                            </li>
                            <li>
                                <a href="#refundPolicy"
                                    className={`px-4 py-1 text-nowrap text-center capitalize md:text-lg xl:text-xl ${isActive === "Refund Policy" ? "border-b-[3.5px] border-[#d2b787] font-medium text-[#aa8d5a]"
                                        : "text-[#1F1607] font-normal"
                                        }`} onClick={() => SetIsActive("Refund Policy")}> Refund Policy
                                </a>
                            </li>
                            <li>
                                <a href="#privacyPolicy"
                                    className={`px-4 py-1 text-nowrap text-center capitalize md:text-lg xl:text-xl ${isActive === "Privacy Policy" ? "border-b-[3.5px] border-[#d2b787] font-medium text-[#aa8d5a]"
                                        : "text-[#1F1607] font-normal"
                                        }`} onClick={() => SetIsActive("Privacy Policy")}> Privacy Policy
                                </a>
                            </li>
                        </ul>
                        <div>
                            <div className="pt-10" id="termCondition">
                                <h4 className='text-xl sm:text-2xl font-medium text-primary'>Frank Porter Vacation Homes LL.C. “HOST TERMS AND CONDITIONS”</h4>
                                <div className="">
                                    <h6 className="text-lg lg:text-xl mt-6">1. INTRODUCTION</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>A. The following terms and conditions (“Host Terms”) apply to your registration as a “Host” with Frank Porter Vacation Homes Rental LL.C., and to any and all services which we provide to you as a Frank Porter Vacation Homes Rental LL.C. registered customer (“Client”). Your registration with Frank Porter Vacation Homes Rental LL.C. is conditional subject to acceptance of the terms and conditions of this agreement to these Host Terms in full.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>B. In these Host Terms, Clients who are acting in their capacity as hosts (allowing their property to be occupied by nodes) will be adverted to as “Hosts” and individuals staying as guests at such property will be denoted to as “Guests”.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>C. We provide services to you, the Host, to ensure that the property you make available for occupancy by Guests (“Property”) is ready for occupancy by Guests.</p>
                                    <h6 className="text-lg lg:text-xl mt-6">2. SERVICES</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>A . Subject to the receipt and subsequent acceptance of a valid Service Request (defined below), we agree to provide services to you as requested by you, the Host, with reasonable skill and care and in accordance with these Host Terms.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>B. In these Host Terms, Clients who are acting in their capacity as hosts (allowing their property to be occupied by nodes) will be adverted to as “Hosts” and individuals staying as guests at such property will be denoted to as “Guests”.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>C. We provide services to you, the Host, to ensure that the property you make available for occupancy by Guests (“Property”) is ready for occupancy by Guests.</p>
                                </div>
                            </div>
                            <div className="pt-10" id="refundPolicy">
                                <h4 className='text-xl sm:text-2xl font-medium text-primary'>Frank Porter Vacation Homes Rental LL.C. “HOST” REFUND POLICY”</h4>
                                <div className="">
                                    <h6 className="text-lg lg:text-xl mt-6">1. Travel Issue: “Travel Issue” means any one of the following:</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>A.​ ​ A host of the Property (i) cancels a booking shortly before the scheduled start of the booking, or (ii) fails to provide the Guest with the reasonable ability to access the Property.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>B.. ​  Listing’s description or delineation of the Property is materially inaccurate with regards to:</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>a. Size of the Property (e.g., number and size of the bedroom, bathroom and/or kitchen or other rooms);</p>
                                    <h6 className="text-lg lg:text-xl mt-6">2. The Guest Ref​​und Policy</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>If you are a Guest and suffer a Travel Issue, we concur, at our discretion, to either (i) reimburse you up to the amount paid by you (“Total Fees”) depending on the nature of the Travel Issue suffered, or (ii) use our reasonable efforts to find and book you another Property for any unused nights left in your booking which is reasonably comparable to the Property described in your original engagement in terms of size, rooms, features and quality. In the event of cancellation of booking without any Travel Issue, a full refund shall be yielded if the booking was cancelled 14 days or more before the date of commencement of the booking whereas no refund shall be offered if the engagement was less than 14 days before the date of commencement of the relevant booking.</p>
                                </div>
                            </div>
                            <div className="pt-10" id="privacyPolicy">
                                <h4 className='text-xl sm:text-2xl font-medium text-primary'>Frank Porter Vacation Homes Rental LL.C. “HOST” PRIVACY POLICY”</h4>
                                <div className="">
                                    <h6 className="text-lg lg:text-xl mt-6">1. Information You Give Us: We receive the information you share with us when you use the Platform:</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>A.​ ​ A host of the Property (i) cancels a booking shortly before the scheduled start of the booking, or (ii) fails to provide the Guest with the reasonable ability to access the Property.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>B.. ​  Listing’s description or delineation of the Property is materially inaccurate with regards to:</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>a. Size of the Property (e.g., number and size of the bedroom, bathroom and/or kitchen or other rooms);</p>
                                    <h6 className="text-lg lg:text-xl mt-6">2. Information We Automatically Collect from Your Use of the Platform: When you use the Platform, we collect information about the services you use and how you use them:</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>A.​ ​ A host of the Property (i) cancels a booking shortly before the scheduled start of the booking, or (ii) fails to provide the Guest with the reasonable ability to access the Property.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>B.. ​  Listing’s description or delineation of the Property is materially inaccurate with regards to:</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>a. Size of the Property (e.g., number and size of the bedroom, bathroom and/or kitchen or other rooms);</p>
                                    <h6 className="text-lg lg:text-xl mt-6">3. Information We Collect from Third Parties: We may pick up information that others provide about you when they use the Platform, or receive information from other sources and merge that with data we accumulate through the Platform.:</h6>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>A.​ ​ A host of the Property (i) cancels a booking shortly before the scheduled start of the booking, or (ii) fails to provide the Guest with the reasonable ability to access the Property.</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>B.. ​  Listing’s description or delineation of the Property is materially inaccurate with regards to:</p>
                                    <p className='mt-3 text-sm md:text-base opacity-80'>a. Size of the Property (e.g., number and size of the bedroom, bathroom and/or kitchen or other rooms);</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default TermAndCondition

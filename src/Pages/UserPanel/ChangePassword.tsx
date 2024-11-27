import { KeyboardArrowRightOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
    const [passwordVisibility, setPasswordVisibility] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
        setPasswordVisibility((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };


    return (
        <div>
            {/* Breadcrumb */}
            <div>
                <ul className="text-sm text-gray-500 flex items-center gap-1">
                    <li>
                        <Link to="/user-panel/settings" className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <KeyboardArrowRightOutlined className="!text-xl" />
                    </li>
                    <li>
                        <span className="text-gray-800 inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">Change Password</span>
                    </li>
                </ul>
            </div>

            {/* Form */}
            <div className="mt-6">
                <form className="flex flex-col gap-4">
                    {/* Current Password */}
                    <div className="border border-primary h-10 flex items-center justify-between px-3">
                        <input
                            type={passwordVisibility.current ? "text" : "password"}
                            className="w-full p-0 border-none focus:ring-0 bg-transparent"
                            placeholder="Current Password"
                        />
                        <span
                            className="cursor-pointer"
                            onClick={() => togglePasswordVisibility("current")}
                        >
                            {passwordVisibility.current ? (
                                <Visibility className="!text-lg text-primary" />
                            ) : (
                                <VisibilityOff className="!text-lg text-primary" />
                            )}
                        </span>
                    </div>

                    {/* New Password */}
                    <div className="border border-primary h-10 flex items-center justify-between px-3">
                        <input
                            type={passwordVisibility.new ? "text" : "password"}
                            className="w-full p-0 border-none focus:ring-0 bg-transparent"
                            placeholder="New Password"
                        />
                        <span
                            className="cursor-pointer"
                            onClick={() => togglePasswordVisibility("new")}
                        >
                            {passwordVisibility.new ? (
                                <Visibility className="!text-lg text-primary" />
                            ) : (
                                <VisibilityOff className="!text-lg text-primary" />
                            )}
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="border border-primary h-10 flex items-center justify-between px-3">
                        <input
                            type={passwordVisibility.confirm ? "text" : "password"}
                            className="w-full p-0 border-none focus:ring-0 bg-transparent"
                            placeholder="Confirm Password"
                        />
                        <span
                            className="cursor-pointer"
                            onClick={() => togglePasswordVisibility("confirm")}
                        >
                            {passwordVisibility.confirm ? (
                                <Visibility className="!text-lg text-primary" />
                            ) : (
                                <VisibilityOff className="!text-lg text-primary" />
                            )}
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full btn1 !rounded-none tracking-wider !h-10">
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;

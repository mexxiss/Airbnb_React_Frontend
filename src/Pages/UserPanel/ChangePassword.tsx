import { yupResolver } from "@hookform/resolvers/yup";
import {
  KeyboardArrowRightOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { changePasswordSchema } from "../../utils/validations/changePasswordValidation";
import { usePostChangePassword } from "../../hooks/react-queries/auth";
import { ChangePasswordProps } from "../../types/loginTypes";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  /** mutation for change password */
  const { mutate: changePassword, isPending } = usePostChangePassword();

  /** Handle eye icons or inputs text/password */
  const [passwordVisibility, setPasswordVisibility] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  /** Handle For Toggle Icons */
  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  /** Submit Data Handler */
  const onSubmit = (data: any) => {
    const newObj: ChangePasswordProps = {
      current_pass: data.currentPassword,
      new_pass: data.newPassword,
    };
    changePassword(newObj, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div>
        <ul className="text-sm text-gray-500 flex items-center gap-1">
          <li>
            <Link
              to="/user-panel/settings"
              className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
            >
              Settings
            </Link>
          </li>
          <li>
            <KeyboardArrowRightOutlined className="!text-xl" />
          </li>
          <li>
            <span className="text-gray-800 inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
              Change Password
            </span>
          </li>
        </ul>
      </div>

      {/* Form */}
      <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Current Password */}
          <div className="">
            <div className="border border-primary h-10 flex items-center justify-between px-3">
              <input
                type={passwordVisibility.current ? "text" : "password"}
                className="w-full p-0 border-none focus:ring-0 bg-transparent"
                placeholder="Current Password"
                {...register("currentPassword")}
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
            {errors.currentPassword && (
              <p className="text-red-500 text-sm ml-3 mt-1">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="">
            <div className="border border-primary h-10 flex items-center justify-between px-3">
              <input
                type={passwordVisibility.new ? "text" : "password"}
                className="w-full p-0 border-none focus:ring-0 bg-transparent"
                placeholder="New Password"
                {...register("newPassword")}
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
            {errors.newPassword && (
              <p className="text-red-500 text-sm ml-3 mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="">
            <div className="border border-primary h-10 flex items-center justify-between px-3">
              <input
                type={passwordVisibility.confirm ? "text" : "password"}
                className="w-full p-0 border-none focus:ring-0 bg-transparent"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm ml-3 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button className="w-full btn1 !rounded-none tracking-wider !h-10">
            {isPending ? "Changing Password" : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

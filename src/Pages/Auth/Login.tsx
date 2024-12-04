import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, whiteLogo } from "../../assets/icons/index.ts";
import { img12 } from "../../assets/images/index.ts";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormInputs } from "../../types/loginTypes.ts";
import { loginSchema } from "../../utils/validations/contactFormValidation.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostLogin } from "../../hooks/react-queries/auth/usePostLogin.ts";

const Login = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handlePasswordToggle = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const mutation = usePostLogin();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    mutation.mutate(data);
  };

  const isLoading = mutation?.status === "pending";

  return (
    <div className="bg-white relative">
      <div className="absolute right-0 top-0 h-full lg:w-1/2 2xl:w-[40%]">
        <img src={img12} className="h-full w-full object-cover" />
      </div>
      <div className="bg-black bg-opacity-40 backdrop-blur-sm lg:bg-opacity-100 lg:bg-transparent lg:backdrop-blur-0 relative">
        <div className="container mx-auto">
          <div className="min-h-screen py-10">
            <div className="">
              <div>
                <img
                  src={logo}
                  className="w-28 sm:w-36 hidden lg:inline-block"
                />
                <img src={whiteLogo} className="w-28 sm:w-36 lg:hidden" />
              </div>
              <div className="flex items-center mt-16 sm:mt-24">
                <div className="w-full lg:w-1/2 2xl:w-3/5 lg:pr-10">
                  <div className="max-w-[540px] mx-auto">
                    <h4 className="text-4xl sm:text-[42px] leading-[58px] font-semibold text-white lg:text-[#1F1607] text-center">
                      Welcome Back
                    </h4>
                    <p className="text-center text-white lg:text-[#1F1607] md:text-lg ">
                      Log in into your account
                    </p>
                    <div className="mt-10">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-5 flex-col">
                          <div className="">
                            <div className="h-12 px-6 bg-[#fef4e3] rounded-full flex items-center border border-[#dcc39798]">
                              <input
                                type="text"
                                {...register("email")}
                                className="w-full p-0 border-none focus:ring-0 bg-transparent"
                                placeholder="Email Address"
                              />
                            </div>
                            {errors.email && (
                              <p className="text-red-500 text-sm ml-3 mt-1">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                          <div className="">
                            <div className="h-12 px-6 bg-[#fef4e3] rounded-full flex items-center border border-[#dcc39798]">
                              <input
                                type={isPasswordShow ? "text" : "password"}
                                {...register("password")}
                                className="w-full border-none p-0 focus:ring-0 bg-transparent text-text1 placeholder:text-[#4D5461]"
                                placeholder="Password"
                              />
                              <span
                                className="cursor-pointer text-primary"
                                onClick={handlePasswordToggle}
                              >
                                {isPasswordShow ? (
                                  <VisibilityOutlined />
                                ) : (
                                  <VisibilityOffOutlined />
                                )}
                              </span>
                            </div>
                            {errors.password && (
                              <p className="text-red-500 text-sm ml-3 mt-1">
                                {errors.password.message}
                              </p>
                            )}
                          </div>
                          <p className="text-right">
                            <Link
                              to="/forgot-password"
                              className="text-[#D93F21]"
                            >
                              Forgot Password
                            </Link>
                          </p>
                          <div>
                            <button className="w-full inline-block btn1 !h-12">
                              {isLoading ? "Loading..." : "Login"}
                            </button>
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
  );
};

export default Login;

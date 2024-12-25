import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "@mantine/core";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { icon31, icon28, icon5 } from "../../../assets/icons/index.ts";
import { img8 } from "../../../assets/images/index.ts";
import { schema } from "../../../utils/validations/contactFormValidation";
import { postContactQuery } from "../../../services/apiServices";
import { showToast } from "../../../utils/toaster/toastWrapper";
import PhoneInputComponent from "../../../Components/PhoneInput/PhoneInputComponent";

interface FormInputs {
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: postContactQuery,
    onSuccess: () => {
      showToast("success", "Message sent successfully!");
      reset(); // Clear all form fields after success
    },
    onError: () => showToast("error", "Failed to send the message."),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    mutation.mutate(data);
  };

  const isLoading = mutation?.status === "pending";

  return (
    <div className="py-14 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-full lg:w-3/5 lg:pr-16" data-aos="fade-right" data-aos-duration="1000" >
            <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:[42px] font-semibold text-[#1F1607]">
              Send Us Message
            </h4>
            <div className="mt-10 contact_us">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid xs:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="">
                    <div className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12">
                      <input
                        type="text"
                        {...register("fullname")}
                        className="w-full p-0 border-none focus:ring-0 bg-transparent"
                        placeholder="Full Name"
                      />
                      <span>
                        <img src={icon31} className="w-4" />
                      </span>
                    </div>
                    {errors.fullname && (
                      <p className="text-red-500 text-sm ml-3 mt-1">
                        {errors.fullname.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="">
                    <div className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12">
                      <input
                        type="text"
                        {...register("email")}
                        className="w-full p-0 border-none focus:ring-0 bg-transparent"
                        placeholder="Email Address"
                      />
                      <span>
                        <img src={icon28} className="w-4" />
                      </span>
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm ml-3 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  {/* <div className="">
                    <div className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12">
                      <input
                        type="text"
                        {...register("phone")}
                        className="w-full p-0 border-none focus:ring-0 bg-transparent"
                        placeholder="Phone Number"
                      />

                      <span>
                        <img src={icon29} className="w-4" />
                      </span>
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm ml-3 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div> */}
                  <PhoneInputComponent
                    name="phone"
                    control={control}
                    defaultCountry="in"
                    errorMessage={errors.phone?.message}
                  />
                  {/* Subject */}
                  <div className="">
                    <div className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12">
                      <input
                        type="text"
                        {...register("subject")}
                        className="w-full p-0 border-none focus:ring-0 bg-transparent"
                        placeholder="Subject"
                      />

                      {/* <span>
                        <img src={icon29} className="w-4" />
                      </span> */}
                    </div>
                    {/* <Select
                      placeholder="Subject"
                      data={[
                        { value: "React", label: "React" },
                        { value: "Angular", label: "Angular" },
                        { value: "Vue", label: "Vue" },
                        { value: "Svelte", label: "Svelte" },
                      ]}
                      onChange={(value) => setValue("subject", value || "")}
                      className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12"
                      rightSection={
                        <KeyboardArrowDownOutlined className="text-[#DCC397]" />
                      }
                    /> */}
                    {errors.subject && (
                      <p className="text-red-500 text-sm ml-3 mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="xs:col-span-2">
                    <textarea
                      {...register("message")}
                      className="bg-[#fef4e3] rounded-xl w-full px-6 py-3 border-none focus:ring-0 min-h-32"
                      placeholder="Write Your Message"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm ml-3 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="btn1 flex items-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <span>
                      <img src={icon5} className="w-4" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:block hidden w-2/5 pl-6 lg:pl-0" data-aos="fade-left" data-aos-duration="1000" >
            <img src={img8} alt="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

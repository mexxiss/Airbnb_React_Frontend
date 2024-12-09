import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Input from "../../Components/CommonField/Input";
import { Form, FormikProvider, useFormik } from "formik";
import { useToggle } from "../../hooks/custom-hook/useToggle";
import { useUserDetails } from "../../hooks/react-queries/userdetails";
import { useUpdateUserdetails } from "../../hooks/react-queries/userdetails/useUpdateUserdetails";
import { UserDetails } from "../../types/userDetailsTypes";

const PersonalDetails = () => {
  const [isOpen, toggleOpen] = useToggle();
  const { data: user, isLoading, error } = useUserDetails();
  const updateUserMutation = useUpdateUserdetails();

  const initialValues = {
    firstName: user?.first_name || "",
    lastName: user?.last_name || "",
    email: user?.email[0] || "",
    address: user?.address?.street || "",
    number: user?.phone[0] || "",
    SecEmail: user?.email[1] || "",
    SecNumber: user?.phone[1] || "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const updates = {
          ...user,
          first_name: values.firstName,
          last_name: values.lastName,
          email: [values.email, values.SecEmail].filter(Boolean), // Remove empty secondary email
          phone: [values.number, values.SecNumber].filter(Boolean), // Remove empty secondary phone
          address: {
            street: values.address,
          },
        };

        updateUserMutation.mutate(updates as UserDetails);
        console.log("Updated user details:", updateUserMutation.data);
      } catch (error) {
        console.error("Failed to update user details:", error);
        alert("Failed to update details. Please try again.");
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user details: {error.message}</div>;

  console.log({ values: formik.values });

  return (
    <div>
      {/* Breadcrumb */}
      <div>
        <ul className="text-sm text-gray-500 flex items-center gap-1">
          <li>
            <Link
              to=""
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
              Personal Details
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-5 md:mt-8">
        <h4 className="text-3xl lg:text-4xl xl:text-5xl text-gray-600">
          Personal Details
        </h4>
        <hr className="my-5 border-primary" />
        <div className="py-6 px-5 border border-primary bg-primary bg-opacity-5">
          <div className="flex items-center justify-between">
            <div>
              <h6 className="text-xl sm:text-2xl md:text-3xl text-primary">
                Personal Details
              </h6>
              <p className="mt-1 text-gray-600 text-sm sm:text-base">
                Please fill in your details
              </p>
            </div>
            <div>
              <button
                onClick={() => toggleOpen(!isOpen)}
                disabled={isOpen}
                className={
                  isOpen
                    ? "border border-primary text-primary bg-white px-3 sm:px-8 py-1 sm:py-2 uppercase tracking-wide text-sm sm:text-base"
                    : "btn1 !rounded-none h-10 !px-8 tracking-wider"
                }
              >
                Edit
              </button>
            </div>
          </div>

          {/* Personal Details Form */}
          <div className="mt-6">
            <FormikProvider value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    name="firstName"
                    type="text"
                    label="First Name"
                    value={formik.values.firstName}
                    disabled={!isOpen}
                    labelClass=""
                    onChange={formik.handleChange} // Formik's onChange handler
                  />
                  <Input
                    name="lastName"
                    type="text"
                    label="Last Name"
                    value={formik.values.lastName}
                    disabled={!isOpen}
                    labelClass=""
                    onChange={formik.handleChange} // Formik's onChange handler
                  />
                  <Input
                    name="email"
                    type="email"
                    label="Email"
                    value={formik.values.email}
                    disabled={!isOpen}
                    labelClass=""
                    onChange={formik.handleChange} // Formik's onChange handler
                  />
                  <Input
                    name="address"
                    type="text"
                    label="Address"
                    value={formik.values.address}
                    disabled={!isOpen}
                    labelClass=""
                    onChange={formik.handleChange} // Formik's onChange handler
                  />
                  <Input
                    name="number"
                    type="text"
                    label="Phone Number"
                    value={formik.values.number}
                    disabled={!isOpen}
                    labelClass=""
                    onChange={formik.handleChange} // Formik's onChange handler
                  />
                  <Input
                    name="SecEmail"
                    type="email"
                    label="Secondary Email"
                    value={formik.values.SecEmail}
                    disabled={!isOpen}
                    labelClass=""
                    onChange={formik.handleChange} // Formik's onChange handler
                  />
                  <Input
                    name="SecNumber"
                    type="text"
                    label="Secondary Phone Number"
                    value={formik.values.SecNumber}
                    disabled={!isOpen}
                    labelClass=""
                    onChange={formik.handleChange} // Formik's onChange handler
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={!isOpen}
                    onClick={() => {
                      toggleOpen(!isOpen);
                      formik.submitForm();
                    }}
                    className={
                      !isOpen
                        ? "border border-primary text-primary bg-white px-3 sm:px-8 py-1 sm:py-2 uppercase tracking-wide text-sm sm:text-base"
                        : "btn1 !rounded-none h-10 !px-8 tracking-wider"
                    }
                  >
                    Save
                  </button>
                </div>
              </Form>
            </FormikProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

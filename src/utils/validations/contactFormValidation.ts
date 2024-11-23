import * as yup from "yup";
// Define validation schema using yup
export const schema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^5[02456]\d{7}$/,
      "Invalid Dubai phone number (9 digits, starting with 50, 52, 54, 55, or 56)"
    )
    .required("Phone number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

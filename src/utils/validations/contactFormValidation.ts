import * as yup from "yup";
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const schema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  email: yup
    .string()
    .required("Please enter your email")
    .email()
    .matches(EMAIL_REGEX, "Invalid email: example@mail.abc"),
  phone: yup
    .string()
    .required("Phone number is required")
    .test("is-valid-phone", "Invalid phone number", (value) => {
      if (!value) return false;
      const formattedValue = value.startsWith("+") ? value : `+${value}`;
      const phoneRegex = /^\+\d{1,4}\d{6,14}$/;
      return phoneRegex.test(formattedValue);
    }),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .email()
    .matches(EMAIL_REGEX, "Invalid email: example@mail.abc"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

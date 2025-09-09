import * as yup from "yup";

export const contactSchema = yup.object().shape({
  Name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),

  phone: yup
    .string()
    .nullable()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),

  subject: yup
    .string()
    .required("Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

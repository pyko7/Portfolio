import * as yup from "yup";

/* Schema for contact form validation */
export const contactForm = yup
  .object({
    name: yup
      .string()
      .min(2)
      .max(50)
      .matches(/^([A-Za-z]+[-'\s]?){2,50}$/g, {
        message:
          "name must be between 2 and 50 characters. Only - and ' special characters are accepted",
        excludeEmptyString: true,
      }),
    email: yup
      .string()
      .email("that email is invalid")
      .required("that email is invalid"),
    subject: yup
      .string()
      .min(2)
      .matches(/^([A-Za-z]+[-'\s]?){2,50}$/g, {
        message: "Subject must be between 2 and 50 characters",
        excludeEmptyString: true,
      }),
    message: yup
      .string()
      .min(10)
      .matches(/^(?!\s*$).+$/gm)
      .required("message must be at least 10 characters"),
  })
  .required();

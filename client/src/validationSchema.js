import * as yup from "yup";

/* Schema for contact form validation */
export const contactForm = yup
  .object({
    name: yup
      .string()
      .min(2)
      .max(50)
      .matches(/^([A-Za-z]+[\-'\s]?){2,50}$/g, {
        message:
          "Name must be between 2 and 50 characters. Only - ' special characters are accepted",
        excludeEmptyString: true,
      }),
    email: yup
      .string()
      .email("That email is invalid")
      .required("That email is invalid"),
    subject: yup
      .string()
      .min(2)
      .matches(/^([A-Za-z]+[\-'\s]?){2,50}$/g, {
        message: "Subject must be between 2 and 50 characters",
        excludeEmptyString: true,
      }),
    message: yup
      .string()
      .min(10)
      .matches(/^(?!\s*$).+$/gm)
      .required("Please enter at least a 10 characters message"),
  })
  .required();

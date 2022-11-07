import * as yup from "yup";

/* Schema for contact form validation */
export const validationSchema = yup
  .object({
    name: yup
      .string()
      .min(2, "must be at least 2 characters long")
      .matches(/^([A-Za-z]+[\-'\s]?){2,}$/, {
        message: "only letters and special characters - ' are allowed",
        excludeEmptyString: true,
      })
      .required("must be at least 2 characters long"),
    email: yup
      .string()
      .email("please fill in a valid email adress")
      .required("please fill in a valid email adress"),
    subject: yup
      .string()
      .min(2, "must be at least 2 characters long")
      .matches(/^([A-Za-z0-9]+[\-'\s]?){2,}$/, {
        message: "only special characters - ' are allowed",
        excludeEmptyString: true,
      })
      .required("must be at least 2 characters long"),
    message: yup.string().min(10).required("must be at least 10 characters"),
  })
  .required();

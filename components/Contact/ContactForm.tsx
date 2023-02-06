import { useState, forwardRef } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/utils/validation/validationSchema";

import { FormValues, submitForm } from "@/utils/submitForm";
import { useMutation } from "@tanstack/react-query";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
    setError(false);
  };

  const mutation = useMutation(submitForm, {
    onSuccess: () => {
      setSuccess(true);
      reset();
    },
    onError: () => {
      setError(true);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <form
        className="w-full, maxW: [650px], m-auto, p-8,flex,  flexDirection: column, alignItems: center,
    gap: 20,
    borderRadius: 4,"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" w-full, maxW: [450px]">
          <input
            className=' width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    "& label": {
      color: theme.palette.fontColor.main,
    },
    "& label.Mui-focused": {
      color: theme.palette.fontColor.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.fontColor.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.fontColor.main,
      },
    },'
            type="text"
            placeholder="Name"
            {...register("name")}
            required
          />
          {errors.name ? (
            <p>{`${errors.name.message}`}</p>
          ) : null}
        </div>
        <div className=" w-full, maxW: [450px]">
          <input
            className=' width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    "& label": {
      color: theme.palette.fontColor.main,
    },
    "& label.Mui-focused": {
      color: theme.palette.fontColor.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.fontColor.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.fontColor.main,
      },
    },'
            type="email"
            placeholder="Email"
            {...register("email")}
            required
          />
          {errors.email ? (
            <p>{`${errors.email.message}`}</p>
          ) : null}
        </div>
        <div className=" w-full, maxW: [450px]">
          <input
            className=' width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    "& label": {
      color: theme.palette.fontColor.main,
    },
    "& label.Mui-focused": {
      color: theme.palette.fontColor.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.fontColor.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.fontColor.main,
      },
    },'
            type="text"
            placeholder="Subject"
            {...register("subject")}
            required
          />
          {errors.subject ? (
            <p>{`${errors.subject.message}`}</p>
          ) : null}
        </div>
        <div className=" w-full, maxW: [450px]">
          <textarea
            className=' width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    "& label": {
      color: theme.palette.fontColor.main,
    },
    "& label.Mui-focused": {
      color: theme.palette.fontColor.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.fontColor.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.fontColor.main,
      },
    },'
            placeholder="Write your message..."
            {...register("message")}
            required
          />
          {errors.message ? (
            <p>{`${errors.message.message}`}</p>
          ) : null}
        </div>
        <button
          className=' marginTop: 10,
    padding: "12px 20px",
    fontWeight: 500,'
          type="submit"
        >
          Send message
        </button>
      </form>
      {/* {success ? (
        <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Message sent
          </Alert>
        </Snackbar>
      ) : error ? (
        <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Failed to contact server
          </Alert>
        </Snackbar>
      ) : null} */}
    </>
  );
};

export default ContactForm;

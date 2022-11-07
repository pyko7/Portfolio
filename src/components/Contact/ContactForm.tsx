import { useState, forwardRef } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "~/src/utils/validation/validationSchema";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { FormValues, submitForm } from "~/src/utils/submitForm";
import { useMutation } from "@tanstack/react-query";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const theme = useTheme();
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

  const Form = styled(Box)({
    width: "100%",
    maxWidth: 650,
    margin: "auto",
    padding: 35,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    borderRadius: 4,
  });

  const FormGroups = styled(FormGroup)({
    width: "100%",
    maxWidth: 450,
  });

  const FormInputs = styled(TextField)(({ theme }) => ({
    width: "100%",
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
    },
  }));

  const SubmitButton = styled(Button)({
    marginTop: 10,
    padding: "12px 20px",
    fontWeight: 500,
  });

  const ErrorMessage = styled(FormHelperText)({
    color: theme.palette.error.main,
    fontWeight: 500,
  });

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <Form component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroups>
          <FormInputs
            type="text"
            label="Name"
            variant="outlined"
            {...register("name")}
            required
          />
          {errors.name ? (
            <ErrorMessage>{`${errors.name.message}`}</ErrorMessage>
          ) : null}
        </FormGroups>
        <FormGroups>
          <FormInputs
            type="email"
            label="Email"
            variant="outlined"
            {...register("email")}
            required
          />
          {errors.email ? (
            <ErrorMessage>{`${errors.email.message}`}</ErrorMessage>
          ) : null}
        </FormGroups>
        <FormGroups>
          <FormInputs
            type="text"
            label="Subject"
            variant="outlined"
            {...register("subject")}
            required
          />
          {errors.subject ? (
            <ErrorMessage>{`${errors.subject.message}`}</ErrorMessage>
          ) : null}
        </FormGroups>
        <FormGroups>
          <FormInputs
            type="text"
            label="Write your message..."
            variant="outlined"
            multiline
            minRows={6}
            {...register("message")}
            required
          />
          {errors.message ? (
            <ErrorMessage>{`${errors.message.message}`}</ErrorMessage>
          ) : null}
        </FormGroups>
        <SubmitButton type="submit" variant="contained" color="secondary">
          Send message
        </SubmitButton>
      </Form>
      {success ? (
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
      ) : null}
    </>
  );
};

export default ContactForm;

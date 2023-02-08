import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/utils/validation/validationSchema";
import { FormValues, submitForm } from "@/utils/submitForm";
import { useMutation } from "@tanstack/react-query";
import { RiMailCheckFill } from "react-icons/ri";
import { BiMessageAltError } from "react-icons/bi";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(true);

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
    <form
      className="w-1/3 max-w-[650px] py-10 flex flex-col items-center justify-center gap-8 bg-main-bg-color lg:w-full lg:max-w-lg
      sm:max-w-xs sm:bg-transparent sm:backdrop-blur-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <form
       className="w-1/3 max-w-[650px] py-10 flex flex-col items-center justify-center gap-8 bg-black/10 backdrop-blur-md lg:w-full lg:max-w-lg
       sm:max-w-xs sm:bg-transparent sm:backdrop-blur-md"
       onSubmit={handleSubmit(onSubmit)}
     > */}
      {success ? (
        <div className="w-11/12 h-[450px] max-w-md flex flex-col justify-center items-center gap-8 lg:max-w-sm">
          <RiMailCheckFill className="w-10 h-10" />
          <p>Message sent to Julien. Thank you !</p>
          <p className="text-third-color hover:text-third-color-lighten cursor-pointer" onClick={()=>setSuccess(false)}>Send a new message</p>
        </div>
      ) : error ? (
        <div className="w-11/12 h-[450px] max-w-md flex flex-col justify-center items-center gap-8 lg:max-w-sm">
          <BiMessageAltError className="w-10 h-10" />
          <p>Sorry an error has occured</p>
          <p className="text-third-color hover:text-third-color-lighten cursor-pointer" onClick={()=>setError(false)}>Try again</p>
        </div>
      ) : (
        <>
          <div className="w-11/12 max-w-md lg:max-w-sm">
            <input
              className="contact_form__input"
              type="text"
              placeholder="Name"
              {...register("name")}
              required
            />

            {errors.name ? <p className="mt-2 text-red-400">{`${errors.name.message}`}</p> : null}
          </div>
          <div className="w-11/12 max-w-md lg:max-w-sm">
            <input
              className="contact_form__input"
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            />

            {errors.email ? <p className="mt-2 text-red-400">{`${errors.email.message}`}</p> : null}
          </div>
          <div className="w-11/12 max-w-md lg:max-w-sm">
            <input
              className="contact_form__input"
              type="text"
              placeholder="Subject"
              {...register("subject")}
              required
            />

            {errors.subject ? <p className="mt-2 text-red-400">{`${errors.subject.message}`}</p> : null}
          </div>
          <div className="w-11/12 max-w-md lg:max-w-sm">
            <textarea
              className="contact_form__input min-h-[125px] mt-3 py-3 border-[1px] border-secondary-bg-color sm:border-main-font-color"
              placeholder="Write your message..."
              {...register("message")}
              required
            />
            {errors.message ? <p className="mt-2 text-red-400">{`${errors.message.message}`}</p> : null}
          </div>

          <button
            className="w-full max-w-xs h-16 mt-8 text-main-bg-color bg-main-font-color font-bold"
            type="submit"
          >
            {success ? "Message sent to Julien" : "Send message"}
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;

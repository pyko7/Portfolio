import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { contactForm } from "../validationSchema";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import FormLoader from "./FormLoader";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { postData } from "../api/submitForm";


const ContactForm = () => {
    const { register, getValues, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(contactForm),
    });
    const ref = useRef(null)

    const queryClient = useQueryClient()

    const mutation = useMutation(postData, {
        onSuccess: data => {
            console.log(data);
        },
        onError: () => {
            console.log(mutation.error.message);
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    });

    const onSubmit = () => {
        const data = getValues();
        mutation.mutate(data)
    }

    const handleReset = () => {
        mutation.reset();
        return !mutation.isError ? reset() : null
    }

    return (
        <>
            {mutation.isLoading ? <FormLoader /> :
                mutation.isError ?
                    <div className="w-full flex flex-col items-center gap-y-2">
                        <FormError />
                        <p className='text-lg text-secondary cursor-pointer hover:underline' onClick={() => handleReset()}>Retry</p>
                    </div>
                    :
                    mutation.isSuccess ?
                        <div className="w-full flex flex-col items-center gap-y-2">
                            <FormSuccess />
                            <p className='text-base text-secondary cursor-pointer hover:underline' onClick={() => handleReset()} >Send a new message</p>
                        </div>
                        :
                        <form
                            id="form"
                            ref={ref}
                            className="w-full p-8 flex flex-col items-center gap-y-8 rounded-[20px] text-black bg-tertiary md:max-w-lg md:rounded-b-none"
                            onSubmit={handleSubmit(onSubmit)}>

                            <div className="w-full flex flex-col items-start gap-y-2">
                                <input type="text" name="name" placeholder="Name" className="w-full h-14 p-5 rounded-[20px] text-xl focus-visible:outline-inputs" {...register("name")} required />
                                {errors.name &&
                                    <div className="w-full flex items-center gap-x-2 text-yellow-400">
                                        {/* <FontAwesomeIcon icon={faTriangleExclamation} className="w-5 h-5" /> */}
                                        <p>{errors.name.message}</p>
                                    </div>
                                }
                            </div>
                            <div className="w-full flex flex-col items-start gap-y-2">
                                <input type="email" name="email" placeholder="Email address" className="w-full h-14 p-5 rounded-[20px] text-xl focus-visible:outline-inputs" {...register("email")} required />
                                {errors.email &&
                                    <div className="w-full flex items-center gap-x-2 text-yellow-400">
                                        {/* <FontAwesomeIcon icon={faTriangleExclamation} className="w-5 h-5" /> */}
                                        <p>{errors.email.message}</p>
                                    </div>
                                }
                            </div>
                            <div className="w-full flex flex-col items-start gap-y-2">
                                <input type="text" name="subject" placeholder="Subject" className="w-full h-14 p-5 rounded-[20px] text-xl focus-visible:outline-inputs" {...register("subject")} required />
                                {errors.subject &&
                                    <div className="w-full flex items-center gap-x-2 text-yellow-400">
                                        {/* <FontAwesomeIcon icon={faTriangleExclamation} className="w-5 h-5" /> */}
                                        <p>{errors.subject.message}</p>
                                    </div>
                                }
                            </div>
                            <div className="w-full flex flex-col items-start gap-y-2">
                                <textarea name="message" placeholder="Write you message..." minLength='2' className="w-full min-h-[300px] p-5 rounded-[20px] text-xl resize-none focus-visible:outline-inputs" {...register("message")} required />

                                {errors.message &&
                                    <div className="w-full flex items-center gap-x-2 text-yellow-400">
                                        {/* <FontAwesomeIcon icon={faTriangleExclamation} className="w-5 h-5" /> */}
                                        <p>{errors.message.message}</p>
                                    </div>
                                }
                            </div>
                            <input type="submit" value="Send message" className='w-fit h-auto px-4 py-2 rounded-3xl text-[22px] bg-secondary text-primary font-bold cursor-pointer hover:bg-secondaryLighten disabled:bg-quaternary' />
                        </form>
            }
        </>
    );
};

export default ContactForm;
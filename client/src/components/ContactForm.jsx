import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { contactForm } from "../validationSchema";
import { ExclamationIcon } from "@heroicons/react/solid";
import FormLoader from "./FormLoader";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { useState } from "react";
import { useRef } from "react";


const ContactForm = () => {
    const { register, getValues, handleSubmit, reset, formState: { isSubmitting, isSubmitSuccessful, errors } } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(contactForm),
    });
    const [error, setErrorState] = useState(false)
    const data = getValues();
    const ref = useRef(null)
    const form = ref.current;

    const onSubmit = async () => {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({ ...data }),
            };
            const res = await fetch('http://localhost:8080/api/contact', options);
            const resData = await res.json();
            return resData
        } catch (error) {
            setErrorState(true);
            throw new Error('Failed to contact server')
        }
    }

    const handleReset = () => {
        if (error) return setErrorState(false);
        else return reset(form)
    }

    return (
        <>
            {isSubmitting ? <FormLoader /> :
                error ?
                    <div className="w-full flex flex-col items-center gap-y-2">
                        <FormError />
                        <p className='text-lg text-secondary cursor-pointer hover:underline' onClick={() => handleReset()}>Retry</p>
                    </div>
                    :
                    isSubmitSuccessful ?
                        <div className="w-full flex flex-col items-center gap-y-2">
                            <FormSuccess />
                            <p className='text-base text-secondary cursor-pointer hover:underline' onClick={() => handleReset()} >Send a new message</p>
                        </div>
                        :
                        <form
                            id="form"
                            ref={ref}
                            className="w-full p-8 flex flex-col items-center gap-y-8 rounded-[20px] bg-tertiary md:max-w-lg md:rounded-b-none"
                            onSubmit={handleSubmit(onSubmit)}>

                            <div className="w-full flex flex-col items-start gap-y-2">
                                <input type="text" name="name" placeholder="Name" className="w-full h-14 p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" {...register("name")} required />
                                {errors.name &&
                                    <div className="w-full flex items-center gap-x-2 text-yellow-400">
                                        <ExclamationIcon className="w-5 h-5" />
                                        <p>{errors.name.message}</p>
                                    </div>
                                }
                            </div>
                            <div className="w-full flex flex-col items-start gap-y-2">
                                <input type="email" name="email" placeholder="Email address" className="w-full h-14 p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" {...register("email")} required />
                                {errors.email &&
                                    <div className="w-full flex items-center gap-x-2 text-yellow-400">
                                        <ExclamationIcon className="w-5 h-5" />
                                        <p>{errors.email.message}</p>
                                    </div>
                                }
                            </div>
                            <div className="w-full flex flex-col items-start gap-y-2">
                                <input type="text" name="subject" placeholder="Subject" className="w-full h-14 p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" {...register("subject")} required />
                                {errors.subject &&
                                    <div className="w-full flex items-center gap-x-2 text-yellow-400">
                                        <ExclamationIcon className="w-5 h-5" />
                                        <p>{errors.subject.message}</p>
                                    </div>
                                }
                            </div>
                            <div className="w-full flex flex-col items-start gap-y-2">
                                <textarea name="message" placeholder="Write you message..." minLength='2' className="w-full min-h-[300px] p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" {...register("message")} required />

                                {errors.message &&
                                    <div className="w-full flex items-center gap-x-2 text-yellow-400">
                                        <ExclamationIcon className="w-5 h-5" />
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
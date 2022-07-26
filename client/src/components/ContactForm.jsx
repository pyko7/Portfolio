import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { contactForm } from "../validationSchema";
import { submitForm } from "../api/fetch";
import { ExclamationIcon } from "@heroicons/react/solid";
import FormLoader from "./FormLoader";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";


const ContactForm = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(contactForm),
    });



    const onSubmit = async () => {
        try {
            // setIsLoading(true);
            const data = getValues();
            await submitForm('http://localhost:8080/api/contact', data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            {/* {isLoading ? <FormLoader /> :
                isError ?
                    <div className="w-full flex flex-col items-center gap-y-2">
                        <FormError />
                        <p className='text-lg text-secondary'>Retry</p>
                    </div>
                    :
                    isSuccess ?
                        <div className="w-full flex flex-col items-center gap-y-2">
                            <FormSuccess />
                            <p className='text-base text-secondary hover:underline'>Send a new message</p>
                        </div>
                        : */}
            <form
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
        </>
    );
};

export default ContactForm;
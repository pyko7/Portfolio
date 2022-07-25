import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { contactForm } from "../validationSchema";


const ContactForm = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(contactForm),
    });

    const handleForm = () => {
        const data = getValues();
        console.log(data);
    }

    return (
        <form
            className="w-full p-8 flex flex-col items-center gap-y-8 rounded-[20px] bg-tertiary md:max-w-lg md:rounded-b-none"
            onSubmit={handleSubmit(handleForm)}>
            <input type="text" name="name" placeholder="Name" className="w-full h-14 p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" {...register("name")} />
            {errors.name && <p className="mt-0 text-red-500">{errors.name.message}</p>}
            <input type="email" name="email" placeholder="Email address" className="w-full h-14 p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <input type="text" name="subject" placeholder="Subject" className="w-full h-14 p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" {...register("subject")} />
            {errors.subject && <p>{errors.subject.message}</p>}
            <textarea name="message" placeholder="Write you message..." className="w-full min-h-[300px] p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" {...register("message")} />
            {errors.message && <p>{errors.message.message}</p>}
            <input type="submit" value="Send message"
                className='w-fit h-auto px-4 py-2 rounded-3xl text-[22px] bg-secondary text-primary font-bold hover:bg-secondaryLighten' />
        </form>
    );
};

export default ContactForm;
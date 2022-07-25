import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit } = useForm({
        mode: 'onSubmit',
        resolver: undefined,
    });

    const handleForm = () => {

    }

    return (
        <form
            className="w-full p-8 flex flex-col items-center gap-y-8 rounded-[20px] bg-tertiary md:max-w-lg md:rounded-b-none"
            onSubmit={handleSubmit(handleForm)}>
            <input type="text" placeholder="Name" className="w-full h-14 p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" />
            <input type="email" placeholder="Email address" className="w-full h-14 p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double" />
            <textarea placeholder="Write you message..." className="w-full min-h-[300px] p-5 rounded-[20px] text-xl outline-quaternary outline-2 focus:outline-double"/>
            <input type="submit" value="Send message"
            className='w-fit h-auto px-4 py-2 rounded-3xl text-[22px] bg-secondary text-primary font-bold hover:bg-secondaryLighten' />
        </form>
    );
};

export default ContactForm;
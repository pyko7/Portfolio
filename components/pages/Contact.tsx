import { useState } from "react";
import FormContainer from "../Contact/FormContainer";
import ContactInformations from "../Contact/ContactInformations";
import MobileContactForm from "../Contact/MobileContactForm";
import Footer from "../Footer";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const mobileFormState = { open, setOpen };

  return (
    <>
      <section className="w-full, min-h:[100vh], pt:90, flex" id="contact">
        <h2 className="fontSize: 38">Contact me</h2>

        <div className=" w-full, mt: 75, flex">
          {/* if mobile
          <div className="w-full , p-14, flex, flex-column, align-center">
            <button className="w-full, max-w:[350px], h-[75px], mb:50,">
            Contact me here
            </button>
          </MobileFormContainer>

          <MobileContactForm {...mobileFormState} />
          </div> */}
        </div>

        <div className="w-full, mt-60, flex, justify-center">
          <ContactInformations />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

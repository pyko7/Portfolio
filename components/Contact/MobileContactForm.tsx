import ContactForm from "./ContactForm";

interface openState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileContactForm = ({ open, setOpen }: openState) => {
  const handleClick = () => {
    return open ? setOpen(false) : setOpen(true);
  };

  return (
    <div onClick={handleClick}>
      <ContactForm />
    </div>
  );
};

export default MobileContactForm;

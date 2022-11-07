import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ContactForm from "./ContactForm";

const FormContainer = () => {
  const theme = useTheme();

  const FormContainer = styled(Box)({
    width: "100%",
    padding: 15,
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  });

  return (
    <FormContainer>
      <ContactForm />
    </FormContainer>
  );
};

export default FormContainer;

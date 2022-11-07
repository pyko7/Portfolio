import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormContainer from "../components/Contact/FormContainer";
import ContactInformations from "../components/Contact/ContactInformations";

const Contact = () => {
  const theme = useTheme();

  const ContactContainer = styled(Box)({
    width: "100%",
    maxWidth: "1920px",
    minHeight: "100vh",
    marginTop: 120,
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("lg")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 20px",
    },
    // [theme.breakpoints.down("sm")]: {
    //   flexDirection: "column",
    //   alignItems: "center",
    // },
  });

  const Title = styled(Typography)({
    fontSize: 38,
    [theme.breakpoints.down("lg")]: {
      fontSize: 34,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 26,
    },
  });

  const FormSection = styled(Box)({
    width: "100%",
    marginTop: 75,
    display: "flex",
  });
  const ContactSection = styled(Box)({
    width: "100%",
    marginTop: 60,
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("lg")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 75,
    },
  });

  return (
    <ContactContainer component="section" id="contact">
      <Title variant="h2">Contact me</Title>
      
      <FormSection>
        <FormContainer />
      </FormSection>
      <ContactSection>
        <ContactInformations />
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;

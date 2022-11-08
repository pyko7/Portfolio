import { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormContainer from "../components/Contact/FormContainer";
import ContactInformations from "../components/Contact/ContactInformations";
import MobileContactForm from "../components/Contact/MobileContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const mobileFormState = { open, setOpen };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const ContactContainer = styled(Box)({
    width: "100%",
    maxWidth: "1920px",
    minHeight: "100vh",
    marginTop: 120,
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("lg")]: {
      padding: "0 20px",
    },
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

  const FormSection = styled(Box)(({ theme }) => ({
    width: "100%",
    marginTop: 75,
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      marginTop: 25,
    },
  }));
  const ContactSection = styled(Box)(({ theme }) => ({
    width: "100%",
    marginTop: 60,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 25,
    },
  }));

  const MobileFormContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    padding: "14px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ContactButton = styled(Button)(({ theme }) => ({
    width: "100%",
    maxWidth: 350,
    height: 75,
    marginBottom: 50,
    backgroundColor: theme.palette.secondary.main,
  }));

  return (
    <>
      <ContactContainer component="section" id="contact">
        <Title variant="h2">Contact me</Title>

        <FormSection>
          {isMobile ? (
            <MobileFormContainer>
              <ContactButton variant="contained" onClick={() => setOpen(true)}>
                Contact me here
              </ContactButton>
              <Box sx={{ width: 1 }}>
                <Divider>OR</Divider>
              </Box>
            </MobileFormContainer>
          ) : (
            <FormContainer />
          )}
          <MobileContactForm {...mobileFormState} />
        </FormSection>
        <ContactSection>
          <ContactInformations />
        </ContactSection>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;

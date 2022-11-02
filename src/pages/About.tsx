import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextContainer from "../components/About/TextContainer";
import IconContainer from "../components/About/IconContainer";

const About = () => {
  const theme = useTheme();
  const AboutContainer = styled(Box)({
    width: "100%",
    maxWidth: "1920px",
    minHeight: "100vh",
    paddingTop: 90,
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 20px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const TextSection = styled(Box)({
    width: "50%",
    display: "flex",
    marginTop: 120,
    [theme.breakpoints.down("lg")]: {
      width: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  });
  const IconSection = styled(Box)({
    width: "50%",
    display: "flex",
    justifyContent: "center",
    marginTop: 120,
    [theme.breakpoints.down("lg")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 75,
    },
  });

  return (
    <AboutContainer component="section">
      <TextSection>
        <TextContainer />
      </TextSection>
      <IconSection>
        <IconContainer />
      </IconSection>
    </AboutContainer>
  );
};

export default About;

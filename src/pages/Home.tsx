import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextContainer from "../components/Home/TextContainer";
import ImageContainer from "../components/Home/ImageContainer";

export const Home = () => {
  const theme = useTheme();
  const HomeContainer = styled(Box)({
    width: "100%",
    maxWidth: "1920px",
    minHeight: "100vh",
    paddingTop: 90,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const TextSection = styled(Box)({
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 120,
    [theme.breakpoints.down("md")]: {
      width: "55%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  });

  const ImageSection = styled(Box)({
    width: "50%",
    display: "flex",
    justifyContent: "center",
    marginTop: 120,
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 75,
    },
  });

  return (
    <HomeContainer component="section">
      <TextSection>
        <TextContainer />
      </TextSection>

      <ImageSection>
        <ImageContainer />
      </ImageSection>
    </HomeContainer>
  );
};

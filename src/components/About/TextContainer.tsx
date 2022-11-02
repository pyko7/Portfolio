import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TextContainer = () => {
  const theme = useTheme();

  const TextContainer = styled(Box)({
    width: "75%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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

  const Paragraph = styled(Typography)({
    margin: "32px 0",
    fontSize: 22,
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
    },
  });

  return (
    <TextContainer>
      <Title variant="h2">About me</Title>

      <Paragraph paragraph>
        Hey there, my name is Julien Henry. I live in France, more precisely in
        Burgundy. I’ve always been interested in computing and technology. One
        of my other passions is sport. After acquiring a bachelor's degree to be
        a physical education professor, I’ve realized that sport was just a
        hobby but not my future job.
      </Paragraph>

      <Paragraph paragraph>
        After months of solo learning, I’ve decided to take the web developer
        training course at OpenClassrooms. Following this, I’m currently looking
        for my first experience as a front end developer.
      </Paragraph>
    </TextContainer>
  );
};

export default TextContainer;

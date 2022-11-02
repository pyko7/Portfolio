import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

  const SecondTitle = styled(Typography)({
    fontSize: 32,
    [theme.breakpoints.down("lg")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 26,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  });

  const Paragraph = styled(Typography)({
    margin: "32px 0",
    fontSize: 22,
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
    },
  });

  const LinkButton = styled(Button)(({ theme }) => ({
    maxWidth: "220px",
    padding: "15px",
    backgroundColor: theme.palette.secondary.main,
    fontWeight: 700,
  }));
  return (
    <TextContainer>
      <Box>
        <Title variant="h2">
          Hello, I'm
          <span
            style={{ color: theme.palette.secondary.dark, fontWeight: 500 }}
          >
            {" "}
            Julien Henry
          </span>
          .
        </Title>
        <SecondTitle>I'm a front end developer.</SecondTitle>
      </Box>
      <Paragraph paragraph>
        I love building accessible content to give every user a satisfying
        experience. I am currently looking for a full remote front end developer
        job.
      </Paragraph>

      <LinkButton href="#work" variant="contained">
        See my work
      </LinkButton>
    </TextContainer>
  );
};

export default TextContainer;

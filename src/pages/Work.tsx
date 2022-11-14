import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ProjectContainer from "../components/Work/ProjectContainer";
import { shopIt, moviz, grouposocial } from "../utils/builtProject";

const Work = () => {
  const theme = useTheme();

  const WorkContainer = styled(Box)({
    width: "100%",
    maxWidth: "1920px",
    minHeight: "100vh",
    paddingTop: 90,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      margin: "50px 0",
      padding: "0 20px",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const Title = styled(Typography)({
    fontSize: 38,
    marginBottom: 32,
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

  return (
    <WorkContainer component="section" id='work'>
      <Title> My work </Title>
      <Stack spacing={2}>
        <ProjectContainer {...shopIt} />
        <ProjectContainer {...moviz} />
        <ProjectContainer {...grouposocial} />
      </Stack>
    </WorkContainer>
  );
};

export default Work;

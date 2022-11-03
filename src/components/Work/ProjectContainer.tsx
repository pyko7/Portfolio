import { useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Project } from "~/src/utils/builtProject";

const ProjectContainer = ({
  title,
  image,
  description,
  techno,
  url,
}: Project) => {
  const [overlay, setOverlay] = useState(false);

  const ProjectCard = styled(Card)(({ theme }) => ({
    width: "100%",
    height: 350,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",

    [theme.breakpoints.down("md")]: {
      height: 550,
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "50%",
    height: "100%",

    [theme.breakpoints.down("md")]: {
      width: "75%",
      marginBottom: 16,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));

  const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 4,
    opacity: 0.9,
    zIndex: 2,
  }));

  const OverlayLinkIcon = styled(OpenInNewIcon)(({ theme }) => ({
    fontSize: 52,
    borderRadius: 4,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.fontColor.main,
    opacity: 1,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const Title = styled("a")(({ theme }) => ({
    padding: "10px 20px",
    borderRadius: 4,
    fontSize: 24,
    textDecoration: "none",
    color: theme.palette.fontColor.main,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const ProjectDetails = styled(CardContent)(({ theme }) => ({
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0 16px",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));

  const Description = styled(Typography)(({ theme }) => ({
    margin: "16px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  }));

  return (
    <ProjectCard>
      <ImageContainer
        onMouseOver={() => setOverlay(true)}
        onMouseLeave={() => {
          setTimeout(() => {
            setOverlay(false);
          }, 100);
        }}
      >
        {title == "Grouposocial" ? null : (
          <Slide direction="right" in={overlay} mountOnEnter unmountOnExit>
            <Overlay>
              <a href={url} target="_blank" style={{ textDecoration: "none" }}>
                <OverlayLinkIcon />
              </a>
            </Overlay>
          </Slide>
        )}

        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: 4 }}
          alt={`${title} project`}
          quality={100}
        />
      </ImageContainer>
      <ProjectDetails>
        <Title href={url} target="_blank">
          {title}
        </Title>
        <Description paragraph>{description}</Description>
        <Breadcrumbs aria-label="breadcrumb">
          {techno.map((tech) => {
            return <Typography sx={{ fontStyle: "italic" }}>{tech}</Typography>;
          })}
        </Breadcrumbs>
      </ProjectDetails>
    </ProjectCard>
  );
};

export default ProjectContainer;
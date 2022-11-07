import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import { SiLinkedin } from "react-icons/si";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { SiGithub } from "react-icons/si";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Icon } from "@mui/material";

const ContactInformations = () => {
  const Item = styled(Paper)(({ theme }) => ({
    width: 350,
    height: 75,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    color: theme.palette.fontColor.main,
    fontWeight: 500,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));
  return (
    <Box>
      <Grid sx={{ paddingY: 1 }} container columns={3} spacing={2}>
        <Grid item xs={1}>
          <a
            href="mailto:julien.f.henry@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email me"
            style={{ textDecoration: "none" }}
          >
            <Item>
              <Icon>
                <EmailIcon />
              </Icon>
              julien.f.henry@gmail.com
            </Item>
          </a>
        </Grid>
        <Grid item xs={1}>
          <a
            href="https://www.linkedin.com/in/julienhenry9671"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Item>
              <Icon fontSize="medium">
                <SiLinkedin aria-hidden="false" aria-label="LinkedIn" />
              </Icon>
              julienhenry9671
            </Item>
          </a>
        </Grid>
        <Grid item xs={1}>
          <a>
            <Item>
              <LocalPhoneIcon aria-hidden="false" aria-label="Phone number" />
              +33 (0)6.26.05.10.58
            </Item>
          </a>
        </Grid>
        <Grid item xs={1}>
          <a
            href="https://github.com/pyko7"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Item>
              <Icon>
                <SiGithub aria-hidden="false" aria-label="Github" />
              </Icon>
              Pyko7
            </Item>
          </a>
        </Grid>

        <Grid item xs={1}>
          <a
            href="https://www.google.com/maps/place/71100+Chalon-sur-Sa%C3%B4ne/@46.7896345,4.8333423,14z/data=!4m5!3m4!1s0x47f2fc97e4ec6639:0x409ce34b30ef070!8m2!3d46.780764!4d4.853947"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Item>
              <LocationOnIcon aria-hidden="false" aria-label="Location" />
              Chalon-sur-Saône, 71100, France
            </Item>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInformations;

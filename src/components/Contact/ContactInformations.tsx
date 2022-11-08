import { forwardRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import EmailIcon from "@mui/icons-material/Email";
import { SiLinkedin } from "react-icons/si";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { SiGithub } from "react-icons/si";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

const ContactInformations = () => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("+33626051058");
    setCopied(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setCopied(false);
  };

  const GridContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    padding: "10px",
    flexDirection: isMobile ? "column" : "row",
  }));

  const ItemContainer = styled(Grid)({
    padding: 0,
    margin: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const ItemBackground = styled(Paper)(({ theme }) => ({
    width: "100%",
    maxWidth: 350,
    height: 75,
    padding: "0 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const Item = styled("a")(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.fontColor.main,
    fontWeight: 500,
    gap: 15,
    textAlign: "center",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("lg")]: {
      gap: 7,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 25px",
      justifyContent: "flex-start",
    },
  }));

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Box sx={{ width: 1 }}>
      <GridContainer
        container
        spacing={1.5}
        columns={isMobile ? 1 : isTablet ? 2 : 3}
      >
        <ItemContainer item xs={1}>
          <ItemBackground>
            <Item
              href="mailto:julien.f.henry@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email me"
            >
              <Icon>
                <EmailIcon />
              </Icon>
              julien.f.henry@gmail.com
            </Item>
          </ItemBackground>
        </ItemContainer>

        <ItemContainer item xs={1}>
          <ItemBackground>
            <Item
              href="https://www.linkedin.com/in/julienhenry9671"
              target="_blank"
              rel="noreferrer"
            >
              <Icon fontSize="medium">
                <SiLinkedin aria-hidden="false" aria-label="LinkedIn" />
              </Icon>
              julienhenry9671
            </Item>
          </ItemBackground>
        </ItemContainer>

        <ItemContainer item xs={1}>
          <ItemBackground>
            <Item
              style={{ cursor: "pointer" }}
              onClick={() => copyPhoneNumber()}
            >
              <LocalPhoneIcon aria-hidden="false" aria-label="Phone number" />
              +33 (0)6.26.05.10.58
            </Item>
          </ItemBackground>
        </ItemContainer>

        <ItemContainer item xs={1}>
          <ItemBackground>
            <Item
              href="https://github.com/pyko7"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Icon>
                <SiGithub aria-hidden="false" aria-label="Github" />
              </Icon>
              Pyko7
            </Item>
          </ItemBackground>
        </ItemContainer>

        <ItemContainer item xs={1} sx={{ width: 1 }}>
          <ItemBackground>
            <Item
              href="https://www.google.com/maps/place/71100+Chalon-sur-Sa%C3%B4ne/@46.7896345,4.8333423,14z/data=!4m5!3m4!1s0x47f2fc97e4ec6639:0x409ce34b30ef070!8m2!3d46.780764!4d4.853947"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <LocationOnIcon aria-hidden="false" aria-label="Location" />
              Chalon-sur-Saône, 71100, France
            </Item>
          </ItemBackground>
        </ItemContainer>
      </GridContainer>
      <Snackbar open={copied} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          sx={{ width: "100%", maxWidth: 255 }}
        >
          Copied to clipboard !
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactInformations;

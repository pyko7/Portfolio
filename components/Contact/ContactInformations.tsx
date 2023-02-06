import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

const ContactInformations = () => {
  const [copied, setCopied] = useState(false);

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

  return (
    <div className="w-full">
      <div className="w-full, p-2">
        <div className=" p-0, m-0,w-full,    flex,    align-center,    justify-center">
          <div className="w-full, max-w: [350px], h-[75px], px-10, flex, align-center, justify-center">
            <a
              className='    width: "100%",
            height: "100%",
            display: "flex",
            alignas: "center",
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
            },'
              href="mailto:julienhenry967@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email me"
            >
              {/* <Icon>
                <EmailIcon />
              </Icon> */}
              julienhenry967@gmail.com
            </a>
          </div>
        </div>

        <div
          className="    p-0,
    m-0,
    w-full,
    flex,
    align-center,
    justify-center"
        >
          <div
            className="w-full, max-w: [350px], h-[75px], px-10, flex, align-center, justify-center
    backgroundColor: theme.palette.secondary.main"
          >
            <a
              className='    width: "100%",
                        height: "100%",
                        display: "flex",
                        alignas: "center",
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
                        },'
              href="https://www.linkedin.com/in/julienhenry9671"
              target="_blank"
              rel="noreferrer"
            >
              {/* <Icon fontSize="medium">
                <SiLinkedin aria-hidden="false" aria-label="LinkedIn" />
              </Icon> */}
              julienhenry9671
            </a>
          </div>
        </div>

        <div
          className="    p-0,
    m-0,
    w-full,
    flex,
    align-center,
    justify-center"
        >
          <div
            className="w-full, max-w: [350px], h-[75px], px-10, flex, align-center, justify-center
    backgroundColor: theme.palette.secondary.main"
          >
            <div
              className=' width: "100%",
    display: "flex",
    alignas: "center",
    justifyContent: "center",
    fontWeight: 500,
    gap: 15,
    textAlign: "center",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("lg")]: {
      gap: 7,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 25px",
      justifyContent: "flex-start",
    },'
              tabIndex={0}
              onClick={() => copyPhoneNumber()}
            >
              {/* <LocalPhoneIcon aria-hidden="false" aria-label="Phone number" /> */}
              +33 (0)6.26.05.10.58
            </div>
          </div>
        </div>

        <div
          className="    p-0,
    m-0,
    w-full,
    flex,
    align-center,
    justify-center"
        >
          <div
            className="w-full, max-w: [350px], h-[75px], px-10, flex, align-center, justify-center
    backgroundColor: theme.palette.secondary.main    "
          >
            <a
              className='    width: "100%",
                        height: "100%",
                        display: "flex",
                        alignas: "center",
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
                        },'
              href="https://github.com/pyko7"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              {/* <Icon>
                <SiGithub aria-hidden="false" aria-label="Github" />
              </Icon> */}
              Pyko7
            </a>
          </div>
        </div>

        <div
          className="    p-0,
    m-0,
    w-full,
    flex,
    align-center,
    justify-center"
        >
          <div
            className="w-full, max-w: [350px], h-[75px], px-10, flex, align-center, justify-center
    backgroundColor: theme.palette.secondary.main, :hover: bac
    "
          >
            <a
              className='    width: "100%",
                        height: "100%",
                        display: "flex",
                        alignas: "center",
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
                        },'
              href="https://www.google.com/maps/place/71100+Chalon-sur-Sa%C3%B4ne/@46.7896345,4.8333423,14z/data=!4m5!3m4!1s0x47f2fc97e4ec6639:0x409ce34b30ef070!8m2!3d46.780764!4d4.853947"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              {/* <LocationOnIcon aria-hidden="false" aria-label="Location" /> */}
              Chalon-sur-Saône, 71100, France
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformations;

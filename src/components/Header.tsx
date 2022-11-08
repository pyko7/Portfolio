import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Header/Navbar";
import SkipNavigation from "./Header/SkipNavigation";
import { styled, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbarMenu from "./Header/MobileNavbarMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerState = { isOpen, setIsOpen };
  const theme = useTheme();
  const isBiggerThanTablet = useMediaQuery(theme.breakpoints.up("md"));

  const Appbar = styled(AppBar)({
    width: "100%",
    padding: isBiggerThanTablet ? "0 50px" : "0 20px",
    height: 90,
    boxShadow: "none",
  });

  const ToolBar = styled(Toolbar)({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const DownloadLink = styled("a")(() => ({
    display: isBiggerThanTablet ? "block" : "none",
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: 4,
    color: theme.palette.fontColor.main,
    backgroundColor: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: 14,
    textDecoration: "none",
    textTransform: "uppercase",
    lineHeight: 1.5,
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const handleDrawer = () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <Box component="header">
      <Appbar position="fixed">
        <ToolBar disableGutters>
          <SkipNavigation />
          <Logo />
          {isBiggerThanTablet ? (
            <Navbar />
          ) : (
            <>
              <IconButton
                onClick={() => handleDrawer()}
                sx={{ color: theme.palette.fontColor.main }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <MobileNavbarMenu {...drawerState} />
            </>
          )}
          <DownloadLink
            href="/assets/CV_Henry_Julien.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </DownloadLink>
        </ToolBar>
      </Appbar>
    </Box>
  );
};

export default Header;

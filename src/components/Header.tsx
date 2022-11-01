import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navigation/Navbar";
import SkipNavigation from "./SkipNavigation";
import { styled, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbarMenu from "./Navigation/MobileNavbarMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerState = { isOpen, setIsOpen };
  const theme = useTheme();
  const isBiggerThanTablet = useMediaQuery(theme.breakpoints.up("md"));

  const Appbar = styled(AppBar)(() => ({
    width: "100%",
    padding: isBiggerThanTablet ? "0 50px" : "0 20px",
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
  }));

  const DownloadLink = styled(Button)(() => ({
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    display: isBiggerThanTablet ? "block" : "none",
    margin: 0,
    color: theme.palette.fontColor.main,
    backgroundColor: theme.palette.secondary.main,
    fontWeight: 700,
  }));

  const handleDrawer = () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <Box component="header">
      <Appbar position="fixed">
        <Toolbar
          disableGutters
          sx={{
            width: 1,
            height: 1,
            position: "relative",
            display: isBiggerThanTablet ? "block" : "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <SkipNavigation /> */}
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

          <DownloadLink variant="contained">Resume</DownloadLink>
        </Toolbar>
      </Appbar>
    </Box>
  );
};

export default Header;

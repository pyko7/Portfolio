import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Navbar = () => {
  const theme = useTheme();
  const pathnames = ["#home", "#about", "#work", "#contact"];

  const Navbar = styled(Box)(() => ({
    display: "flex",
    gap: 4,
  }));

  const NavbarLink = styled(Button)(() => ({
    padding: 0,
    fontSize: 15,
    color: theme.palette.fontColor.main,
  }));

  return (
    <Navbar>
      {pathnames.map((pathname) => {
        return (
          <NavbarLink variant="text" href={pathname}>
            {pathname.slice(1)}
          </NavbarLink>
        );
      })}
    </Navbar>
  );
};

export default Navbar;

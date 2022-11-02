import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface drawerStateProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavbarMenu = ({ isOpen, setIsOpen }: drawerStateProps) => {
  const theme = useTheme();
  const pathnames = ["#home", "#about", "#work", "#contact"];

  const Navbar = styled(Drawer)(({ theme }) => ({
    "& .MuiDrawer-paper": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const NavbarLink = styled(ListItemText)(() => ({
    padding: 0,
    fontSize: 15,
    fontWeight: 500,
    color: theme.palette.fontColor.main,
  }));

  return (
    <Navbar
      anchor="right"
      open={isOpen}
      onClose={(event, reason) => setIsOpen(false)}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: theme.palette.fontColor.main,
          zIndex: 1,
        }}
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <List
        sx={{
          width: 175,
          paddingTop: 6,
        }}
      >
        {pathnames.map((pathname) => {
          return (
            <ListItem key={pathname.slice(1)}>
              <ListItemButton
                LinkComponent="a"
                href={pathname}
                onClick={() => setIsOpen(false)}
              >
                <NavbarLink
                  primary={pathname.charAt(1).toUpperCase() + pathname.slice(2)}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Navbar>
  );
};

export default MobileNavbarMenu;

/*ADD LIST INSTED OF BUTTONS --- https://mui.com/material-ui/react-drawer/#temporary-drawer */

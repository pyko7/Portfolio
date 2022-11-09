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

  const DownloadLink = styled("a")(() => ({
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: 4,
    color: theme.palette.fontColor.main,
    border: `1px solid ${theme.palette.secondary.dark}`,
    backgroundColor: theme.palette.primary.light,
    fontWeight: 700,
    fontSize: 14,
    textDecoration: "none",
    textTransform: "uppercase",
    lineHeight: 1.5,
    boxShadow:
      "0px 3px 1px -4px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
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
        <ListItem>
          <DownloadLink
            href="/assets/CV_Henry_Julien.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </DownloadLink>
        </ListItem>
      </List>
    </Navbar>
  );
};

export default MobileNavbarMenu;

/*ADD LIST INSTED OF BUTTONS --- https://mui.com/material-ui/react-drawer/#temporary-drawer */

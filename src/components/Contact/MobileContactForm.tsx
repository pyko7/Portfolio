import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "./ContactForm";

interface openState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileContactForm = ({ open, setOpen }: openState) => {
  const theme = useTheme();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        "& 	.MuiDialog-paper": {
          width: 1,
          backgroundColor: theme.palette.primary.light,
          boxShadow: "none",
        },
      }}
    >
      <DialogActions>
        <IconButton onClick={() => handleClose()}>
          <CloseIcon
            fontSize="large"
            sx={{ color: theme.palette.fontColor.main }}
          />
        </IconButton>
      </DialogActions>

      <ContactForm />
    </Dialog>
  );
};

export default MobileContactForm;

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const Footer = styled(Box)({
    width: "100%",
    height: 32,
    textAlign: "center",
  });
  return (
    <Footer component="footer">
      <Typography>Designed and built by Julien Henry, 2022</Typography>
    </Footer>
  );
};

export default Footer;

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Logo = () => {
  const theme = useTheme();
  const isBiggerThanTablet = useMediaQuery(theme.breakpoints.up("md"));

  const Logo = styled(Typography)(({ theme }) => ({
    width: 40,
    height: 40,
    padding: "7px 9px 7px 7px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.fontColor.main,
    fontSize: isBiggerThanTablet ? 38 : 36,
    border: `3px solid ${theme.palette.fontColor.main}`,
    borderRadius: "50%",
  }));

  return (
    <Button href="#home" sx={{ padding: 0 }}>
      <Logo variant="h1">J</Logo>
    </Button>
  );
};

export default Logo;

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Custom404 = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        position: "absolute",
        inset: 0,
        width: 1,
        height: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 700 }}>
        404
      </Typography>
      <Typography sx={{ fontSize: 34, fontWeight: 500 }}>
        Oops... Page not found
      </Typography>
    </Box>
  );
};

export default Custom404;

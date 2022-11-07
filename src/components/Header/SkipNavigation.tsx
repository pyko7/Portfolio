import { useTheme } from "@mui/material/styles";
import React from "react";

const SkipNavigation = () => {
  const theme = useTheme();
  return (
    <a href="#home" style={{ color: theme.palette.primary.main }}>
      Skip to content
    </a>
  );
};

export default SkipNavigation;

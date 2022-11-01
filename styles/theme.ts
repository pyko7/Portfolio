import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    quaternary: Palette["primary"];
    fontColor: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
    quaternary: PaletteOptions["primary"];
    fontColor: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Syne, sans-serif",
  },
  palette: {
    primary: {
      main: "#EBD8B7",
    },
    secondary: {
      main: "#99BBAD",
    },
    tertiary: {
      main: "#9A8194",
    },

    quaternary: {
      main: "#C6A9A3",
    },
    fontColor: {
      main: "#2A2A2A",
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

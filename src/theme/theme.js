import { createTheme } from "@mui/material/styles";
import { lightGreen, deepOrange } from "@mui/material/colors";

const DARK_BG = "#111411";

export const getCustomTheme = (mode, direction) =>
  createTheme({
    direction,
    palette: {
      mode,
      primary: { main: lightGreen[500] },
      secondary: { main: deepOrange[500] },
      ...(mode === "dark" && {
        background: { default: DARK_BG, paper: DARK_BG },
      }),
    },
    typography: {
      fontFamily: ['"Cairo Variable"', "Cairo", "sans-serif"].join(","),
      button: { fontWeight: 700 },
    },
    components: {
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: "none" } },
      },
    },
  });

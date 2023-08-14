import { createTheme } from "@mui/material/styles";
import { josefin, roboto } from "@/font/font";

const theme = {
  typography: {
    fontFamily: josefin.style.fontFamily,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    body1: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "150%",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "150%",
      "@media (max-width:600px)": {
        fontSize: 14,
      },
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "150%",
    },
    h1: {
      fontWeight: 700,
      fontSize: 60,
      lineHeight: "150%",
      "@media (max-width:1200px)": {
        fontSize: 50,
      },
      "@media (max-width:900px)": {
        fontSize: 40,
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: 30,
      lineHeight: "150%",
    },
    h3: {
      fontWeight: 700,
      fontSize: 26,
      lineHeight: "150%",
      "@media (max-width:600px)": {
        fontSize: 18,
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "150%",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

const tomatoRedTheme = createTheme({
  ...theme,
  palette: {
    background: {
      default: "#0f1630",
    },
    primary: {
      main: "#e94a49",
    },
    secondary: {
      main: "#8a8d9b",
    },
    text: {
      primary: "#fff",
    },
  },
});

const yellowGreenTheme = createTheme({
  ...theme,
  palette: {
    background: {
      default: "#111928",
    },
    primary: {
      main: "#9acd32",
    },
    secondary: {
      main: "#8a8d9b",
    },
    text: {
      primary: "#fff",
    },
  },
});

const yellowTheme = createTheme({
  ...theme,
  palette: {
    background: {
      default: "#111928",
    },
    primary: {
      main: "#ffd700",
    },
    secondary: {
      main: "#8a8d9b",
    },
    text: {
      primary: "#fff",
    },
  },
});

const themeMap: any = {
  tomato: tomatoRedTheme,
  yellowGreen: yellowGreenTheme,
  yellow: yellowTheme,
};

export { tomatoRedTheme, yellowGreenTheme, yellowTheme, themeMap };

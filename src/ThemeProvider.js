import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B90FE",
      light: "#FFFFFF",
      heading: "#003A70",
      background: "#F9FCFF",
      outerborder: "#E3F1FF",
    },
    secondary: {
      main: "#F4F9FF",
      light: "#FAFDFD",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#E5E5E5",
        },
        h4: {
          fontSize: "2rem!important",
          fontWeight: "600!important",
        },
        h2: {
          fontSize: "2.25rem!important",
          fontWeight: "600!important",
        },
        h3: {
          fontSize: "2.125rem!important",
          fontWeight: "600!important",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
});

export default function GlobalCssOverride(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
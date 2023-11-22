import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const primaryColor = "#11C111";
const primarySecondary = "#4183d7";

// declare module "@mui/material/styles" {
//     interface Theme {
//         customColors: {
//             main: string;
//         };
//         toast: {
//             loading: string;
//             success: string;
//             error: string;
//         };
//     }

//     // Allow configuration using `createTheme`
//     interface ThemeOptions {
//         customColors: { main: string };
//         toast: {
//             loading: string;
//             success: string;
//             error: string;
//         };
//     }
// }

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1100,
      xl: 1440,
    },
  },
  palette: {
    mode: "dark",
    text: {
      primary: "#767676",
    },
    primary: {
      main: primaryColor,
      contrastText: "#fff",
    },
    secondary: {
      main: primarySecondary,
    },
    background: {
      default: "#111111",
      // paper: "#393939"
      paper: "#0f240f",
    },
  },
  typography: {
    fontFamily: "Rubik",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          color: "white",
          background: "black",
          borderRadius: 0,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: primaryColor,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          color: "white",
          background: "black",
          borderRadius: 0,
          padding: "10px 16px",
          borderWidth: 3,
          borderStyle: "solid",
          borderColor: primaryColor,
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiAccordion: {
      variants: [
        {
          props: { variant: "elevation" },
          style: {
            border: 0,
            background: "rgb(23,41,23)",
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: {
            variant: "standard",
          },
          style: {
            "& *": {
              color: "white",
            },
          },
        },
      ],
    },
    MuiRadio: {
      defaultProps: {
        size: "small",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    // @ts-ignore
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        loadingPosition: "start",
      },
      styleOverrides: {
        // @ts-ignore
        root: ({ ownerState }) => ({
          transition: "padding 300ms ease-in-out",
          ...(ownerState.loading && {
            paddingLeft: "2.5rem",
          }),
        }),
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

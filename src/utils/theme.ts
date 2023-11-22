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
    mode: "light",
    text: {
      primary: "rgba(0,0,0,0.8)",
    },
    primary: {
      main: primaryColor,
      contrastText: "#fff",
    },
    secondary: {
      main: primarySecondary,
    },
    background: {
      // default: "#111111",
      // paper: "#393939"
      // paper: "#0f240f",
    },
  },
  typography: {
    allVariants:{
      color: "rgba(0,0,0,0.8)"
    }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 300,
          height: "calc(100% - 50px)",
          marginTop: 25,
          marginRight: 25,
          borderRadius: 16,
          background: "rgba(255,255,255,1)",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          "@media (max-width: 500px)": {
            height: "calc(100%)",
            marginTop: 0,
            marginRight: 0,
            borderRadius: 0,
            width: "calc(100% - 70px)",
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiCard: {
      defaultProps: {
        // elevation: 0,
      },
      styleOverrides: {
        root: {
          // color: "white",
          // background: "black",
          // borderRadius: 0,
          // padding: "10px 16px",
          // borderWidth: 3,
          // borderStyle: "solid",
          // borderColor: primaryColor,
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

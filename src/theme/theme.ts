import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles';
import colors from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const options: ThemeOptions = {
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
  },

  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontSize: `16px`,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontSize: `16px`,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
      marginBottom: '16px',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          html: {
            fontFamily:
              '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
            WebkitFontSmoothing: 'auto',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: '16px',
          margin: '10px 0 0 0',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
          boxShadow: 'none',
          borderRadius: '10px',
          height: '48px',
          padding: '0px 16px',
          fontSize: '16px',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: colors.white,
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          marginTop: 0,
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        child: {
          backgroundColor: colors.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '23px 16px',
          fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
          '&.Mui-selected': {
            color: colors.black,
            fontWeight: 'bold',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `"Bornomala", "Roboto", "sans-serif" !important`,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {},
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

const theme = responsiveFontSizes(createTheme(options));

export default theme;

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';

interface MuiThemeProps {
    children: React.ReactNode;
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fcae06',
            contrastText: '#fff',
        },
        background: {
            default: grey[100],
            paper: grey[50],
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '8px 16px',
                    textTransform: 'none',
                    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.05)',
                },
            },
        },
    },
});

export const MuiTheme = ({ children }: MuiThemeProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

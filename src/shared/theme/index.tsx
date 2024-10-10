import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { amber, grey } from '@mui/material/colors';

interface MuiThemeProps {
    children: React.ReactNode;
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fcae06',
            contrastText: '#fff',
        },
        secondary: {
            main: amber[700],
        },
        background: {
            default: grey[100],
            paper: grey[50],
        },
    },
    typography: {
        fontFamily: 'Ubuntu, Arial, sans-serif',
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 12,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
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

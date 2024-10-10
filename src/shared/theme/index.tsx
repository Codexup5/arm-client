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
            default: grey[200],
            paper: grey[100],
        },
    },
    typography: {
        fontFamily: 'Ubuntu, Arial, sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
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

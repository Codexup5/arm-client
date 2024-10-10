import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, IconButton, Toolbar } from '@mui/material';

import { DRAWER_WIDTH } from 'widgets/sidebar';

interface HeaderProps {
    onDrawerToggle: () => void;
}
export const Header = ({ onDrawerToggle }: HeaderProps) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
                ml: { sm: `${DRAWER_WIDTH}px` },
            }}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    onClick={onDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

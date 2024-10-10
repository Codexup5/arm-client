import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

import { HeaderAvatar } from './header';

import { DRAWER_WIDTH } from 'widgets/sidebar';

interface HeaderProps {
    onDrawerToggle: () => void;
}
export const Header = ({ onDrawerToggle }: HeaderProps) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                pl: 1,
                pr: 2.5,
                width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
                ml: { sm: `${DRAWER_WIDTH}px` },
            }}>
            <Toolbar disableGutters>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    onClick={onDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <HeaderAvatar />
            </Toolbar>
        </AppBar>
    );
};

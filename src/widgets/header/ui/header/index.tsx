import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Skeleton,
    Tooltip,
    Typography,
} from '@mui/material';

import { NavigationActions, useAuthContext, useUser } from 'entities/user';

export const HeaderAvatar = () => {
    const { name } = useUser() ?? {};

    const { logout } = useAuthContext();

    const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);

    const handleOpenUserMenu = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(e.currentTarget);
    }, []);

    const handleCloseUserMenu = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const renderSettingsMenu = useMemo(() => {
        return NavigationActions.map((item) => (
            <MenuItem key={item.name} onClick={handleCloseUserMenu} component={Link} to={item.path}>
                <Typography textAlign='center'>{item.name}</Typography>
            </MenuItem>
        ));
    }, [handleCloseUserMenu]);

    const renderMenu = useMemo(
        () => (
            <>
                <Tooltip title='Нажмите чтобы открыть меню'>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseUserMenu}>
                    {renderSettingsMenu}

                    <MenuItem key='Выйти' onClick={logout}>
                        <Typography textAlign='center'>Выйти</Typography>
                    </MenuItem>
                </Menu>
            </>
        ),
        [anchorEl, handleCloseUserMenu, handleOpenUserMenu, logout, renderSettingsMenu],
    );

    return (
        <Box sx={{ flexGrow: 0 }}>
            {name ? (
                renderMenu
            ) : (
                <IconButton sx={{ p: 0 }}>
                    <Skeleton width={40} height={40} variant='circular' />
                </IconButton>
            )}
        </Box>
    );
};

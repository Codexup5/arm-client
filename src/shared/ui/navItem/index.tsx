import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Box, Button, ListItem, SxProps, Theme } from '@mui/material';

import { getFirstRoute } from 'shared/lib';
import { theme } from 'shared/theme';

export interface NavItemProps {
    href?: string;
    icon: React.ReactNode;
    title: string;
    buttonStyle?: SxProps<Theme>;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export interface LinkWrapperProps {
    children: React.ReactNode;
    href?: string;
}

const LinkWrapper = ({ children, href }: LinkWrapperProps) =>
    href ? (
        <Link style={{ textDecoration: 'none', width: '100%' }} to={href}>
            {children}
        </Link>
    ) : (
        <>{children}</>
    );

export const NavItem = ({ href, icon, title, buttonStyle, color }: NavItemProps) => {
    const location = useLocation();
    const [active, setActive] = useState(false);

    useEffect(() => {
        const activeStatus = href
            ? getFirstRoute(location.pathname) === getFirstRoute(href)
            : false;
        setActive(activeStatus);
    }, [location.pathname, href, setActive]);

    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 1,
                py: 0,
                px: 1,
            }}>
            <LinkWrapper href={href}>
                <Button
                    variant='contained'
                    startIcon={icon}
                    sx={{
                        backgroundColor: active ? '#fcae06' : 'initial',
                        borderRadius: 1.3,
                        ...(!color && {
                            color: active ? theme.palette.grey[900] : theme.palette.warning.main,
                        }),
                        fontWeight: active ? 'fontWeightBold' : 'initial',
                        justifyContent: 'flex-start',
                        px: 3,
                        textAlign: 'left',
                        fontSize: '16px',
                        textTransform: 'none',
                        width: '100%',
                        '& .MuiButton-startIcon': {
                            color: active ? theme.palette.grey[900] : theme.palette.warning.main,
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255, 0.08)',
                        },
                        ...buttonStyle,
                    }}
                    color={color}>
                    <Box sx={{ flexGrow: 1 }}>{title}</Box>
                </Button>
            </LinkWrapper>
        </ListItem>
    );
};

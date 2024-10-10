import React from 'react';

import { Box } from '@mui/material';

import { Header } from 'widgets/header';
import { DRAWER_WIDTH, Sidebar, useSidebar } from 'widgets/sidebar';

interface LaoyutProps {
    children: React.ReactNode;
}

export const Laoyut = ({ children }: LaoyutProps) => {
    const { mobileOpen, handleDrawerClose, handleDrawerToggle, handleDrawerTransitionEnd } =
        useSidebar();

    return (
        <Box sx={{ display: 'flex' }}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <Sidebar
                mobileOpen={mobileOpen}
                onDrawerClose={handleDrawerClose}
                onDrawerTransitionEnd={handleDrawerTransitionEnd}
            />
            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 9,
                    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
                }}>
                {children}
            </Box>
        </Box>
    );
};

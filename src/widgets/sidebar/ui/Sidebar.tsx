import { Box, Divider, Drawer, Typography } from '@mui/material';
import { NavItem } from 'shared';
import { Navigation } from '../constants';

export const DRAWER_WIDTH = 240;

interface SidebarProps {
    mobileOpen: boolean;
    onDrawerClose: () => void;
    onDrawerTransitionEnd: () => void;
}

export const Sidebar = ({ mobileOpen, onDrawerClose, onDrawerTransitionEnd }: SidebarProps) => {
    const drawerContent = (
        <>
            <Typography variant='h4' align='center' sx={{ p: 2 }} fontWeight={600}>
                VG-ARM
            </Typography>

            <Divider sx={{ mb: 2 }} />
            {Navigation.map((item) => (
                <NavItem key={item.name} icon={item.icon} href={item.path} title={item.name} />
            ))}
        </>
    );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
            aria-label='mailbox folders'>
            <Drawer
                variant='temporary'
                open={mobileOpen}
                onClose={onDrawerClose}
                onTransitionEnd={onDrawerTransitionEnd}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
                }}>
                {drawerContent}
            </Drawer>

            <Drawer
                variant='permanent'
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
                }}
                open>
                {drawerContent}
            </Drawer>
        </Box>
    );
};

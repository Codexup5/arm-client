import { Box, Button, ButtonProps, MenuItem, Menu as MuiMenu } from '@mui/material';
import { LoadingStatus } from 'shared/constants';

interface MenuText {
    buttonText: string | React.ReactNode;
    cancelText: string;
    approveText: string;
}

interface MenuProps {
    anchorEl: HTMLElement | null;
    loadingStatus: LoadingStatus;
    menuText: MenuText;
    buttonProps?: ButtonProps;
    onOpeMenu: (event: React.MouseEvent<HTMLElement>) => void;
    onCloseMenu: () => void;
    onApprove: () => void;
}

export const Menu = ({
    anchorEl,
    loadingStatus,
    menuText,
    buttonProps,
    onOpeMenu,
    onCloseMenu,
    onApprove,
}: MenuProps) => {
    return (
        <Box>
            <Button
                {...buttonProps}
                onClick={onOpeMenu}
                disabled={loadingStatus === LoadingStatus.loading}>
                {menuText.buttonText}
            </Button>
            <MuiMenu
                id='are-you-sure-menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={onCloseMenu}
                MenuListProps={{ onMouseLeave: onCloseMenu }}>
                <MenuItem onClick={onCloseMenu}>{menuText.cancelText}</MenuItem>
                <MenuItem onClick={onApprove}>{menuText.approveText}</MenuItem>
            </MuiMenu>
        </Box>
    );
};

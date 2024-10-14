import { Box, Typography } from '@mui/material';

interface ToolbarProps {
    title?: string;
    button?: React.ReactNode;
    children?: React.ReactNode;
}

export const Toolbar = ({ children, title = '', button = null }: ToolbarProps) => {
    return (
        <Box>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    m: -1,
                }}>
                <Typography sx={{ m: 1, fontWeight: 600 }} variant='h4'>
                    {title}
                </Typography>
                {button && <Box sx={{ m: 1 }}>{button}</Box>}
            </Box>
            <Box sx={{ my: 5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>{children}</Box>
            </Box>
        </Box>
    );
};

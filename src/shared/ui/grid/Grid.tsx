import { Grid2, SxProps, Theme } from '@mui/material';

export interface GridProps {
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    spacing?: number;
}

export const Grid = ({ spacing = 3, children, sx }: GridProps) => {
    return (
        <Grid2 container spacing={spacing} sx={sx}>
            {children}
        </Grid2>
    );
};

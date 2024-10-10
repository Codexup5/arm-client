import { Grid2, styled, SxProps, Theme } from '@mui/material';

export interface GridChildProps {
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    lg?: number;
    md?: number;
    xs?: number;
}

const Item = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const GridChild = ({ lg, md = 6, xs = 12, children, sx }: GridChildProps) => {
    return (
        <Grid2 size={{ lg: lg, md: md, xs: xs }} sx={sx}>
            <Item>{children}</Item>
        </Grid2>
    );
};

import { useMemo } from 'react';

import { Box, BoxProps, styled, Typography } from '@mui/material';

export interface ListItemProps extends BoxProps {
    label?: string | JSX.Element;
    value?: string | JSX.Element;
    proportion?: number;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    color: theme.palette.grey[500],
    flex: 1,
}));

export const ListItem = ({ label, value, proportion = 50, ...props }: ListItemProps) => {
    const renderLabel = useMemo(() => {
        return typeof label === 'string' ? (
            <Typography sx={{ fontSize: '1.1rem' }}>{label}</Typography>
        ) : (
            label
        );
    }, [label]);

    const renderValue = useMemo(() => {
        return typeof value === 'string' ? <StyledTypography>{value}</StyledTypography> : value;
    }, [value]);

    if (!value) {
        return null;
    }

    return (
        <Box
            {...props}
            sx={{
                display: 'flex',
                alignItems: 'center',
                p: '16px 24px',
                ...props.sx,
            }}>
            <Box sx={{ width: `${proportion}%` }}>{renderLabel}</Box>
            <Box sx={{ width: `${100 - proportion}%` }}>{renderValue}</Box>
        </Box>
    );
};

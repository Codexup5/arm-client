import { Divider, TableCell, Typography, TypographyProps } from '@mui/material';

interface DividedCellProps {
    children?: React.ReactNode;
    tag?: TypographyProps['variant'];
}

export const DividedCell = ({ children, tag = 'h6' }: DividedCellProps) => {
    return (
        <TableCell sx={{ position: 'relative' }}>
            <Typography variant={tag} textAlign='center'>
                {children}
            </Typography>
            <Divider
                orientation='vertical'
                sx={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: '60%',
                }}
            />
        </TableCell>
    );
};

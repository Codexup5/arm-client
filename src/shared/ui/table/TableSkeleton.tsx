import { Box, Skeleton, TableCell, TableRow } from '@mui/material';
import { Table } from './Table';

interface TableSkeletonProps {
    headCells?: string[];
    rowsCount?: number;
    colCount?: number;
    withAvatar?: boolean;
    withIndex?: boolean;
}

export const TableSkeleton = ({
    headCells,
    rowsCount = 10,
    colCount = 5,
    withAvatar = false,
    withIndex = false,
}: TableSkeletonProps) => {
    return (
        <Table headCells={headCells}>
            {[...Array(rowsCount).keys()].map((i) => (
                <TableRow hover key={i}>
                    {[...Array(colCount).keys()].map((i) => (
                        <TableCell key={i}>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                }}>
                                {i === 0 && withIndex && <Skeleton width={20} sx={{ mr: 4 }} />}
                                {i === 0 && withAvatar ? (
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                        }}>
                                        <Skeleton width={40} height={40} variant='circular' />
                                    </Box>
                                ) : (
                                    <Skeleton width={70} />
                                )}
                            </Box>
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </Table>
    );
};

import { useMemo } from 'react';

import {
    Box,
    BoxProps,
    Table as MuiTable,
    TableProps as MuiTableProps,
    TableBody,
    TableCell,
    TableHead,
    TableHeadProps,
    TablePaginationProps,
    TableRow,
} from '@mui/material';

import { TablePagination } from './TablePagination';

export interface TableProps {
    headCells?: string[];
    children: React.ReactNode;
    pagination?: TablePaginationProps;
    tableProps?: MuiTableProps;
    tableHeadProps?: TableHeadProps;
    wrapperProps?: BoxProps;
}

export const Table = ({
    headCells,
    children,
    pagination,
    tableProps,
    tableHeadProps,
    wrapperProps,
}: TableProps) => {
    const withHead = useMemo(() => !!(headCells && headCells.length > 0), [headCells]);

    return (
        <>
            <Box {...wrapperProps}>
                <MuiTable {...tableProps}>
                    {withHead && (
                        <TableHead {...tableHeadProps}>
                            <TableRow>
                                {headCells?.map((i, index) => {
                                    return <TableCell key={index}>{i}</TableCell>;
                                })}
                            </TableRow>
                        </TableHead>
                    )}
                    <TableBody>{children}</TableBody>
                </MuiTable>
            </Box>
            {pagination && <TablePagination {...pagination} />}
        </>
    );
};

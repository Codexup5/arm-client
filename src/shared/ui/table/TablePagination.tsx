import {
    TablePaginationProps as MuiTablePaginationProps,
    TablePagination as Pagination,
} from '@mui/material';

export type TablePaginationProps = MuiTablePaginationProps & {
    count: number;
    page: number;
};

export const TablePagination = ({ count, page, ...props }: TablePaginationProps) => {
    return (
        <Pagination
            component='div'
            page={page}
            count={count}
            showFirstButton
            showLastButton
            {...props}
        />
    );
};

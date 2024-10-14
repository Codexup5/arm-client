import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Card, TableCell, TableRow, Typography } from '@mui/material';

import { Employee } from 'entities/employee/model';

import {
    DividedCell,
    EmptyCard,
    getTime,
    LoadingStatus,
    maskPhoneNumber,
    Pagination,
    ROWS_PER_PAGE_VALUE,
    Table,
    TableSkeleton,
} from 'shared';

interface EmployeesTableProps {
    employees: Employee[];
    meta: Pagination;
    loadingStatus: LoadingStatus;
}

export const EmployeesHeadCells = [
    '№',
    '',
    'ФИО',
    'Номер телефона',
    'Департамент',
    'Позиция',
    'Зарпала',
    'Дата устройства на работу',
];

export const EmployeesTable = ({
    employees,
    meta: { limit, page, count = 0, onLimitChange, onPageChange = () => {} },
    loadingStatus,
}: EmployeesTableProps) => {
    const renderContent = useMemo(() => {
        if (employees && employees.length > 0) {
            return (
                <Table
                    headCells={EmployeesHeadCells}
                    pagination={{
                        count,
                        page,
                        rowsPerPage: limit,
                        rowsPerPageOptions: ROWS_PER_PAGE_VALUE,
                        onPageChange,
                        onRowsPerPageChange: onLimitChange,
                        disabled: loadingStatus === LoadingStatus.loading,
                    }}>
                    {employees.slice(0, limit).map((e) => {
                        return (
                            <TableRow hover key={e.id}>
                                <DividedCell>{e.index}</DividedCell>
                                <TableCell>
                                    <Avatar />
                                </TableCell>
                                <TableCell width='25%'>
                                    <Typography
                                        color='textPrimary'
                                        variant='body1'
                                        component={Link}
                                        to={`/employees/${e.id}`}>
                                        {`${e.familyName ?? ''} ${e.name ?? ''} ${
                                            e.patronymic ?? ''
                                        }`}
                                    </Typography>
                                </TableCell>
                                <TableCell>{maskPhoneNumber(e.phoneNumber ?? '')}</TableCell>
                                <TableCell>
                                    <Typography
                                        component='span'
                                        variant='body1'
                                        color='textPrimary'>
                                        {e.department}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        component='span'
                                        variant='body1'
                                        color='textPrimary'>
                                        {e.position}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        component='span'
                                        variant='body1'
                                        color='textPrimary'>
                                        {e.salary} ₸
                                    </Typography>
                                </TableCell>
                                <TableCell>{getTime(e.dateEmployment)}</TableCell>
                            </TableRow>
                        );
                    })}
                </Table>
            );
        }

        if (employees.length === 0 && loadingStatus === LoadingStatus.success) {
            return <EmptyCard>Список сотрудников пуст</EmptyCard>;
        }

        return <TableSkeleton headCells={EmployeesHeadCells} colCount={8} withAvatar />;
    }, [count, limit, loadingStatus, onLimitChange, onPageChange, page, employees]);

    return <Card sx={{ mt: 3, mb: 3, overflow: 'auto' }}>{renderContent}</Card>;
};

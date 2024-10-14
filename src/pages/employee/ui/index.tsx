import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import { useAuthContext } from 'entities/user';
import { EmployeeMainPage, useUpdateEmployee } from 'entities/employee';

import { useFetchEmployee } from 'features/employee';

import { Menu } from 'shared';

export const EmployeePage = () => {
    const { id: employeeId } = useParams();

    const { user } = useAuthContext<string>();
    const { employee, loadingStatus, onDelete, fetchEmployee } = useFetchEmployee(employeeId ?? '');
    const { onUpdate } = useUpdateEmployee();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    useEffect(() => {
        if (employeeId) {
            fetchEmployee();
        }
    }, [fetchEmployee, employeeId]);

    const onOpenDeleteMenu = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (anchorEl !== event.currentTarget) {
                setAnchorEl(event.currentTarget);
            }
        },
        [anchorEl],
    );

    const onCloseDeleteMenu = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const onApproveDelete = useCallback(() => {
        onDelete(employeeId ?? '');
        onCloseDeleteMenu();
    }, [onDelete, employeeId, onCloseDeleteMenu]);

    return (
        <Box
            sx={{
                m: 3,
            }}
            component='section'>
            <Box>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        mb: 2,
                    }}>
                    <Box>
                        <Button component={Link} to='/employees' variant='text'>
                            К сотрудникам
                        </Button>
                    </Box>

                    {user?.role === 'admin' ? (
                        <Menu
                            anchorEl={anchorEl}
                            loadingStatus={loadingStatus}
                            menuText={{
                                buttonText: (
                                    <>
                                        Удалить <DeleteForeverIcon sx={{ ml: 1 }} />
                                    </>
                                ),
                                cancelText: 'Нет, отмена',
                                approveText: 'Да, удалить',
                            }}
                            buttonProps={{
                                'aria-owns': anchorEl ? 'are-you-sure-menu' : undefined,
                                'aria-haspopup': 'true',
                                color: 'error',
                                variant: 'contained',
                                sx: { ml: 2 },
                            }}
                            onOpeMenu={onOpenDeleteMenu}
                            onCloseMenu={onCloseDeleteMenu}
                            onApprove={onApproveDelete}
                        />
                    ) : null}
                </Box>
            </Box>

            <EmployeeMainPage
                employee={employee}
                loadingStatus={loadingStatus}
                onSubmit={onUpdate}
            />
        </Box>
    );
};

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    EmployeesService,
    setEmployee,
    setLoadingStatus,
    useEmployeeState,
} from 'entities/employee';

import { LoadingStatus } from 'shared';

export const useFetchEmployee = (id: string) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { employee, loadingStatus } = useEmployeeState();

    const fetchEmployee = useCallback(async () => {
        dispatch(setLoadingStatus(LoadingStatus.loading));
        try {
            const response = await EmployeesService.getInstance().findOne(id);

            dispatch(setEmployee(response.data));
            dispatch(setLoadingStatus(LoadingStatus.success));

            return { success: true, data: response.data };
        } catch (error) {
            dispatch(setLoadingStatus(LoadingStatus.error));
            return { success: false, data: null };
        }
    }, [dispatch, id]);

    const onDelete = useCallback(
        async (id: string) => {
            try {
                await EmployeesService.getInstance().deleteOne(id);
                navigate('/employees');
            } catch (error) {}
        },
        [navigate],
    );

    return {
        employee,
        loadingStatus,
        fetchEmployee,
        onDelete,
    };
};

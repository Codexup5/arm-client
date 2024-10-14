import { useDispatch } from 'react-redux';

import { EmployeesService } from 'entities/employee/api';
import { Employee, setEmployee, useEmployeeState } from '../EmployeeModel';
import { setLoadingStatus } from '../EmployeesModel';

import { LoadingStatus } from 'shared';

export const useUpdateEmployee = () => {
    const dispatch = useDispatch();

    const { employee } = useEmployeeState();

    const onUpdate = async (id: string, data: Partial<Employee>) => {
        dispatch(setLoadingStatus(LoadingStatus.loading));
        try {
            const response = await EmployeesService.getInstance().updateOneById(id, data);
            dispatch(setEmployee({ ...employee, ...response.data.newFields }));
            dispatch(setLoadingStatus(LoadingStatus.success));

            return { success: true, data: response.data };
        } catch (error) {
            dispatch(setLoadingStatus(LoadingStatus.error));
            return { success: false, data: null };
        }
    };

    return {
        onUpdate,
    };
};

import { useState } from 'react';
import { LoadingStatus } from 'shared';

import { Employee } from '../EmployeeModel';

import { EmployeesService } from 'entities/employee/api';

export const useCreateEmployee = () => {
    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.initial);

    const createEmployee = async (values: Partial<Employee>) => {
        setLoadingStatus(LoadingStatus.loading);
        try {
            const response = await EmployeesService.getInstance().createOne(values);

            setLoadingStatus(LoadingStatus.success);

            return response.data as Employee;
        } catch (error) {
            setLoadingStatus(LoadingStatus.error);
        }
    };

    return {
        loadingStatus,
        createEmployee,
    };
};

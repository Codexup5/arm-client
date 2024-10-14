import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Employee } from '../../EmployeeModel';

import { employeeSchema } from './employeeSchema';

export const useEmployeeValidation = (employee: Employee | null) => {
    const methods = useForm<Employee>({
        resolver: zodResolver(employeeSchema),
    });

    const {
        control,
        register,
        formState: { errors, dirtyFields },
        handleSubmit,
        reset,
        getValues,
        setValue,
    } = methods;

    useEffect(() => {
        if (employee) {
            reset(employee);
        }
    }, [employee, reset]);

    const isContainError = errors && Object.keys(errors).length > 0;

    return {
        control,
        register,
        isContainError,
        formState: { errors, dirtyFields },
        handleSubmit,
        methods,
        getValues,
        setValue,
    };
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { BaseEntity, LoadingStatus } from 'shared';

export interface Employee extends BaseEntity {
    index?: number;
    name: string;
    familyName: string;
    patronymic: string;
    phoneNumber: string;
    department: string;
    position: string;
    salary: number;
    dateEmployment: Date;
}

interface InitialState {
    employee: Employee | null;
    loadingStatus: LoadingStatus;
}

const initialState: InitialState = {
    employee: null,
    loadingStatus: LoadingStatus.initial,
};

export const employeeModel = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setEmployee: (state, { payload }: PayloadAction<Employee | null>) => {
            state.employee = payload;
        },

        setLoadingStatus: (state, { payload }: PayloadAction<LoadingStatus>) => {
            state.loadingStatus = payload;
        },
    },
});

export const useEmployeeState = () => useSelector((state: RootState) => state.employeeReducer);

export const { setEmployee } = employeeModel.actions;

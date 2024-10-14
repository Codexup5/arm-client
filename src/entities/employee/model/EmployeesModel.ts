import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { Employee } from './EmployeeModel';

import { LoadingStatus } from 'shared';

export interface InitialState {
    filter: Partial<Employee>;
    meta: {
        page: number;
        limit: number;
        total: number;
        lastPage: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    };
    employees: Employee[];
    loadingStatus: LoadingStatus;
}

const initialState: InitialState = {
    filter: {},
    meta: {
        limit: 10,
        page: 0,
        total: 0,
        lastPage: 0,
        hasPreviousPage: false,
        hasNextPage: false,
    },
    employees: [],
    loadingStatus: LoadingStatus.initial,
};

export const employeesModel = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setEmployees: (state, { payload }: PayloadAction<Employee[]>) => {
            state.employees = payload;
        },

        setPagination: (state, { payload }: PayloadAction<InitialState['meta']>) => {
            state.meta = { ...state.meta, ...payload };
        },

        setFilter: (state, { payload }: PayloadAction<Pick<InitialState, 'filter'>>) => {
            state.filter = payload.filter;
        },

        setLoadingStatus: (state, { payload }: PayloadAction<LoadingStatus>) => {
            state.loadingStatus = payload;
        },
    },
});

export const useEmployeesState = () => useSelector((state: RootState) => state.employeesReducer);

export const { setEmployees, setPagination, setFilter, setLoadingStatus } = employeesModel.actions;

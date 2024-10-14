import { employeesModel } from 'entities/employee/model/EmployeesModel';
import { userReducerPersisted } from './persistedReducers';
import { employeeModel } from 'entities/employee';

export const entityReducers = {
    userReducer: userReducerPersisted,
    employeesReducer: employeesModel.reducer,
    employeeReducer: employeeModel.reducer,
};

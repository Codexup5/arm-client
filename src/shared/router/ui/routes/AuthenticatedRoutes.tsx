import { EmployeePage } from 'pages/employee';
import { CreateEmployeePage, EmployeesPage } from 'pages/employees';
import { ProfilePage } from 'pages/profile';

export const AuthenticatedRoutes = [
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '/employees',
        element: <EmployeesPage />,
    },
    {
        path: '/employees/:id/',
        element: <EmployeePage />,
    },
    {
        path: '/employees/create',
        element: <CreateEmployeePage />,
    },
];

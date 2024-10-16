import { LoginPage } from 'pages/login';
import { RegisterPage } from 'pages/register';

export const UnAuthenticatedRoutes = [
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
];

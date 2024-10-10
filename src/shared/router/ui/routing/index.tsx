import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthenticatedRoutes, UnAuthenticatedRoutes } from '../routes';

import { renderRoutes } from 'shared/router/lib';

export interface RoutingProps {
    isAuthenticated: boolean;
}

export const Routing = ({ isAuthenticated }: RoutingProps) => {
    const pathname = window.location.pathname;

    const handleUnAuthenticatedRedirect = () => {
        const includedRoute = UnAuthenticatedRoutes.filter((r) => r.path === pathname);

        if (includedRoute.length === 0) {
            return '/login';
        }

        return includedRoute[0].path;
    };

    return (
        <Routes>
            {renderRoutes(isAuthenticated ? AuthenticatedRoutes : UnAuthenticatedRoutes)}
            {isAuthenticated ? (
                <Route path='*' element={<Navigate to='/profile' replace />} />
            ) : (
                <Route
                    path='*'
                    element={<Navigate to={handleUnAuthenticatedRedirect()} replace />}
                />
            )}
        </Routes>
    );
};

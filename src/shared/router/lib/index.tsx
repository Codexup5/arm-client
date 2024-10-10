import { Route } from 'react-router-dom';

export interface PageRoute {
    path: string;
    element: JSX.Element;
}

export const renderRoutes = (routes: PageRoute[]) => {
    return routes.map((r) => {
        return <Route key={r.path} path={r.path} element={r.element} />;
    });
};

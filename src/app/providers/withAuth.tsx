import { AuthProvider } from 'entities/user';

export default function withAuth(Component: React.ComponentType) {
    return function WithAuth(): JSX.Element {
        return (
            <AuthProvider>
                <Component />
            </AuthProvider>
        );
    };
}

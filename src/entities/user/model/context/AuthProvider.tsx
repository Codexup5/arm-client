import { useAuth } from 'features/auth';

import { AuthContext } from './AuthContext';

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const { user, token, isAuthenticated, setLoggedUser, onLogin, logout } = useAuth();

    return (
        <AuthContext.Provider
            value={{
                login: onLogin,
                token,
                isAuthenticated,
                logout,
                user,
                setUser: setLoggedUser,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

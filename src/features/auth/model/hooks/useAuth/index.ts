import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUser, User, useUser } from 'entities/user';

import { useOnCheckMutation } from 'features/auth/api';

import {
    COOKIE_STORAGE_AUTH_KEY,
    CookieToken,
    getCookie,
    getErrorMessage,
    isNotUndefined,
    removeCookie,
    setCookie,
} from 'shared';

export const useAuth = () => {
    const dispatch = useDispatch();
    const [onCheckMutation] = useOnCheckMutation();

    const user = useUser() as User | null;

    const [token, setToken] = useState(() => {
        const { token } = getCookie<CookieToken>(COOKIE_STORAGE_AUTH_KEY) ?? {};

        return token ?? null;
    });

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const { isAuthenticated } = getCookie<CookieToken>(COOKIE_STORAGE_AUTH_KEY) ?? {};

        return isAuthenticated ?? false;
    });

    const setLoggedUser = useCallback(
        (user: Partial<User> | null) => {
            dispatch(setUser(user as User | null));
        },
        [dispatch],
    );

    const checkUser = useCallback(async () => {
        try {
            const response = await onCheckMutation({}).unwrap();

            setLoggedUser(response);

            setIsAuthenticated(true);
        } catch (error) {
            removeCookie(COOKIE_STORAGE_AUTH_KEY);
            setIsAuthenticated(false);

            throw new Error(`checkUser error: ${getErrorMessage(error)}`);
        }
    }, [onCheckMutation, setLoggedUser]);

    const onLogin = (token: string) => {
        setToken(token);

        setCookie(COOKIE_STORAGE_AUTH_KEY, { token, isAuthenticated: true }, 1440);

        checkUser();
    };

    useEffect(() => {
        const { isAuthenticated } = getCookie<CookieToken>(COOKIE_STORAGE_AUTH_KEY) ?? {};

        if (!isNotUndefined(isAuthenticated)) {
            return;
        }

        if (isAuthenticated) {
            setIsAuthenticated(true);
        } else {
            checkUser();
        }
    }, [checkUser, setLoggedUser]);

    const logout = () => {
        setLoggedUser(null);
        setToken(null);
        setIsAuthenticated(false);
        removeCookie(COOKIE_STORAGE_AUTH_KEY);
    };

    return {
        user,
        token,
        isAuthenticated,
        setLoggedUser,
        onLogin,
        logout,
    };
};

import { createContext } from 'react';
import { User } from '../UserModel';

const noop = () => {};

type conditionalToken<token> = token extends string ? string : null;

type isAuthenticated<token> = token extends string ? true : false;

type ConditionalUser<isAuthenticated> = isAuthenticated extends true ? User : null;

export interface AuthContextArgs<token> {
    token: conditionalToken<token>;
    login: (token: string) => void;
    isAuthenticated: isAuthenticated<AuthContextArgs<token>['token']>;
    logout: () => void;
    user: ConditionalUser<AuthContextArgs<token>['isAuthenticated']>;
    setUser: (user: Partial<User> | null) => void;
}

export const AuthContext = createContext<AuthContextArgs<any>>({
    token: null,
    login: noop,
    isAuthenticated: false,
    logout: noop,
    user: null,
    setUser: noop,
});

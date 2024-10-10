import { createApi } from '@reduxjs/toolkit/query/react';

import { User } from 'entities/user';

import { getbaseQuery } from 'shared';

export interface RegisterCredentials
    extends Pick<User, 'name' | 'familyName' | 'email' | 'password' | 'role'> {}
export interface Credentials {
    email: string;
    password: string;
}

interface LoginResponse {
    accessToken: string;
}

const REDUCER_PATH = 'AuthApi';

export const AuthApi = createApi({
    reducerPath: REDUCER_PATH,
    baseQuery: getbaseQuery,
    endpoints: (builder) => ({
        onLogin: builder.mutation<LoginResponse, Credentials>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        onRegister: builder.mutation<User, RegisterCredentials>({
            query: (credentials) => ({
                url: `auth/register?role=${credentials.role}`,
                method: 'POST',
                body: credentials,
            }),
        }),
        onCheck: builder.mutation<User, unknown>({
            query: () => ({
                url: 'auth/check',
                method: 'GET',
            }),
        }),
    }),
});

export const { useOnLoginMutation, useOnRegisterMutation, useOnCheckMutation } = AuthApi;

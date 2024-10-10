import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { CookieToken } from './AxiosConfig';

import { COOKIE_STORAGE_AUTH_KEY } from 'shared/constants';
import { getCookie } from 'shared/lib';

export const getbaseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_CONFIG,
    prepareHeaders: (headers) => {
        const { token } = getCookie<CookieToken>(COOKIE_STORAGE_AUTH_KEY) ?? {};

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

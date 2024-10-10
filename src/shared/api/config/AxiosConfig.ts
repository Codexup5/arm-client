import axios from 'axios';

import { COOKIE_STORAGE_AUTH_KEY } from 'shared/constants';
import { getCookie } from 'shared/lib';

export interface CookieToken {
    token: string;
    isAuthenticated: boolean;
}

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_CONFIG,
});

instance.interceptors.request.use(
    function (config) {
        const { token } = getCookie<CookieToken>(COOKIE_STORAGE_AUTH_KEY) ?? {};

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

const { get, post, put, delete: destroy, patch } = instance;
export { get, post, put, destroy, patch };

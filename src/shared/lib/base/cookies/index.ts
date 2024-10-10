import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export default cookies;

/**
 * Gets the current cookie value
 * @returns Current cookie value
 */
export const getCookie = <T>(name: string): T | undefined => {
    return cookies.get(name);
};

/**
 *
 * @returns Expiration Date
 */
export const setCookie = <T = unknown>(name: string, value: T, minutesExpiration: number): Date => {
    const expirationDate = new Date(new Date().getTime() + minutesExpiration * 60000);

    cookies.set(name, value, {
        path: '/',
        secure: true,
        expires: expirationDate,
    });

    return expirationDate;
};

export const removeCookie = (name: string, options?: CookieSetOptions): void => {
    cookies.remove(name, { ...options, path: '/', secure: true });
};

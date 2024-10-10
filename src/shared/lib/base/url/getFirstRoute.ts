export const getFirstRoute = (url: string): string => {
    return url.replace(/^\/([^/]*).*$/, '$1');
};

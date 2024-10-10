export const isNotUndefined = <T>(arg: T): arg is Exclude<T, undefined> => {
    return arg !== undefined;
};

export const isNotNull = <T>(arg: T): arg is Exclude<T, null> => {
    return arg !== null;
};

import { useEffect, useState } from 'react';

interface useDebaunceArgs {
    value: string;
    delay: number;
}

export const useDebaunce = ({ value, delay }: useDebaunceArgs) => {
    const [debaunceValue, setDebaunceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebaunceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debaunceValue;
};

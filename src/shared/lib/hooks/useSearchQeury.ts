import { useState } from 'react';

import { useDebaunce } from './useDebounce';

export interface SearchQuery {
    query: string;
    debauncedQuery: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const useSearchQeury = (): SearchQuery => {
    const [query, setQuery] = useState('');
    const debauncedQuery = useDebaunce({ value: query, delay: 800 });

    return { query, debauncedQuery, setQuery };
};

import { createApi } from '@reduxjs/toolkit/query/react';

import { User } from '../model';

import { FindSome, getbaseQuery, PaginationResponseData, TableOrder } from 'shared';

const REDUCER_PATH = 'UserApi';

export const UserApi = createApi({
    reducerPath: REDUCER_PATH,
    baseQuery: getbaseQuery,
    endpoints: (builder) => ({
        findSomeUsers: builder.mutation<PaginationResponseData<User>, FindSome>({
            query: ({ page, limit, searchBy, relations = '' }) => {
                const urlQueries = new URLSearchParams({
                    page: page.toString(),
                    limit: limit.toString(),
                    order: TableOrder.DESC,
                    skip: (page * limit).toString(),
                    ...(searchBy && { searchBy }),
                    ...(relations && { relations }),
                }).toString();

                return {
                    url: `users/filter?${urlQueries}`,
                    method: 'GET',
                };
            },
        }),
    }),
});

export const { useFindSomeUsersMutation } = UserApi;

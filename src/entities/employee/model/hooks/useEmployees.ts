import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { EmployeesService } from 'entities/employee/api';

import { Employee } from '../EmployeeModel';

import {
    setEmployees,
    setLoadingStatus,
    setPagination,
    useEmployeesState,
} from '../EmployeesModel';

import {
    countOrdinalNumber,
    FindSome,
    getErrorInstance,
    isNotNull,
    LoadingStatus,
    PaginationResponseData,
    ResolvedPromiseResponse,
    useSearchQeury,
} from 'shared';

export const useEmployees = () => {
    const dispatch = useDispatch();

    const { employees, meta, filter, loadingStatus } = useEmployeesState();
    const { page, limit, total } = meta;

    const { query, debauncedQuery, setQuery } = useSearchQeury();

    const setEmployeesData = useCallback(
        (employees: Employee[]) => {
            dispatch(setEmployees(employees));
        },
        [dispatch],
    );

    const setTotal = useCallback(
        (total: number) => {
            dispatch(setPagination({ ...meta, total }));
        },
        [dispatch, meta],
    );

    const onLimitChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            dispatch(setPagination({ ...meta, limit: parseInt(event.target.value, 10), page: 0 }));
        },
        [dispatch, meta],
    );

    const onPageChange = useCallback(
        (_event: React.MouseEvent<HTMLButtonElement>, page: number) => {
            dispatch(setPagination({ ...meta, page }));
        },
        [dispatch, meta],
    );

    const fetchEmployees = useCallback(
        async ({
            searchBy = '',
            page,
            limit,
            relations,
            filters,
        }: FindSome): Promise<ResolvedPromiseResponse<PaginationResponseData<Employee> | null>> => {
            dispatch(setLoadingStatus(LoadingStatus.loading));

            try {
                const response = await EmployeesService.getInstance().findSome({
                    searchBy,
                    page,
                    limit,
                    relations,
                    filters: filters,
                });

                if (
                    !isNotNull<ResolvedPromiseResponse<PaginationResponseData<Employee>>['data']>(
                        response.data,
                    )
                ) {
                    return { success: true, data: null, status: response.status };
                }

                setEmployeesData(
                    response.data.data.map((e, index) => ({
                        ...e,
                        index: countOrdinalNumber({
                            portion: limit,
                            numberDigit: response.data.meta.page - 1,
                            ordinalValue: index + 1,
                        }),
                    })),
                );
                setTotal(response.data.meta.total);
                dispatch(setLoadingStatus(LoadingStatus.success));

                return { success: true, data: response.data, status: response.status };
            } catch (error) {
                setLoadingStatus(LoadingStatus.error);
                const errorInstance = getErrorInstance(error);
                return { success: false, data: null, status: errorInstance.response.status };
            }
        },
        [dispatch, setEmployeesData, setTotal],
    );

    useEffect(() => {
        fetchEmployees({
            searchBy: debauncedQuery,
            page,
            limit,
            relations: '',
            filters: filter,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debauncedQuery, filter, limit, page]);

    return {
        employees,
        meta: {
            limit,
            page,
            count: total,
            onLimitChange,
            onPageChange,
            setCount: setTotal,
        },
        search: {
            query,
            debauncedQuery,
            setQuery,
        },
        loadingStatus,
    };
};

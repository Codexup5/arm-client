import { Employee } from 'entities/employee/model';
import {
    destroy,
    FindSome,
    get,
    PaginationResponseData,
    patch,
    post,
    ResolvedPromiseResponse,
    TableOrder,
} from 'shared';

export interface FindSomeProduct extends Pick<FindSome, 'limit' | 'page' | 'relations'> {
    searchBy: string;
    filter?: Partial<Employee>;
}

const EMPLOYEES_ROUTE = 'employees';

export class EmployeesService {
    private static instance: EmployeesService;

    static getInstance(): EmployeesService {
        if (!this.instance) {
            this.instance = new EmployeesService();
        }

        return this.instance;
    }

    async createOne(data: Partial<Employee>) {
        return await post(`${EMPLOYEES_ROUTE}/create`, data);
    }

    async findAll() {
        return await get(`${EMPLOYEES_ROUTE}/`);
    }

    async findSome({
        page,
        limit,
        searchBy = '',
        relations = '',
    }: FindSome): Promise<ResolvedPromiseResponse<PaginationResponseData<Employee>>> {
        const urlQueries = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            order: TableOrder.DESC,
            skip: (page * limit).toString(),
            ...(searchBy && { searchBy }),
            ...(relations && { relations }),
        }).toString();

        return await get(`${EMPLOYEES_ROUTE}/filter?${urlQueries}`);
    }

    async findOne(id: string) {
        return await get(`${EMPLOYEES_ROUTE}/${id}`);
    }

    async updateOneById(id: string, data: Partial<Employee>) {
        return await patch(`${EMPLOYEES_ROUTE}/${id}`, data);
    }

    async archiveOneById(id: string) {
        return await destroy(`${EMPLOYEES_ROUTE}/${id}/archive`);
    }

    async restoreFromArchive(id: string) {
        return await post(`${EMPLOYEES_ROUTE}/${id}/restore`);
    }

    async deleteOne(id: string) {
        return await destroy(`${EMPLOYEES_ROUTE}/${id}`);
    }
}

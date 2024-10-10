import { User } from 'entities/user/model';
import { destroy, get, post, ResolvedPromiseResponse } from 'shared';

const USERS_ROUTE = 'users';

export class UsersService {
    private static instance: UsersService;

    static getInstance(): UsersService {
        if (!this.instance) {
            this.instance = new UsersService();
        }

        return this.instance;
    }

    async createOne(data: User) {
        return await post(`${USERS_ROUTE}/`, data);
    }

    async findAll(): Promise<User> {
        return await get(`${USERS_ROUTE}`);
    }

    async findOne(id: string): Promise<ResolvedPromiseResponse<User>> {
        return await get(`${USERS_ROUTE}/${id}`);
    }

    async updateOne(id: string, data: User): Promise<ResolvedPromiseResponse<User>> {
        return await post(`${USERS_ROUTE}/${id}`, data);
    }

    async deleteOneById(id: string) {
        return await destroy(`${USERS_ROUTE}/${id}`);
    }
}

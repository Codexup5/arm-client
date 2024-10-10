import { AuthApi } from 'features/auth';

export const featureReducers = {
    [AuthApi.reducerPath]: AuthApi.reducer,
};

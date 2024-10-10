import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { UserApi } from 'entities/user';
import { AuthApi } from 'features/auth';

import { entityReducers } from './entityReducers';
import { featureReducers } from './featureReducers';

const apiReducers = {
    [UserApi.reducerPath]: UserApi.reducer,
};

const rootReducer = combineReducers({
    ...featureReducers,
    ...entityReducers,
    ...apiReducers,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }).concat(AuthApi.middleware, UserApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

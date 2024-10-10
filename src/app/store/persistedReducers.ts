import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { USER_SLICE_NAME, userModel } from 'entities/user';

const userPersistConfig = {
    key: USER_SLICE_NAME,
    storage,
};

export const userReducerPersisted = persistReducer(userPersistConfig, userModel.reducer);

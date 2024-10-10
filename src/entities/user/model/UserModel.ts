import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { Role } from '../constants';

export interface User {
    index?: number;
    id: string;
    name: string;
    familyName: string;
    patronymic: string;
    email: string;
    password: string;
    role: Role;
    registrationDate: Date;
    updateDate: Date;
}

export interface InitialState {
    user: Partial<User> | null;
}

export const USER_SLICE_NAME = 'user';

export const initialState: InitialState = {
    user: null,
};

export const userModel = createSlice({
    name: USER_SLICE_NAME,
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<Partial<User | null>>) => {
            state.user = payload;
        },

        updateUser: (state, { payload }: PayloadAction<Partial<User>>) => {
            state.user = { ...state.user, ...payload };
        },
    },
});

export const useUser = () => useSelector((state: RootState) => state.userReducer.user);

export const { setUser, updateUser } = userModel.actions;

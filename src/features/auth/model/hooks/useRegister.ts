import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { object, string } from 'zod';

import { Role } from 'entities/user';

import { RegisterCredentials, useOnRegisterMutation } from 'features/auth/api';

import { MIN_LENGTH_MESSAGE, REQUIRED_MESSAGE, WRONG_DATA_TYPE_MESSAGE } from 'shared';

export const REGISTER_SCHEMA = object({
    name: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),

    familyName: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),

    email: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    })
        .email('Введите почту корректно')
        .min(1, MIN_LENGTH_MESSAGE),

    password: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    })
        .min(7, 'Минимальная длина 7 символов!')
        .max(50),
});

export const useRegister = () => {
    const {
        control,
        formState: { errors },
        handleSubmit,
        setValue,
        getValues,
        register,
        reset,
    } = useForm<RegisterCredentials>({
        resolver: zodResolver(REGISTER_SCHEMA),
        defaultValues: {
            name: '',
            familyName: '',
            email: '',
            password: '',
        },
    });

    const [newUserId, setNewUserId] = useState('');
    const [onRegisterMutation, { isLoading, error }] = useOnRegisterMutation();

    const onRegister = async (data: RegisterCredentials, role: Role) => {
        try {
            const user = await onRegisterMutation({ ...data, role }).unwrap();

            reset({
                name: '',
                email: '',
                password: '',
            });

            setNewUserId(user.id);
        } catch (error) {
            console.log(error);
        }
    };

    return {
        newUserId,
        isLoading,
        error,
        control,
        formState: { errors },
        register,
        setValue,
        getValues,
        handleSubmit,
        onRegister,
    };
};

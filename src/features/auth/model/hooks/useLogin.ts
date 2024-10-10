import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { object, string } from 'zod';

import { useAuthContext } from 'entities/user';

import { Credentials, useOnLoginMutation } from 'features/auth/api';

export const LOGIN_SCHEMA = object({
    email: string({
        required_error: 'Email - обязателеное поле!',
        invalid_type_error: 'Email должен быть строкой!',
    }).min(4, 'Минимальная длина - 4 символов!'),

    password: string({
        required_error: 'Необходимо ввести текущий пароль!',
        invalid_type_error: 'Пароль должен быть строкой!',
    })
        .min(7, 'Минимальная длина 7 символов!')
        .max(50),
});

export const useLogin = () => {
    const {
        control,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<Credentials>({
        resolver: zodResolver(LOGIN_SCHEMA),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const { login } = useAuthContext();
    const [onLoginMutation, { isLoading }] = useOnLoginMutation();

    const isContainError = errors && Object.keys(errors).length > 0;

    const onLogin = async (data: Credentials) => {
        try {
            const response = await onLoginMutation(data).unwrap();

            login(response.accessToken);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = handleSubmit(async (value: Credentials) => {
        const loginData = { ...value };
        await onLogin(loginData);
    });

    return {
        isContainError,
        isLoading,
        control,
        formState: { errors },
        register,
        onSubmit,
    };
};

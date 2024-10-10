import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { profileSchema } from 'entities/profile/constants';

import { User } from 'entities/user';

export const useProfileValidation = (user: User) => {
    const methods = useForm<typeof user>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            ...user,
        },
    });

    const {
        formState: { errors, dirtyFields },
        handleSubmit,
        register,
        getValues,
        setValue,
        reset,
    } = methods;

    const isContainError = errors && Object.keys(errors).length > 0;

    return {
        isContainError,
        formState: { errors, dirtyFields },
        handleSubmit,
        register,
        getValues,
        setValue,
        reset,
    };
};

import { useAuthContext, User, UsersService } from 'entities/user';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getErrorInstance, LoadingStatus } from 'shared';

export const useProfile = () => {
    const { user, setUser } = useAuthContext<string>();

    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.initial);

    const navigate = useNavigate();

    const onUpdate = useCallback(
        async (data: User) => {
            setLoadingStatus(LoadingStatus.loading);
            try {
                const response = await UsersService.getInstance().updateOne(user.id, data);
                navigate(`/profile`);

                setUser({ ...user, ...response.data });
                setLoadingStatus(LoadingStatus.success);

                return { success: true, data: response.data, status: response.status };
            } catch (error) {
                setLoadingStatus(LoadingStatus.error);
                const errorInstance = getErrorInstance(error);

                return { success: false, data: null, status: errorInstance.response.status };
            }
        },
        [user, navigate, setUser],
    );

    return {
        user,
        loadingStatus,
        onUpdate,
    };
};

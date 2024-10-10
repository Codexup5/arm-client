import { useContext } from 'react';

import { AuthContext, AuthContextArgs } from './AuthContext';

export const useAuthContext = <T>() => {
    return useContext<AuthContextArgs<T>>(AuthContext);
};

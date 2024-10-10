import { LoginForm } from 'features/auth';

import { AuthTemplate } from 'shared';

export const LoginPage = () => {
    return (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
};

import { RegisterForm } from 'features/auth';

import { AuthTemplate } from 'shared';

export const RegisterPage = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

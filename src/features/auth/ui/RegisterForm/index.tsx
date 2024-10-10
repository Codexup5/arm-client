import { Link, useNavigate } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Divider, Typography } from '@mui/material';

import { Role } from 'entities/user';

import { RegisterCredentials, useRegister } from 'features/auth';

import { Grid, GridChild, Input, INTERNAL_SERVER_ERROR_MESSAGE, PasswordInput } from 'shared';

export const RegisterForm = () => {
    const {
        register,
        formState: { errors },
        error,
        isLoading,
        handleSubmit,
        onRegister,
    } = useRegister();

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (value: RegisterCredentials) => {
        const registerCredentials = {
            ...value,
        };
        await onRegister(registerCredentials, Role.HR);
        navigate(`/login`);
    });

    return (
        <Box component='form' onSubmit={onSubmit}>
            <Grid>
                <GridChild
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    md={12}>
                    <Typography variant='h3'>Регистрация</Typography>
                </GridChild>

                <GridChild md={6}>
                    <Input
                        {...register('name')}
                        id='name'
                        type='text'
                        required
                        label='Имя'
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message : ''}
                    />
                </GridChild>

                <GridChild md={6}>
                    <Input
                        {...register('familyName')}
                        id='familyName'
                        type='text'
                        required
                        label='Фамилия'
                        error={!!errors.familyName}
                        helperText={errors.familyName ? errors.familyName.message : ''}
                    />
                </GridChild>

                <GridChild md={12}>
                    <Input
                        {...register('email')}
                        id='email'
                        required
                        type='email'
                        label='Почта'
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                    />
                </GridChild>

                <GridChild md={12}>
                    <PasswordInput
                        {...register('password')}
                        id='password'
                        required
                        label='Пароль'
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ''}
                    />
                </GridChild>

                <GridChild md={12}>
                    <LoadingButton loading={isLoading} variant='contained' fullWidth type='submit'>
                        Создать учетную запись
                    </LoadingButton>

                    {error ? (
                        <Alert color='error' sx={{ mt: 2 }}>
                            {INTERNAL_SERVER_ERROR_MESSAGE}
                        </Alert>
                    ) : null}
                    <Divider sx={{ mt: 3, mb: 0 }} />
                </GridChild>

                <GridChild md={12}>
                    <Button component={Link} to='/login' fullWidth>
                        Авторизация
                    </Button>
                </GridChild>
            </Grid>
        </Box>
    );
};

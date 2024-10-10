import { Link } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import { Box, Button, Divider, Typography } from '@mui/material';

import { useLogin } from 'features/auth/model';

import { Grid, GridChild, Input, PasswordInput } from 'shared';

export const LoginForm = () => {
    const {
        register,
        formState: { errors },
        isLoading,
        isContainError,
        onSubmit,
    } = useLogin();

    return (
        <Box component='form' onSubmit={onSubmit}>
            <Grid>
                <GridChild md={12} lg={12}>
                    <Typography variant='h3' fontWeight={600}>
                        Авторизация
                    </Typography>
                </GridChild>

                <GridChild md={12}>
                    <Input
                        {...register('email')}
                        id='email'
                        required
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
                    <LoadingButton
                        loading={isLoading}
                        variant='contained'
                        disabled={isLoading || isContainError}
                        fullWidth
                        type='submit'>
                        Войти
                    </LoadingButton>

                    <Divider sx={{ mt: 2, mb: 0 }} />
                </GridChild>

                <GridChild md={12}>
                    <Button component={Link} to='/register' fullWidth>
                        Зарегистрироваться
                    </Button>
                </GridChild>
            </Grid>
        </Box>
    );
};

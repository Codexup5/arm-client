import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';

import { Link, useNavigate } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import { Box, Button, Container, Divider, Tooltip, Typography } from '@mui/material';

import { Employee, useCreateEmployee, useEmployeeValidation } from 'entities/employee';

import { Card, Input, InputWalletAdornment, ListItem, LoadingStatus, PhoneInput } from 'shared';

const inputWalletAdornment = {
    startadornment: <InputWalletAdornment />,
};

export const CreateEmployeePage = () => {
    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useEmployeeValidation(null);

    const navigate = useNavigate();

    const { loadingStatus, createEmployee } = useCreateEmployee();

    const submitHandler = async (values: Employee) => {
        const employee = await createEmployee(values);

        if (employee) {
            navigate(`/employees/${employee.id}`);
        }
    };

    return (
        <Box component='form' onSubmit={handleSubmit(submitHandler)}>
            <Container maxWidth='md'>
                <Box>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            mb: 2,
                        }}>
                        <Box>
                            <Button
                                disabled={loadingStatus === LoadingStatus.loading}
                                component={Link}
                                to='/employees'
                                variant='text'>
                                <ArrowBackIcon sx={{ mr: 1 }} />
                                <Typography variant='button'>Назад</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Card
                    subheader='Добавить сотрудника'
                    title='Новый сотрудник'
                    buttons={
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    p: 2,
                                }}>
                                <Tooltip title='Сохранить'>
                                    <LoadingButton
                                        color='success'
                                        type='submit'
                                        variant='contained'
                                        loading={loadingStatus === LoadingStatus.loading}>
                                        Сохранить <DoneIcon sx={{ ml: 1 }} />
                                    </LoadingButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    }>
                    <ListItem
                        label='Имя'
                        value={
                            <Input
                                {...register('name')}
                                id='name'
                                required
                                label='Имя'
                                helperText={errors.name ? errors.name.message : ''}
                                error={!!errors.name}
                            />
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Фамилия'
                        value={
                            <Input
                                {...register('familyName')}
                                id='familyName'
                                required
                                label='Фамилия'
                                variant='filled'
                                helperText={errors.familyName ? errors.familyName.message : ''}
                                error={!!errors.familyName}
                            />
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Телефон'
                        value={
                            <PhoneInput
                                inputProps={{
                                    id: 'phoneNumber',
                                    required: true,
                                    error: !!errors.phoneNumber,
                                    helperText: errors.phoneNumber
                                        ? errors.phoneNumber.message
                                        : '',
                                }}
                                controllerProps={{ control, name: 'phoneNumber' }}
                            />
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Департамент'
                        value={
                            <Input
                                {...register('department')}
                                id='department'
                                required
                                label='Департамент'
                                variant='filled'
                                helperText={errors.department ? errors.department.message : ''}
                                error={!!errors.department}
                            />
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Позиция'
                        value={
                            <Input
                                {...register('position')}
                                id='position'
                                required
                                label='Позиция'
                                helperText={errors.position ? errors.position.message : ''}
                                error={!!errors.position}
                            />
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Зарплата'
                        value={
                            <Input
                                {...register('salary', {
                                    valueAsNumber: true,
                                })}
                                id='salary'
                                required
                                label='Зарплата'
                                variant='filled'
                                helperText={errors.salary ? errors.salary.message : ''}
                                error={!!errors.salary}
                                slotProps={{
                                    input: {
                                        inputProps: inputWalletAdornment,
                                    },
                                }}
                            />
                        }
                    />
                    <Divider />
                </Card>
            </Container>
        </Box>
    );
};

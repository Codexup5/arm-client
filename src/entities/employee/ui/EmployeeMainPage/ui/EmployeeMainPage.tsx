import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Box, Button, Divider, Typography } from '@mui/material';
import { EMPLOYEE_DATA_SECTIONS } from 'entities/employee/constants';

import { Employee, useEmployeeValidation } from 'entities/employee/model';

import {
    Card,
    DetailsSection,
    getTime,
    Grid,
    GridChild,
    Input,
    InputWalletAdornment,
    ListItem,
    LoadingStatus,
    maskPhoneNumber,
    PhoneInput,
    useEditSections,
} from 'shared';
import { EmployeeMainPageSkeleton } from './EmployeeMainPageSkeleton';

const inputWalletAdornment = {
    startadornment: <InputWalletAdornment />,
};

interface EmployeeMainPageProps {
    employee: Employee | null;
    loadingStatus: LoadingStatus;
    onSubmit: (
        id: string,
        employee: Partial<Employee>,
    ) => Promise<{
        success: boolean;
        data: any;
    }>;
}

export const EmployeeMainPage = ({ employee, loadingStatus, onSubmit }: EmployeeMainPageProps) => {
    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useEmployeeValidation(employee);

    const {
        isEditMode,
        setMode,
        setSectionsMode,
        onChangeMode,
        onChangeSectionsMode,
        checkSectionMode,
    } = useEditSections(EMPLOYEE_DATA_SECTIONS);

    const submitHandler = async (values: Employee) => {
        const result = await onSubmit(employee?.id ?? '', values);

        if (result.success) {
            setMode('view');
            setSectionsMode(EMPLOYEE_DATA_SECTIONS);
        }
    };

    const renderEmployeeData = (employee: Employee) => {
        const {
            name,
            familyName,
            patronymic,
            phoneNumber,
            department,
            position,
            salary,
            isArchived,
            createDate,
            lastChangeDate,
        } = employee;

        const namesSectionEditMode = checkSectionMode('names', 'edit');

        const leftColumn = (
            <Box component='form' onSubmit={handleSubmit(submitHandler)}>
                <DetailsSection
                    subheader='Основное'
                    isEditMode={namesSectionEditMode}
                    onClick={() => {
                        onChangeSectionsMode('names', namesSectionEditMode ? 'view' : 'edit');
                    }}>
                    <ListItem
                        label='Имя'
                        value={
                            namesSectionEditMode ? (
                                <Input
                                    {...register('name')}
                                    id='name'
                                    required
                                    label='Имя'
                                    helperText={errors.name ? errors.name.message : ''}
                                    error={!!errors.name}
                                />
                            ) : (
                                name || 'Данные отсутствуют'
                            )
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Фамилия'
                        value={
                            namesSectionEditMode ? (
                                <Input
                                    {...register('familyName')}
                                    id='familyName'
                                    required
                                    label='Фамилия'
                                    variant='filled'
                                    helperText={errors.familyName ? errors.familyName.message : ''}
                                    error={!!errors.familyName}
                                />
                            ) : (
                                familyName || 'Данные отсутствуют'
                            )
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Отчество'
                        value={
                            namesSectionEditMode ? (
                                <Input
                                    {...register('patronymic')}
                                    id='patronymic'
                                    label='Отчество'
                                    helperText={errors.patronymic ? errors.patronymic.message : ''}
                                    error={!!errors.patronymic}
                                />
                            ) : (
                                patronymic || 'Данные отсутствуют'
                            )
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Телефон'
                        value={
                            namesSectionEditMode ? (
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
                            ) : (
                                maskPhoneNumber(phoneNumber) || 'Данные отсутствуют'
                            )
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Департамент'
                        value={
                            namesSectionEditMode ? (
                                <Input
                                    {...register('department')}
                                    id='department'
                                    required
                                    label='Департамент'
                                    variant='filled'
                                    helperText={errors.department ? errors.department.message : ''}
                                    error={!!errors.department}
                                />
                            ) : (
                                department || 'Данные отсутствуют'
                            )
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Позиция'
                        value={
                            namesSectionEditMode ? (
                                <Input
                                    {...register('position')}
                                    id='position'
                                    required
                                    label='Позиция'
                                    helperText={errors.position ? errors.position.message : ''}
                                    error={!!errors.position}
                                />
                            ) : (
                                position || 'Данные отсутствуют'
                            )
                        }
                    />
                    <Divider />

                    <ListItem
                        label='Зарплата'
                        value={
                            namesSectionEditMode ? (
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
                            ) : (
                                `${salary} ₸` || 'Данные отсутствуют'
                            )
                        }
                    />
                    <Divider />
                </DetailsSection>
            </Box>
        );

        const rightColumn = (
            <Box>
                <Card subheader='История'>
                    <ListItem label='Дата создания' value={getTime(createDate)} />
                    <Divider />

                    <ListItem label='Посл. изменения' value={getTime(lastChangeDate)} />
                    <Divider />

                    <ListItem
                        label='Архивный сотрудник'
                        value={<Typography>{isArchived}</Typography>}
                    />
                    <Divider />
                </Card>
            </Box>
        );

        return (
            <Grid>
                <GridChild md={8}>{leftColumn}</GridChild>
                <GridChild md={4}>{rightColumn}</GridChild>
            </Grid>
        );
    };

    return (
        <Box>
            <Card
                subheader={`Режим ${!isEditMode ? 'просмотра' : 'редактирования'} `}
                title='Сотрудник'
                buttons={
                    <Box sx={{ mr: 2 }}>
                        <Button
                            disabled={loadingStatus === LoadingStatus.loading}
                            onClick={onChangeMode}>
                            {!isEditMode ? <EditIcon /> : <VisibilityIcon />}
                        </Button>
                    </Box>
                }
            />

            {employee ? renderEmployeeData(employee) : <EmployeeMainPageSkeleton />}
        </Box>
    );
};

import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Box, Button, Divider } from '@mui/material';

import dayjs from 'dayjs';

import { PROFILE_SECTIONS, ROLES } from 'entities/profile/constants';
import { useProfileValidation } from 'entities/profile/model';
import { User } from 'entities/user';

import { Card, DetailsSection, Grid, GridChild, Input, ListItem, useEditSections } from 'shared';
import { ProfileDetailsSkeleton } from './ProfileDetailsLoader';

interface ProfileDetailsProps {
    user: User;
    loading: boolean;
    onUpdate: (data: User) => Promise<
        | {
              success: boolean;
              data: User;
              status: number;
          }
        | {
              success: boolean;
              data: null;
              status: number;
          }
    >;
}

export const ProfileDetails = ({ user, loading, onUpdate }: ProfileDetailsProps) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useProfileValidation(user);

    const {
        isEditMode,
        setMode,
        setSectionsMode,
        onChangeMode,
        onChangeSectionsMode,
        checkSectionMode,
    } = useEditSections(PROFILE_SECTIONS);

    const submitHandler = async (value: User) => {
        const updateData = { ...value };
        const result = await onUpdate(updateData);

        if (result.success) {
            setMode('view');
            setSectionsMode(PROFILE_SECTIONS);
        }
    };

    const renderProfileData = () => {
        const { name, familyName, patronymic, email, role } = user;

        const profileSectionEditMode = checkSectionMode('profile', 'edit');

        const renderLeftColumn = (
            <Box component='form' onSubmit={handleSubmit(submitHandler)}>
                <DetailsSection
                    subheader='Данные профиля'
                    isEditMode={profileSectionEditMode}
                    onClick={() => {
                        onChangeSectionsMode('profile', profileSectionEditMode ? 'view' : 'edit');
                    }}>
                    <ListItem
                        label='Имя'
                        value={
                            profileSectionEditMode ? (
                                <Input
                                    {...register('name')}
                                    id='name'
                                    label='Имя'
                                    required
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
                            profileSectionEditMode ? (
                                <Input
                                    {...register('familyName')}
                                    id='familyName'
                                    variant='filled'
                                    label='Фамилия'
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
                            profileSectionEditMode ? (
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
                        label='Почта'
                        value={
                            profileSectionEditMode ? (
                                <Input
                                    {...register('email')}
                                    id='email'
                                    label='Почта'
                                    variant='filled'
                                    required
                                    helperText={errors.email ? errors.email.message : ''}
                                    error={!!errors.email}
                                />
                            ) : (
                                email || 'Данные отсутствуют'
                            )
                        }
                    />

                    <Divider />
                </DetailsSection>
            </Box>
        );

        const renderRightColumn = (
            <Box component='form' onSubmit={handleSubmit(submitHandler)}>
                <Card subheader='Права доступа'>
                    <ListItem label='Роль' value={ROLES.find((u) => u.value === role)?.label} />
                </Card>

                <Card subheader='Логи'>
                    <ListItem
                        label='Дата регистрации'
                        value={dayjs(user.registrationDate).format('DD.MM.YYYY')}
                    />
                    <Divider />
                    <ListItem
                        label='Посл.изменения'
                        value={dayjs(user.updateDate).format('DD.MM.YYYY')}
                    />
                </Card>
            </Box>
        );

        return (
            <Grid>
                <GridChild md={8}>{renderLeftColumn}</GridChild>
                <GridChild md={4}>{renderRightColumn}</GridChild>
            </Grid>
        );
    };

    const renderProfileLoading = () => {
        return <ProfileDetailsSkeleton />;
    };

    return (
        <Box>
            <Card
                subheader={`Режим ${!isEditMode ? 'просмотра' : 'редактирования'} `}
                title='Профиль'
                cardContentProps={{ sx: { display: 'flex', justifyContent: 'space-between' } }}
                buttons={
                    <Box sx={{ mr: 2 }}>
                        <Button disabled={loading} onClick={onChangeMode}>
                            {!isEditMode ? <EditIcon /> : <VisibilityIcon />}
                        </Button>
                    </Box>
                }
            />

            {loading ? renderProfileLoading() : renderProfileData()}
        </Box>
    );
};

import EditIcon from '@mui/icons-material/Edit';

import { LoadingButton } from '@mui/lab';
import { Box, Divider, Skeleton } from '@mui/material';

import { Card, Grid, GridChild, ListItem } from 'shared';

export const ProfileDetailsSkeleton = () => {
    const renderLeftColumn = () => (
        <>
            <Card subheader='Данные профиля'>
                <ListItem label='Имя' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Фамилия' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Отчество' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Почта' value={<Skeleton height={30} />} />
                <Divider />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2,
                    }}>
                    <LoadingButton disabled color='primary' variant='contained'>
                        <EditIcon />
                    </LoadingButton>
                </Box>
            </Card>
        </>
    );

    const renderRightColumn = () => (
        <>
            <Card subheader='Права доступа'>
                <ListItem label='Роль' value={<Skeleton height={30} />} />
            </Card>

            <Card subheader='Логи'>
                <ListItem label='Дата регистрации' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Посл.изменения' value={<Skeleton height={30} />} />
            </Card>
        </>
    );

    return (
        <Grid>
            <GridChild md={8}>{renderLeftColumn()}</GridChild>
            <GridChild md={4}>{renderRightColumn()}</GridChild>
        </Grid>
    );
};

import EditIcon from '@mui/icons-material/Edit';

import { LoadingButton } from '@mui/lab';
import { Box, Divider, Skeleton, Tooltip } from '@mui/material';

import { Card, Grid, GridChild, ListItem } from 'shared';

export const EmployeeMainPageSkeleton = () => {
    const leftColumn = (
        <>
            <Card subheader='Портфолио'>
                <ListItem label='Имя' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Фамилия' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Отсчество' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Номер телефона' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Департамент' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Позиция' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Зарплата' value={<Skeleton height={30} />} />
                <Divider />
                <ListItem label='Дата устройства на работу' value={<Skeleton height={30} />} />
                <Divider />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2,
                    }}>
                    <Tooltip title='Редактировать раздел'>
                        <span>
                            <LoadingButton disabled color='primary' variant='contained'>
                                <EditIcon />
                            </LoadingButton>
                        </span>
                    </Tooltip>
                </Box>
            </Card>
        </>
    );

    const rightColumn = (
        <Card subheader='История'>
            <ListItem label='Дата создания' value={<Skeleton height={30} />} />
            <Divider />
            <ListItem label='Посл. изменения' value={<Skeleton height={30} />} />
            <Divider />
            <ListItem label='Архивный сотрудник' value={<Skeleton height={30} />} />
            <Divider />
        </Card>
    );

    return (
        <Grid>
            <GridChild md={8}>{leftColumn}</GridChild>
            <GridChild md={4}>{rightColumn}</GridChild>
        </Grid>
    );
};

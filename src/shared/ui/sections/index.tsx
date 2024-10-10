import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

import { Box, Tooltip } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { Card } from '../card';

interface ProfileDetailsSectionProps {
    isEditMode: boolean;
    subheader: React.ReactNode;
    children: React.ReactNode;
    onClick: () => void;
}

export const DetailsSection = ({
    isEditMode,
    subheader,
    onClick,
    children,
}: ProfileDetailsSectionProps) => {
    return (
        <Card subheader={subheader}>
            {children}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                }}>
                {isEditMode ? (
                    <>
                        <Tooltip title='Отменить редактирование'>
                            <LoadingButton onClick={onClick} color='error' variant='contained'>
                                <ClearIcon />
                            </LoadingButton>
                        </Tooltip>
                        <Tooltip title='Обновить данные'>
                            <LoadingButton
                                color='success'
                                type='submit'
                                variant='contained'
                                sx={{ ml: 2 }}>
                                <DoneIcon />
                            </LoadingButton>
                        </Tooltip>
                    </>
                ) : (
                    <Tooltip title='Редактировать раздел'>
                        <LoadingButton onClick={onClick} color='primary' variant='contained'>
                            <EditIcon />
                        </LoadingButton>
                    </Tooltip>
                )}
            </Box>
        </Card>
    );
};

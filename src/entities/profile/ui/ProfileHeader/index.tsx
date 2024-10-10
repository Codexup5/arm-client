import { Avatar, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface User {
    name: string;
    familyName: string;
    email: string;
}

interface ProfileHeaderProps {
    user: User;
}

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
            }}>
            <Avatar sx={{ width: 80, height: 80 }} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignitems: 'flex-start',
                }}>
                <Typography
                    color='textPrimary'
                    gutterBottom
                    variant='h5'
                    sx={{ ml: 2, fontWeight: '600' }}>
                    {user.name} {user.familyName}
                </Typography>

                <Typography
                    color='textPrimary'
                    gutterBottom
                    variant='h6'
                    sx={{ ml: 2, fontSize: '1rem' }}>
                    <Link to={`mailto:${user.email}`}>{user.email}</Link>
                </Typography>
            </Box>
        </Box>
    );
};

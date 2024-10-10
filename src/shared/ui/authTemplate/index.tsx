import { Box, Card, Container } from '@mui/material';

interface AuthTemplateProps {
    children: React.ReactNode;
}

export const AuthTemplate = ({ children }: AuthTemplateProps) => {
    return (
        <Container
            maxWidth='md'
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
            <Card>
                <Box>{children}</Box>
            </Card>
        </Container>
    );
};

import { Card, CardContent, CardProps, Typography, TypographyProps } from '@mui/material';

interface EmptyCardProps {
    children: React.ReactNode;
    typographyProps?: TypographyProps;
    cardProps?: CardProps;
}

export const EmptyCard = ({ children, typographyProps, cardProps }: EmptyCardProps) => {
    return (
        <Card {...cardProps}>
            <CardContent>
                <Typography variant='h5' {...typographyProps} textAlign='center'>
                    {children}
                </Typography>
            </CardContent>
        </Card>
    );
};

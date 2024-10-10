import {
    Box,
    CardContent,
    CardContentProps,
    CardHeader,
    CardHeaderProps,
    Divider,
    Card as MuiCard,
    CardProps as MuiCardProps,
} from '@mui/material';

interface Cardprops {
    title?: CardHeaderProps['title'];
    subheader?: CardHeaderProps['subheader'];
    children?: React.ReactNode;
    cardProps?: MuiCardProps;
    cardHeaderProps?: CardHeaderProps;
    cardContentProps?: CardContentProps;
    buttons?: React.ReactNode;
}

export const Card = ({
    title,
    subheader,
    children,
    cardProps,
    cardHeaderProps,
    cardContentProps,
    buttons,
}: Cardprops) => {
    return (
        <MuiCard
            sx={{
                mt: 2.5,
            }}
            {...cardProps}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <CardHeader
                    title={title}
                    subheader={subheader}
                    sx={{
                        textAlign: 'left',
                    }}
                    {...cardHeaderProps}
                />

                {buttons ?? <Box />}
            </Box>
            {children && (
                <>
                    <Divider />
                    <CardContent
                        sx={{
                            p: 0,
                            ':last-child': {
                                p: 0,
                            },
                        }}
                        {...cardContentProps}>
                        {children}
                    </CardContent>
                </>
            )}
        </MuiCard>
    );
};

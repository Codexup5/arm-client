import { forwardRef } from 'react';

import { TextField, TextFieldProps } from '@mui/material';

export const Input = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => (
    <TextField ref={ref} fullWidth variant='outlined' {...props} />
));

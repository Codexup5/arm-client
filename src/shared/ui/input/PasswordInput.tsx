import { Visibility, VisibilityOff } from '@mui/icons-material';

import { forwardRef, useCallback, useState } from 'react';

import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';

import { Input } from './Input';

export const PasswordInput = forwardRef<HTMLDivElement, TextFieldProps>(({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword]);

    return (
        <Input
            {...props}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            slotProps={{
                input: {
                    sx: {
                        pr: 1,
                    },
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={togglePasswordVisibility}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                }}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
});

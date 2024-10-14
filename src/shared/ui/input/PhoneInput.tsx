import { TextFieldProps } from '@mui/material';
import { Controller, ControllerProps, FieldValues, Path } from 'react-hook-form';

import { maskPhoneNumber } from 'shared/lib';
import { Input } from './Input';

interface PhoneInputProps<T extends FieldValues> extends JSX.IntrinsicAttributes {
    inputProps: TextFieldProps;
    controllerProps: Partial<ControllerProps<T>>;
}

export const PhoneInput = <T extends FieldValues>({
    controllerProps: { control, name, ...controllerProps },
    inputProps,
}: PhoneInputProps<T>): JSX.Element => {
    return (
        <Controller
            {...controllerProps}
            control={control}
            name={name as Path<T>}
            render={({ field: { ref, value, onChange, onBlur } }) => (
                <Input
                    {...inputProps}
                    ref={ref}
                    type='tel'
                    label='Номер телефона'
                    value={value || ''}
                    onChange={(e) => {
                        onChange(maskPhoneNumber(e.target.value));
                    }}
                    onBlur={onBlur}
                />
            )}
        />
    );
};

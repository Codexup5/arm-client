import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import { InputAdornment, SvgIcon, TextFieldProps } from '@mui/material';

import { Input } from './Input';

type SearchInputProps = TextFieldProps & {
    width?: number;
    onChange: Partial<React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>>;
};

export const SearchInput = ({ width = 500, sx, value, onChange, ...props }: SearchInputProps) => {
    const handleRestSearch = () => {
        onChange({ target: { value: '' } } as unknown as React.ChangeEvent<
            HTMLTextAreaElement | HTMLInputElement
        >);
    };

    return (
        <Input
            sx={{ width, ...sx }}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SvgIcon color='action' fontSize='small'>
                                <SearchIcon />
                            </SvgIcon>
                        </InputAdornment>
                    ),
                    endAdornment: !!value && (
                        <InputAdornment
                            position='start'
                            sx={{ cursor: 'pointer' }}
                            onClick={handleRestSearch}>
                            <SvgIcon color='action' fontSize='medium'>
                                <CloseIcon />
                            </SvgIcon>
                        </InputAdornment>
                    ),
                },
            }}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};

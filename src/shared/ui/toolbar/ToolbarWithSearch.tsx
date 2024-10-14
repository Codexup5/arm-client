import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

import { SearchInput } from '../input';

import { Toolbar } from './Toolbar';

interface ToolbarWithSearchProps {
    title: string;
    inputPlaceHolder: string;
    buttonLink: string;
    buttonText: string;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const ToolbarWithSearch = ({
    title,
    inputPlaceHolder,
    buttonLink,
    buttonText,
    searchQuery,
    setSearchQuery,
}: ToolbarWithSearchProps) => {
    const renderBtn = () => (
        <Button component={Link} to={buttonLink} color='primary' variant='contained' sx={{ ml: 2 }}>
            {buttonText}
        </Button>
    );

    return (
        <>
            <Toolbar title={title} button={renderBtn()}>
                <SearchInput
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    placeholder={inputPlaceHolder}
                />
            </Toolbar>
        </>
    );
};

import { Link } from 'react-router-dom';

import { Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';

interface Tab {
    label: string;
    value: string;
    disabled: boolean;
}

interface TabsProps {
    tabs: Tab[];
    isLink: boolean;
    value: string;
    isQuery?: boolean;
    onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export const Tabs = ({ value, onChange, tabs = [], isLink = false, isQuery }: TabsProps) => {
    const getUrl = (isQuery: TabsProps['isQuery'], link: string): string => {
        return isQuery ? `${link}` : `./../${link}`;
    };
    return (
        <MuiTabs value={value} onChange={onChange} variant='scrollable'>
            {tabs?.map((t) => (
                <MuiTab
                    key={t.label}
                    label={t.label}
                    disabled={t.disabled}
                    value={t.value}
                    component={isLink ? Link : 'div'}
                    to={getUrl(isQuery, t.value)}
                    sx={{
                        ':hover': {
                            textDecoration: 'none',
                        },
                    }}
                />
            ))}
        </MuiTabs>
    );
};

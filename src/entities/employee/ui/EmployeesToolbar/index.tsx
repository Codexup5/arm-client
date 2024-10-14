import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

import { TABS } from 'entities/employee/constants';

import { Tabs, Toolbar } from 'shared';

interface EmployeesToolbarProps {
    tab: string;
    onTabChange: (_event: React.SyntheticEvent, newValue: string) => void;
}

export const EmployeesToolbar = ({ tab, onTabChange }: EmployeesToolbarProps) => {
    const tabs = useMemo(() => TABS, []);

    const renderButton = () => (
        <Button component={Link} to='/employees/create'>
            Добавить нового сотрудника
        </Button>
    );

    return (
        <Toolbar title='Сотрудники' button={renderButton()}>
            <Tabs tabs={tabs} value={tab} onChange={onTabChange} isLink />
        </Toolbar>
    );
};

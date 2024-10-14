import { Secton } from 'shared';

export const TABS = [
    {
        label: 'Все',
        value: 'all',
        disabled: false,
    },
    {
        label: 'Архивные',
        value: 'archival',
        disabled: false,
    },
];

export type SectionName = 'names';

export const EMPLOYEE_DATA_SECTIONS: Array<Secton<SectionName>> = [
    {
        name: 'names',
        mode: 'view',
    },
];

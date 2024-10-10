import { Role } from 'entities/user';

import { Secton } from 'shared';

export type SectionName = 'profile' | 'role';

export const PROFILE_SECTIONS: Array<Secton<SectionName>> = [
    {
        name: 'profile',
        mode: 'view',
    },
    {
        name: 'role',
        mode: 'view',
    },
];

export const ROLES = [
    {
        label: 'HR',
        value: Role.HR,
    },
    {
        label: 'Админ',
        value: Role.Admin,
    },
];

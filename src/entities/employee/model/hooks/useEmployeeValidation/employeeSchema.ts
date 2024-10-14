import { number, object, string } from 'zod';

import { MIN_LENGTH_MESSAGE, REQUIRED_MESSAGE, WRONG_DATA_TYPE_MESSAGE } from 'shared';

export const employeeSchema = object({
    name: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),

    familyName: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),

    patronymic: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).optional(),

    phoneNumber: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(11, 'Минимальная длина - 11 символов!'),

    department: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),

    position: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),

    salary: number({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),
});

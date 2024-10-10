import { MIN_LENGTH_MESSAGE, REQUIRED_MESSAGE, WRONG_DATA_TYPE_MESSAGE } from 'shared';
import { object, string } from 'zod';

export const profileSchema = object({
    name: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),

    familyName: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),

    patronymic: string({
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }),

    email: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),

    role: string({
        required_error: REQUIRED_MESSAGE,
        invalid_type_error: WRONG_DATA_TYPE_MESSAGE,
    }).min(1, MIN_LENGTH_MESSAGE),
});

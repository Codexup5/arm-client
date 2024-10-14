import dayjs from 'dayjs';

export const getTime = (date: Date | dayjs.Dayjs, format: string = 'DD/MM/YYYY') => {
    return dayjs(date).format(format);
};

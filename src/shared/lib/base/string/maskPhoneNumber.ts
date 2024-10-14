const phoneNumberRegex = /(\+{0,1})([7]{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/;

export const maskPhoneNumber = (value: string): string => {
    const x = value.replace(/\D+/g, '').match(phoneNumberRegex);

    if (x) {
        const countryCode = '+7';
        const directionCode = '(' + (!x[3] ? '   ' : x[3]) + ')';
        return !x[4]
            ? countryCode + '(' + x[3]
            : countryCode +
                  directionCode +
                  '-' +
                  x[4] +
                  (!x[5] ? '' : '-' + x[5]) +
                  (!x[6] ? '' : '-' + x[6]);
    }

    return '';
};

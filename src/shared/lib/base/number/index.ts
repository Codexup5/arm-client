interface countOurdinalNumberArgs {
    portion: number;
    numberDigit: number;
    ordinalValue: number;
}

export const countOrdinalNumber = ({
    portion,
    numberDigit,
    ordinalValue,
}: countOurdinalNumberArgs): number => {
    if (numberDigit <= 0) {
        numberDigit = 0;
    }
    return portion * numberDigit + ordinalValue;
};

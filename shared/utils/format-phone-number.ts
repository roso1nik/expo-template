import { commonCountryCodes } from "../config";


export const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, "");

    if (!numbers) return "";

    let countryCode = "";
    let remainingNumbers = numbers;

    for (const code of commonCountryCodes.sort((a, b) => b.length - a.length)) {
        if (numbers.startsWith(code)) {
            countryCode = code;
            remainingNumbers = numbers.slice(code.length);
            break;
        }
    }

    if (!countryCode) {
        countryCode = numbers.slice(0, 3);
        remainingNumbers = numbers.slice(3);
    }

    let formattedValue = `+${countryCode}`;

    if (remainingNumbers.length > 0) {
        formattedValue += ` ${remainingNumbers.slice(0, 3)}`;
    }
    if (remainingNumbers.length > 3) {
        formattedValue += ` ${remainingNumbers.slice(3, 6)}`;
    }
    if (remainingNumbers.length > 6) {
        formattedValue += ` ${remainingNumbers.slice(6, 8)}`;
    }
    if (remainingNumbers.length > 8) {
        formattedValue += ` ${remainingNumbers.slice(8, 10)}`;
    }

    return formattedValue;
};

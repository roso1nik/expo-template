import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

export const dayjsInstance = dayjs;

export const DATE_TIME_DEFAULT_FORMAT = "DD.MM.YYYY - HH:mm:ss";
export const DATE_DEFAULT_FORMAT = "DD.MM.YYYY";
export const TIME_DEFAULT_FORMAT = "HH:mm:ss";

export const FORMAT_DATETIME = (dateISO: string | Date): string => {
    return dayjs(dateISO).format(DATE_TIME_DEFAULT_FORMAT);
};

export const FORMAT_DATE = (dateISO: string | Date): string => {
    return dayjs(dateISO).format(DATE_DEFAULT_FORMAT);
};

export const FORMAT_TIME = (dateISO: string | Date): string => {
    return dayjs(dateISO).format(TIME_DEFAULT_FORMAT);
};

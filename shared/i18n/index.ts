/* eslint-disable import/no-named-as-default-member */

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import ru from "./translations/ru.json";

const fallbackLanguage = "ru";

i18next.use(initReactI18next).init({
    debug: __DEV__,
    fallbackLng: fallbackLanguage,
    resources: {
        ru: {
            translation: ru,
        },
        en: {
            translation: en,
        },
    },
});

export { fallbackLanguage, i18next };


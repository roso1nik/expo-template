import { STORAGE_KEYS } from "@/shared/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
    const { i18n } = useTranslation();
    const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

    useEffect(() => {
        const loadLanguage = async () => {
            try {
                const storedLanguage = await AsyncStorage.getItem(
                    STORAGE_KEYS.LANGUAGE
                );
                if (storedLanguage && storedLanguage !== i18n.language) {
                    await i18n.changeLanguage(storedLanguage);
                }
            } catch (error) {
                console.warn("error loading language:", error);
            } finally {
                setIsLanguageLoaded(true);
            }
        };

        loadLanguage();
    }, [i18n]);

    const changeLanguage = async (lng: string) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.LANGUAGE, lng);
            await i18n.changeLanguage(lng);
        } catch (error) {
            console.warn("error changing language:", error);
        }
    };

    return {
        currentLanguage: i18n.language,
        changeLanguage,
        isLanguageLoaded,
    };
};

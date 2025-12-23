import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export function useReactiveTitles() {
    const { t } = useTranslation();

    const getStackScreenOptions = useCallback(
        (screenKey: string) => {
            return t(`screens.${screenKey}`);
        },
        [t]
    );

    const getTabScreenOptions = useCallback(
        (tabKey: string) => {
            return {
                title: t(`tabs.${tabKey}`),
            };
        },
        [t]
    );

    const getDrawerScreenOptions = useCallback(
        (drawerKey: string) => {
            return {
                title: t(`drawer.${drawerKey}`),
            };
        },
        [t]
    );

    const getTitle = useCallback(
        (key: string) => {
            return t(key);
        },
        [t]
    );

    return {
        t,
        getStackScreenOptions,
        getTabScreenOptions,
        getDrawerScreenOptions,
        getTitle,
    };
}

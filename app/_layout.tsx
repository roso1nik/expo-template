import { i18next } from '@/shared/i18n'
import { useLanguage } from '@/shared/i18n/hooks'
import { QueryProvider } from '@/shared/providers/react-query'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { KeyboardProvider } from 'react-native-keyboard-controller'

export default function RootLayout() {
    const { isLanguageLoaded } = useLanguage()

    useEffect(() => {
        if (isLanguageLoaded) {
            SplashScreen.hide()
        }
    }, [isLanguageLoaded])

    return (
        <ThemeProvider value={DarkTheme}>
            <KeyboardProvider>
                <I18nextProvider i18n={i18next}>
                    <QueryProvider>
                        <Stack />
                    </QueryProvider>
                </I18nextProvider>
            </KeyboardProvider>
        </ThemeProvider>
    )
}

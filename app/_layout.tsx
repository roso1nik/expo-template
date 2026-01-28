import { i18next } from '@/shared/i18n'
import { useLanguage } from '@/shared/i18n/hooks'
import { QueryProvider } from '@/shared/providers/react-query'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
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
                        <BottomSheetModalProvider>
                            <Stack screenOptions={{ headerShown: false }}>
                                <Stack.Screen name={'(tabs)'} options={{}} />
                                <Stack.Screen name={'signIn'} />
                                <Stack.Screen
                                    name="(modal)/settings"
                                    options={{
                                        presentation: 'formSheet',
                                        animation: 'slide_from_bottom',
                                        sheetGrabberVisible: true
                                    }}
                                />
                                <Stack.Screen
                                    name="(modal)/notifications"
                                    options={{
                                        presentation: 'formSheet',
                                        animation: 'slide_from_bottom'
                                    }}
                                />
                            </Stack>
                            <StatusBar style="auto" />
                        </BottomSheetModalProvider>
                    </QueryProvider>
                </I18nextProvider>
            </KeyboardProvider>
        </ThemeProvider>
    )
}

import { useRouter } from 'expo-router'
import { useCallback, useEffect } from 'react'
import { Alert, Linking, Platform } from 'react-native'
import { APP_STORE_URL, APP_VERSION_NUMBER, GOOGLE_PLAY_URL } from '../config'

export const useCheckAppVersion = () => {
    const router = useRouter()

    // get actual app version from server
    const { data, isLoading, isError } = useServiceSettings()

    const checkVersion = useCallback(() => {
        if (isLoading || isError || !data) return

        if (APP_VERSION_NUMBER < Number(data?.data.json?.appVersion)) {
            router.push('/(modal)/get-new-version')
        }
    }, [data, isError, isLoading, router])

    useEffect(() => {
        checkVersion()
    }, [checkVersion])
}

export const handleUpdateApp = () => {
    const storeUrl = Platform.select({
        ios: APP_STORE_URL,
        android: GOOGLE_PLAY_URL,
        default: APP_STORE_URL
    })

    if (storeUrl) {
        Linking.openURL(storeUrl).catch((err) => Alert.alert('Failed to open store:', err))
    }
}

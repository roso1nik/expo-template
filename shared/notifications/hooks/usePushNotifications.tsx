import messaging from '@react-native-firebase/messaging'
import { useEffect } from 'react'
import { PermissionsAndroid, Platform } from 'react-native'
import { useAddFirebaseTokens } from '../api/use-add-firebase-token'

export const useInitPushNotificaionsSettings = () => {
    const { mutate: addFirebaseToken } = useAddFirebaseTokens()

    const requestPermissionAndToken = async () => {
        // Android permission
        if (Platform.OS === 'android' && Platform.Version >= 33) {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)

            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Android: пуши запрещены')
                return
            }
        }
        // iOS permission
        if (Platform.OS === 'ios') {
            const authStatus = await messaging().requestPermission()
            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL

            if (!enabled) return

            await messaging().registerDeviceForRemoteMessages()
        }

        try {
            const token = await messaging().getToken()
            console.log('FCM TOKEN:', token)

            addFirebaseToken({
                token,
                platform: Platform.OS === 'ios' ? 'Ios' : 'Android'
            })
        } catch (error) {
            console.error('Error getting FCM token:', error)
        }
    }

    const setupNotificationHandlers = () => {
        const unsubscribers: (() => void)[] = []

        // Приложение было закрыто
        messaging()
            .getInitialNotification()
            .then((remoteMessage) => {
                if (remoteMessage?.data) {
                    console.log('Cold start:', remoteMessage.data)

                    // ЛОГИКА ОБРАБОТКИ ПУША
                }
            })
            .catch((error) => {
                console.error('Initial notification error:', error)
            })

        // Приложение в фоне
        unsubscribers.push(
            messaging().onNotificationOpenedApp((remoteMessage) => {
                if (remoteMessage?.data) {
                    console.log('Background:', remoteMessage.data)

                    // ЛОГИКА ОБРАБОТКИ ПУША
                }
            })
        )

        // Приложение ОТКРЫТО (foreground)
        unsubscribers.push(
            messaging().onMessage(async (remoteMessage) => {
                console.log('Foreground message:', remoteMessage)
            })
        )

        unsubscribers.push(
            messaging().onTokenRefresh((newToken) => {
                console.log('Token refreshed:', newToken)
                addFirebaseToken({
                    token: newToken,
                    platform: Platform.OS === 'ios' ? 'Ios' : 'Android'
                })
            })
        )

        return () => {
            unsubscribers.forEach((unsubscribe) => unsubscribe())
        }
    }

    useEffect(() => {
        const init = async () => {
            await requestPermissionAndToken()
        }
        init()

        const unsubscribe = setupNotificationHandlers()

        return () => unsubscribe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

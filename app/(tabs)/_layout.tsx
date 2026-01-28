import { useReactiveTitles } from '@/shared/i18n/hooks'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { Platform } from 'react-native'
import 'react-native-reanimated'

export default function RootLayout() {
    const { getStackScreenOptions } = useReactiveTitles()

    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                // tabBarActiveTintColor: colors.primary,
                // tabBarInactiveTintColor: colors.tabBarInactive,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    borderTopWidth: 0,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 8
                },
                headerStyle: {
                    // backgroundColor: colors.headerBackground
                },
                headerTitleStyle: {
                    // color: colors.text,
                    fontWeight: '600'
                },
                tabBarBackground: () => (
                    <BlurView
                        intensity={100}
                        tint={Platform.OS === 'ios' ? 'dark' : 'systemChromeMaterialDark'}
                        style={{
                            flex: 1,
                            overflow: 'hidden',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                    />
                )
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: getStackScreenOptions('main'),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size, focused }) => (
                        <Ionicons name="home" size={size} color={focused ? 'yellow' : 'gray'} />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: getStackScreenOptions('profile'),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size, focused }) => (
                        <Feather name="user" size={size} color={focused ? 'yellow' : 'gray'} />
                    )
                }}
            />
        </Tabs>
    )
}

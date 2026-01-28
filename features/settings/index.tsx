import { APP_VERSION } from '@/shared/config'
import { useThemeColor } from '@/shared/styles'
import { Button, Typography } from '@/shared/ui'
import { ThemeToggleButton } from '@/widgets'
import { useRouter } from 'expo-router'
import { Bell, Moon, User } from 'lucide-react-native'
import { Switch, View } from 'react-native'

export const SettingsList = () => {
    const router = useRouter()

    const colors = useThemeColor()

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                <Typography style={{ fontSize: 24, fontWeight: 600, color: colors.mutedForeground }}>
                    Аккаунт
                </Typography>
                <View
                    style={{
                        backgroundColor: colors.background,
                        padding: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 10,
                        alignItems: 'center',
                        borderColor: colors.muted,
                        borderRadius: colors.radiusCard,
                        borderWidth: 1
                    }}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <User color={colors.mutedForeground} />
                        <Typography style={{ fontSize: 18, fontWeight: 600 }}>Данные аккаунта</Typography>
                    </View>
                    <Button onPress={() => {}}>Изменить</Button>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                <Typography style={{ fontSize: 24, fontWeight: 600, color: colors.mutedForeground }}>
                    Внешний вид
                </Typography>
                <View
                    style={{
                        backgroundColor: colors.background,
                        padding: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 10,
                        alignItems: 'center',
                        borderColor: colors.muted,
                        borderRadius: colors.radiusCard,
                        borderWidth: 1
                    }}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <Moon color={colors.mutedForeground} />
                        <Typography style={{ fontSize: 18, fontWeight: 600 }}>Внешний вид</Typography>
                    </View>
                    <ThemeToggleButton />
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                <Typography style={{ fontSize: 24, fontWeight: 600, color: colors.mutedForeground }}>
                    Уведомления
                </Typography>
                <View
                    style={{
                        backgroundColor: colors.background,
                        padding: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 10,
                        alignItems: 'center',
                        borderColor: colors.muted,
                        borderRadius: colors.radiusCard,
                        borderWidth: 1
                    }}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <Bell color={colors.mutedForeground} />
                        <Typography style={{ fontSize: 18, fontWeight: 600 }}>Push-Уведомления</Typography>
                    </View>
                    <Switch />
                </View>
                <Button onPress={() => {}}>Настройки уведомлений</Button>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 12 }}>
                <Typography style={{ fontSize: 24, fontWeight: 600, color: colors.mutedForeground }}>Прочее</Typography>
                <Button onPress={() => {}}>Конфиденциальность</Button>
            </View>

            <Button
                onPress={() => router.replace('/signIn')}
                style={{ backgroundColor: colors.chart4 }}
                textStyle={{ color: colors.foregroundInvert }}
            >
                Выйти
            </Button>
            <Typography style={{ width: '100%', textAlign: 'center', marginVertical: 12 }}>
                Версия {APP_VERSION}
            </Typography>

            <Button
                onPress={() => router.dismiss()}
                variant="primary"
                style={{ marginTop: 32, marginBottom: 32 }}
                textStyle={{ fontSize: 21 }}
            >
                Назад
            </Button>
        </View>
    )
}

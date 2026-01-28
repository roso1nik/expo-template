import { useThemeColor } from '@/shared/styles'
import { Button, Typography } from '@/shared/ui'
import { NotFound } from '@/widgets'
import { PrimaryCard } from '@/widgets/cards'
import { useRouter } from 'expo-router'
import { Bell, Settings } from 'lucide-react-native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Profile() {
    const { top, bottom } = useSafeAreaInsets()
    const router = useRouter()
    const colors = useThemeColor()

    return (
        <View
            style={{
                marginTop: top,
                paddingBottom: bottom + 105,
                paddingHorizontal: 20,
                paddingVertical: 40,
                display: 'flex',
                gap: 12
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography style={{ fontSize: 32, fontWeight: 800 }}>Профиль</Typography>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                    <Button onPress={() => router.push('/(modal)/notifications')}>
                        <Bell color={colors.foreground} />
                    </Button>
                    <Button onPress={() => router.push('/(modal)/settings')}>
                        <Settings color={colors.foreground} />
                    </Button>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <PrimaryCard>
                    <Typography style={{ fontSize: 24, fontWeight: 600, width: '100%', textAlign: 'center' }}>
                        Имя Фамилия
                    </Typography>
                    <Typography
                        style={{
                            fontSize: 21,
                            fontWeight: 600,
                            width: '100%',
                            textAlign: 'center',
                            color: colors.mutedForeground,
                            marginTop: 10
                        }}
                    >
                        example@mail.com
                    </Typography>
                </PrimaryCard>
                <PrimaryCard>
                    <Typography style={{ fontSize: 24, fontWeight: 600 }}>Активность</Typography>
                    <NotFound />
                </PrimaryCard>
            </View>
        </View>
    )
}

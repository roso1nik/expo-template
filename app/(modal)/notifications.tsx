import { Typography } from '@/shared/ui'
import { NotFound } from '@/widgets'
import { View } from 'react-native'

export default function NotificationsModal() {
    return (
        <View
            style={{
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
                <Typography style={{ fontSize: 32, fontWeight: 800 }}>Уведомления</Typography>
            </View>
            <NotFound />
        </View>
    )
}

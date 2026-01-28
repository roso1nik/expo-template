import { Typography } from '@/shared/ui'
import { View } from 'react-native'

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography>Добро пожаловать в шаблон. Прочитай README перед разработкой!</Typography>
        </View>
    )
}

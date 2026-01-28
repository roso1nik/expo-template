import { useThemeColor } from '@/shared/styles'
import { FC, ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface PrimaryCardProps {
    children: ReactNode
    style?: StyleProp<ViewStyle>
}

export const PrimaryCard: FC<PrimaryCardProps> = ({ children, style }) => {
    const colors = useThemeColor()
    return (
        <View
            style={[
                {
                    backgroundColor: colors.background,
                    padding: 20,
                    borderRadius: colors.radiusCard,
                    borderWidth: 1,
                    borderColor: colors.muted
                },
                style
            ]}
        >
            {children}
        </View>
    )
}

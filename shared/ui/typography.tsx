import { FC, ReactNode } from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { useThemeColor } from '../styles'

interface TypographyProps extends TextProps {
    children: ReactNode
    style?: StyleProp<TextStyle>
}

export const Typography: FC<TypographyProps> = ({ style, children, ...props }) => {
    const colors = useThemeColor()

    return (
        <Text style={[{ color: colors.foreground, fontSize: colors.fontSize }, style]} {...props}>
            {children}
        </Text>
    )
}

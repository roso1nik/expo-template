import { FC, ReactNode } from 'react'
import { ButtonProps, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useThemeColor } from '../styles'

interface ButtonsProps extends Omit<ButtonProps, 'style' | 'title'> {
    children: ReactNode
    variant?: 'default' | 'primary' | 'outline'
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
}

export const Button: FC<ButtonsProps> = ({ variant = 'default', style, textStyle, children, ...props }) => {
    const colors = useThemeColor()

    const getButtonStyle = (): StyleProp<ViewStyle> => {
        const baseStyle: ViewStyle = {
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: colors.radiusButton,
            alignItems: 'center',
            justifyContent: 'center'
        }

        switch (variant) {
            case 'primary':
                return {
                    ...baseStyle,
                    backgroundColor: colors.chart3
                }
            case 'outline':
                return {
                    ...baseStyle,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: colors.chart3
                }
            default:
                return {
                    ...baseStyle,
                    backgroundColor: colors.background
                }
        }
    }

    const getTextStyle = (): StyleProp<TextStyle> => {
        const baseStyle: TextStyle = {
            fontSize: colors.fontSize,
            fontWeight: colors.fontWeightMedium as any
        }

        switch (variant) {
            case 'primary':
                return {
                    ...baseStyle,
                    color: '#000'
                }
            case 'outline':
                return {
                    ...baseStyle,
                    color: colors.foreground
                }
            default:
                return {
                    ...baseStyle,
                    color: colors.foreground
                }
        }
    }

    return (
        <TouchableOpacity style={[getButtonStyle(), style]} activeOpacity={0.8} {...props}>
            <Text style={[getTextStyle(), textStyle]}>{children}</Text>
        </TouchableOpacity>
    )
}

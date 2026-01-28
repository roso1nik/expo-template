import { FC, ReactNode } from 'react'
import { StyleProp, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useThemeColor } from '../styles'

interface InputProps extends Omit<TextInputProps, 'style'> {
    variant?: 'default' | 'filled' | 'outline'
    style?: StyleProp<ViewStyle>
    inputStyle?: StyleProp<TextStyle>
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    onLeftIconPress?: () => void
    onRightIconPress?: () => void
}

export const Input: FC<InputProps> = ({
    variant = 'default',
    style,
    inputStyle,
    leftIcon,
    rightIcon,
    onLeftIconPress,
    onRightIconPress,
    ...props
}) => {
    const colors = useThemeColor()

    const getContainerStyle = (): StyleProp<ViewStyle> => {
        const baseStyle: ViewStyle = {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            borderRadius: colors.radiusInput,
            borderWidth: 1,
            paddingHorizontal: 12,
            paddingVertical: 12
        }

        switch (variant) {
            case 'filled':
                return {
                    ...baseStyle,
                    backgroundColor: colors.bgSecondary,
                    borderColor: colors.muted
                }
            case 'outline':
                return {
                    ...baseStyle,
                    backgroundColor: 'transparent',
                    borderColor: colors.muted + '33'
                }
            default:
                return {
                    ...baseStyle,
                    backgroundColor: colors.bgSecondary,
                    borderColor: colors.muted
                }
        }
    }

    const getInputStyle = (): StyleProp<TextStyle> => {
        return {
            flex: 1,
            height: '100%',
            fontSize: colors.fontSize,
            color: colors.foreground,
            paddingLeft: leftIcon ? 8 : 0,
            paddingRight: rightIcon ? 8 : 0
        }
    }

    const renderIcon = (icon: ReactNode, onPress?: () => void) => {
        if (!icon) return null

        const iconContainerStyle: ViewStyle = {
            paddingHorizontal: 4
        }

        if (onPress) {
            return (
                <TouchableOpacity
                    onPress={onPress}
                    style={iconContainerStyle}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    {icon}
                </TouchableOpacity>
            )
        }

        return <View style={iconContainerStyle}>{icon}</View>
    }

    return (
        <View style={[getContainerStyle(), style]}>
            {renderIcon(leftIcon, onLeftIconPress)}
            <TextInput style={[getInputStyle(), inputStyle]} placeholderTextColor={colors.mutedForeground} {...props} />
            {renderIcon(rightIcon, onRightIconPress)}
        </View>
    )
}

import { useColorScheme, useColorSchemeStore, useThemeColor } from '@/shared/styles'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { Animated, Pressable, StyleSheet, Switch, Text, View } from 'react-native'

export function AnimatedThemeToggle({ style }: { style?: object }) {
    const colorScheme = useColorScheme()
    const { setColorScheme } = useColorSchemeStore()
    const colors = useThemeColor()
    const isDarkMode = colorScheme === 'dark'

    const rotateAnim = React.useRef(new Animated.Value(isDarkMode ? 1 : 0)).current
    const scaleAnim = React.useRef(new Animated.Value(1)).current

    useEffect(() => {
        Animated.spring(rotateAnim, {
            toValue: isDarkMode ? 1 : 0,
            useNativeDriver: true,
            friction: 8,
            tension: 40
        }).start()
    }, [isDarkMode, rotateAnim])

    const toggleTheme = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 0.85,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            })
        ]).start()

        setColorScheme(isDarkMode ? 'light' : 'dark')
    }

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    return (
        <Pressable
            onPress={toggleTheme}
            style={({ pressed }) => [
                styles.animatedToggleButton,
                {
                    backgroundColor: colors.bgSecondary,
                    borderColor: colors.muted,
                    opacity: pressed ? 0.8 : 1
                },
                style
            ]}
        >
            <Animated.View
                style={{
                    transform: [{ rotate: rotation }, { scale: scaleAnim }]
                }}
            >
                {isDarkMode ? (
                    <Ionicons name="sunny" size={24} color="#FDB813" />
                ) : (
                    <Ionicons name="moon" size={24} color="#4A5568" />
                )}
            </Animated.View>
        </Pressable>
    )
}

export function ThemeToggle() {
    const colorScheme = useColorScheme()
    const { colorScheme: storedScheme, setColorScheme } = useColorSchemeStore()
    const isDarkMode = colorScheme === 'dark'
    const colors = useThemeColor()

    const options: {
        value: 'light' | 'dark' | 'system'
        label: string
        icon: keyof typeof Ionicons.glyphMap
    }[] = [
        { value: 'light', label: 'Light', icon: 'sunny' },
        { value: 'dark', label: 'Dark', icon: 'moon' },
        { value: 'system', label: 'System', icon: 'phone-portrait-outline' }
    ]

    return (
        <View
            style={[
                styles.themeToggleContainer,
                {
                    backgroundColor: colors.bgSecondary,
                    borderColor: colors.muted
                }
            ]}
        >
            {options.map((option) => {
                const isSelected = storedScheme === option.value

                return (
                    <Pressable
                        key={option.value}
                        onPress={() => setColorScheme(option.value)}
                        style={[
                            styles.themeToggleOption,
                            {
                                backgroundColor: isSelected
                                    ? colors.primary
                                    : isDarkMode
                                      ? 'rgba(39, 39, 42, 0.5)'
                                      : 'rgba(244, 244, 245, 0.5)'
                            }
                        ]}
                    >
                        <Ionicons
                            name={option.icon}
                            size={20}
                            color={isSelected ? colors.primaryForeground : '#71717A'}
                            style={styles.themeToggleIcon}
                        />
                        <Text
                            style={[
                                styles.themeToggleLabel,
                                {
                                    color: isSelected ? colors.primaryForeground : colors.mutedForeground
                                }
                            ]}
                        >
                            {option.label}
                        </Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

export function ThemeToggleButton({ size = 24 }: { size?: number }) {
    const colorScheme = useColorScheme()
    const { setColorScheme } = useColorSchemeStore()
    const isDarkMode = colorScheme === 'dark'
    const colors = useThemeColor()

    const rotateAnim = React.useRef(new Animated.Value(isDarkMode ? 1 : 0)).current
    const scaleAnim = React.useRef(new Animated.Value(1)).current

    useEffect(() => {
        Animated.spring(rotateAnim, {
            toValue: isDarkMode ? 1 : 0,
            useNativeDriver: true,
            friction: 8,
            tension: 40
        }).start()
    }, [isDarkMode, rotateAnim])

    const toggleTheme = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 0.85,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            })
        ]).start()

        setColorScheme(isDarkMode ? 'light' : 'dark')
    }

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    const iconColor = isDarkMode ? '#FDB813' : '#4A5568'

    return (
        <Pressable
            onPress={toggleTheme}
            style={({ pressed }) => [
                styles.toggleButton,
                {
                    backgroundColor: colors.bgSecondary,
                    borderColor: colors.muted,
                    opacity: pressed ? 0.8 : 1
                }
            ]}
        >
            <Animated.View
                style={{
                    transform: [{ rotate: rotation }, { scale: scaleAnim }]
                }}
            >
                <Ionicons name={isDarkMode ? 'sunny' : 'moon'} size={size} color={iconColor} />
            </Animated.View>
        </Pressable>
    )
}

export function ThemeSwitchToggle() {
    const colorScheme = useColorScheme()
    const { setColorScheme } = useColorSchemeStore()
    const isDarkMode = colorScheme === 'dark'
    const colors = useThemeColor()

    const toggleTheme = (value: boolean) => {
        setColorScheme(value ? 'dark' : 'light')
    }

    return (
        <View
            style={[
                styles.switchToggleContainer,
                {
                    backgroundColor: colors.bgSecondary,
                    borderColor: colors.muted
                }
            ]}
        >
            <View style={styles.switchToggleContent}>
                <Ionicons name={isDarkMode ? 'moon' : 'sunny'} size={24} color={isDarkMode ? '#FDB813' : '#4A5568'} />
                <Text
                    style={[
                        styles.switchToggleLabel,
                        {
                            color: colors.foreground
                        }
                    ]}
                >
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </Text>
            </View>
            <Switch
                value={isDarkMode}
                onValueChange={toggleTheme}
                trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
                thumbColor={isDarkMode ? '#FFFFFF' : '#F3F4F6'}
                ios_backgroundColor="#D1D5DB"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    animatedToggleButton: {
        padding: 12,
        borderRadius: 9999,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1
    },
    themeToggleContainer: {
        flexDirection: 'row',
        gap: 8,
        padding: 8,
        borderRadius: 12,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1
    },
    themeToggleOption: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    themeToggleIcon: {
        marginBottom: 4
    },
    themeToggleLabel: {
        fontSize: 14,
        fontWeight: '500'
    },
    toggleButton: {
        padding: 12,
        borderRadius: 9999,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1
    },
    switchToggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1
    },
    switchToggleContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    switchToggleLabel: {
        fontSize: 16,
        fontWeight: '500'
    }
})

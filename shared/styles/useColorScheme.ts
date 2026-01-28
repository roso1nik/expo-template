import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { useColorScheme as useRNColorScheme } from 'react-native'
import { create } from 'zustand'
import { STORAGE_KEYS } from '../config'

type ColorScheme = 'light' | 'dark' | 'system'

interface ColorSchemeStore {
    colorScheme: ColorScheme
    isLoaded: boolean
    setColorScheme: (scheme: ColorScheme) => void
    loadColorScheme: () => Promise<void>
}

export const useColorSchemeStore = create<ColorSchemeStore>((set) => ({
    colorScheme: 'system',
    isLoaded: false,
    setColorScheme: async (scheme: ColorScheme) => {
        await AsyncStorage.setItem(STORAGE_KEYS.COLOR_SCHEME, scheme)
        set({ colorScheme: scheme })
    },
    loadColorScheme: async () => {
        try {
            const stored = await AsyncStorage.getItem(STORAGE_KEYS.COLOR_SCHEME)
            if (stored) {
                set({ colorScheme: stored as ColorScheme, isLoaded: true })
            } else {
                set({ isLoaded: true })
            }
        } catch (error) {
            console.error('Failed to load color scheme:', error)
            set({ isLoaded: true })
        }
    }
}))

export function useColorScheme() {
    const systemColorScheme = useRNColorScheme()
    const { colorScheme, isLoaded, loadColorScheme } = useColorSchemeStore()

    useEffect(() => {
        if (!isLoaded) {
            loadColorScheme()
        }
    }, [isLoaded, loadColorScheme])

    if (colorScheme === 'system') {
        return systemColorScheme ?? 'light'
    }

    return colorScheme
}

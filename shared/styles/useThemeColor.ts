import { themeColors } from './colors'
import { useColorScheme } from './useColorScheme'

export function useThemeColor() {
    const theme = useColorScheme() ?? 'light'

    return themeColors[theme]
}

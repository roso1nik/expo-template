import { useThemeColor } from '@/shared/styles'
import { Typography } from '@/shared/ui'

export const NotFound = () => {
    const colors = useThemeColor()
    return (
        <Typography style={{ color: colors.mutedForeground, width: '100%', textAlign: 'center', padding: 12 }}>
            Ничего не найдено
        </Typography>
    )
}

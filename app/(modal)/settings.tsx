import { ScrollView, Text, View } from 'react-native'

export default function SettingsModal() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 40
                }}
                contentContainerStyle={{
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
                    <Text style={{ fontSize: 32, fontWeight: 800 }}>Настройки</Text>
                </View>
            </ScrollView>
        </View>
    )
}

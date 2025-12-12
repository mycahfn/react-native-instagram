import { Image } from 'expo-image';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../shared/ThemedText';

export default function CarouselHistoryComponent() {
    return (
        <FlatList
            data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
            contentContainerStyle={{ gap: 26.3 }}
            horizontal
            style={{ paddingHorizontal: 13, paddingVertical: 6 }}
            renderItem={() => {
                return (
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <View style={{ marginTop: 4, marginBottom: 8 }}>
                                <Image source={require('@/assets/images/app/profile.jpeg')} style={styles.history} />
                            </View>
                            <ThemedText type="subtitle">Profile 1</ThemedText>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        height: 72,
    },
    history: {
        width: 78,
        height: 78,
        borderRadius: 99,
        color: 'rgb(245, 245, 245)',
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})


import { ThemedText } from '@/components/shared/ThemedText';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ProfileTopbarComponent() {
  return (
    <View style={styles.layout}>
      <Image source={require("@/assets/icons/add.svg")} style={styles.icon} />
      <ThemedText type='title'>mycahfrn</ThemedText>
      <TouchableOpacity onPress={() => router.push("/configuration")} style={{ padding: 16, paddingHorizontal: 13.6 }}>
        <Image source={require("@/assets/icons/menu.svg")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 17
  },
  icon: {
    width: 24,
    height: 24,
    color: 'rgb(245, 245, 245)',
  }
})
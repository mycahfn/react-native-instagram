import { ThemedText } from '@/components/shared/ThemedText';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export default function ProfileTopbarComponent() {
  return (
    <View style={styles.layout}>
      <Image source={require("@/assets/icons/add.svg")} style={styles.icon} />
      <ThemedText type='title'>mycahfrn</ThemedText>
      <Image source={require("@/assets/icons/menu.svg")} style={styles.icon} />
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
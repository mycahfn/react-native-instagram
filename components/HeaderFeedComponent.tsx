import { ThemedText } from '@/components/shared/ThemedText';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

import styles from '@/styles/styles';

export default function HeaderFeedComponent() {
  const router = useRouter();
  return (
    <View style={styles.layoutHeader}>
      <TouchableOpacity onPress={() => router.push('/add')}>
        <View style={{ paddingVertical: 16, paddingHorizontal: 13.6 }}>
          <Image source={require("@/assets/icons/add.svg")} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <TouchableOpacity>
          <ThemedText style={{ textAlign: "center" }}>Instagram</ThemedText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.push('/notifications')}>
        <View style={{ paddingVertical: 16, paddingHorizontal: 13.6}}>
          <Image source={require("@/assets/icons/favorite.svg")} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

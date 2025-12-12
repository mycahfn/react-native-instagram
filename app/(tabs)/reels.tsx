import { Image } from 'expo-image';
import { View } from 'react-native';


export default function ReelsScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 6.4 }}>
      <Image source={require("@/assets/images/app/feedpost.png")} style={{flex: 1}}/>
    </View>
  )
}
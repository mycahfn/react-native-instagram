import { ThemedText } from '@/components/shared/ThemedText';
import { Image } from 'expo-image';
import { FlatList, View } from 'react-native';

export default function MessageScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 56.7, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 23.3 }}>
        <Image source={require("@/assets/icons/add.svg")} style={{ width: 24, height: 24 }} />
        <ThemedText style={{ fontSize: 22, fontWeight: 600 }}>mycahfrn</ThemedText>
        <Image source={require("@/assets/icons/favorite.svg")} style={{ width: 24, height: 24 }} />
      </View>
      <View style={{ marginHorizontal: 25.5, marginTop: 38.9, justifyContent: "flex-start" }}>
        <Image source={require("@/assets/images/app/profile.jpeg")} style={{ width: 71, height: 71, borderRadius: 999 }} />
        <ThemedText type='subtitle' style={{ marginTop: 4 }}>Tu Nota</ThemedText>
      </View>
      <View style={{ marginVertical: 17.7, marginHorizontal: 12, flexDirection: "row", gap: 18.1, alignItems: "center" }}>
        <Image source={require("@/assets/images/app/profile.jpeg")} style={{ width: 51.8, height: 51.8, borderRadius: 999 }} />
        <View>
          <ThemedText type='username'>Mikael Fernandez</ThemedText>
          <ThemedText type='description'>Activo hace 12 min</ThemedText>
        </View>
      </View>
      <FlatList
        
        ListHeaderComponent={() => <ThemedText style={{fontWeight: 600, marginHorizontal: 12}}>Cuentas para seguir</ThemedText>}
        data={DATA}
        renderItem={({ item, index }) => (
          <View style={{ marginTop: 17.7, marginHorizontal: 12, flexDirection: "row", gap: 18.1, alignItems: "center" }}>
        <Image source={require("@/assets/images/app/profile.jpeg")} style={{ width: 51.8, height: 51.8, borderRadius: 999 }} />
        <View>
          <ThemedText type='username'>{item.username}</ThemedText>
          <ThemedText type='description'>{item.name}</ThemedText>
        </View>
      </View>
        )}
       
      >

      </FlatList>
    </View>
  )
}

const DATA = [{
  username: "mycahfrn",
  name: "Mikael Fernandez"
},
{
  username: "mycahfrn",
  name: "Mikael Fernandez"
},
{
  username: "mycahfrn",
  name: "Mikael Fernandez"
}]
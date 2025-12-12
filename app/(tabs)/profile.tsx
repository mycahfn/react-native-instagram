import ProfileTopbarComponent from '@/components/profile/topbar';
import { ThemedText } from '@/components/shared/ThemedText';
import { Image } from 'expo-image';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constant/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Dimensions } from "react-native";

const GAP = 2;
const SCREEN_WIDTH = Dimensions.get("window").width;

// Fórmula: (ancho_total - gaps) / columnas
const ITEM_SIZE = (SCREEN_WIDTH - GAP * 2) / 3;

const Tab = createMaterialTopTabNavigator();


export default function ProfileScreen() {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ProfileTopbarComponent />
        <View style={styles.container}>
          <View>
            <Image style={styles.profileIcon} source={require('@/assets/images/app/profile.jpeg')} />
          </View>
          <View >
            <ThemedText type='username'>Mikael Fernandez</ThemedText>
            <View style={{ flexDirection: "row", gap: 11, marginTop: 8 }}>
              <View>
                <ThemedText style={{ fontWeight: 600 }}>0</ThemedText>
                <ThemedText type="metadata_1">publicaciones</ThemedText>
              </View>
              <View>
                <ThemedText style={{ fontWeight: 600 }}>0</ThemedText>
                <ThemedText type="metadata_1">seguidores</ThemedText>
              </View>
              <View>
                <ThemedText style={{ fontWeight: 600 }}>0</ThemedText>
                <ThemedText type="metadata_1">seguidos</ThemedText>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 12, columnGap: 8, marginTop: 32, marginBottom: 12 }} >
          <View style={{ flex: 1, backgroundColor: "#363C44", height: 32, borderRadius: 8, justifyContent: "center" }}>
            <ThemedText style={{ color: "#fff", fontWeight: 500, textAlign: "center" }}>Editar Perfil</ThemedText>
          </View>
          <View style={{ flex: 1, backgroundColor: "#363C44", height: 32, borderRadius: 8, justifyContent: "center" }}>
            <ThemedText style={{ color: "#fff", fontWeight: 500, textAlign: "center" }}>Ver archivos</ThemedText>
          </View>
        </View>
        <View style={{ flex: 1, height: 200 }}>
          <Tab.Navigator screenOptions={{
            swipeEnabled: true,
            tabBarShowLabel: false,
            tabBarStyle: [{ backgroundColor: theme.background }],
            sceneStyle: { flex: 1, height: "100%", backgroundColor: theme.background },
            tabBarIndicatorStyle: { backgroundColor: "rgb(245, 245, 245)", height: 2 },
            tabBarLabelStyle: { borderBottomColor: "red", borderBottomWidth: 1, backgroundColor: "red" },
            tabBarIndicatorContainerStyle: { borderBottomColor: "#1b1e23", borderBottomWidth: 1 },

          }}>
            <Tab.Screen key={"posts"} name={"post"} component={() => (
              <FlatList
                data={data_post}
                numColumns={3}
                columnWrapperStyle={{ gap: GAP, marginTop: GAP }}
                keyExtractor={(item, i) => i.toString()}
                renderItem={() => (
                  <Image
                    source={require("@/assets/images/app/feedpost.png")}
                    style={{
                      width: ITEM_SIZE,
                      height: ITEM_SIZE * (4 / 3), // si quieres respetar 4:5
                    }}
                  />
                )}
              />
            )} options={{
              tabBarIcon: () => <Image source={require("@/assets/icons/tag.svg")} style={{ width: 24, height: 24 }} />
            }} />
            <Tab.Screen key={"reels"} name={"reels"} component={() => {

              return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                  <ThemedText type='username' style={{ width: 260, lineHeight: 26, fontWeight: 600, textAlign: "center", fontSize: 24 }} >Comparte un momento con el mundo</ThemedText>
                  <ThemedText style={{ color: "#168CE8", fontSize: 14, marginTop: 8, fontWeight: 600 }}>Crear tu Primer Reel</ThemedText>
                </View>
              )
            }} options={{
              tabBarIcon: () => <Image source={require("@/assets/icons/reels.svg")} style={{ width: 24, height: 24 }} />
            }} />
            <Tab.Screen key={"tag"} name={"tag"} component={() => <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <ThemedText type='username' style={{ width: 260, lineHeight: 26, fontWeight: 600, textAlign: "center", fontSize: 24 }} >Comparte un momento con el mundo</ThemedText>
              <ThemedText style={{ color: "#168CE8", fontSize: 14, marginTop: 8, fontWeight: 600 }}>Crear tu Primer Reel</ThemedText>
            </View>} options={{
              tabBarIcon: () => <Image source={require("@/assets/icons/tag.svg")} style={{ width: 24, height: 24 }} />
            }} />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const data_post = [{}, {}, {}, {}]


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 22
  },
  profileIcon: {
    width: 80,
    height: 80,
    marginHorizontal: 24,
    borderRadius: 9999,
    overflow: 'hidden'
  }
});
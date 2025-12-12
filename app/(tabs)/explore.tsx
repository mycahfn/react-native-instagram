import { ThemedText } from '@/components/shared/ThemedText';
import { TextInput, View } from 'react-native';

export default function ExploreScreen() {

  return (
    <View style={{ marginHorizontal: 12, flex: 1 }} >
      <View style={{ marginBottom: 20.6 }}>
        <TextInput style={{ borderRadius: 8, margin: 0, backgroundColor: "#363636", color: "white", height: 35.5 }}></TextInput>
      </View>
      <View style={{ flex: 1 }}  >
        <View style={{ flex: 1, flexDirection: "row" }} >
          <View style={{ flex: 1 }}>
            <ThemedText>1</ThemedText>
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText>1</ThemedText>
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText>1</ThemedText>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }} >
          <View style={{ flex: 1 }}>
            <ThemedText>1</ThemedText>
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText>1</ThemedText>
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText>1</ThemedText>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }} >
          <View style={{ flex: 1 }}>
            <ThemedText>1</ThemedText>
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText>1</ThemedText>
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText>1</ThemedText>
          </View>
        </View>
      </View>
    </View>
  )
}
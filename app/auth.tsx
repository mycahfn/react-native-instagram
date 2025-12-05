import { ThemedText } from "@/components/shared/ThemedText";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
    return (
        <SafeAreaView>
            <View>
                <ThemedText>AuthScreen</ThemedText>
            </View>
        </SafeAreaView>
    );
}
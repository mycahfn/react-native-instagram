import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./shared/ThemedText";

export default function CreateAccountButton() {
    return (
        <View>
            <TouchableOpacity>
                <ThemedText>
                    Crear cuenta nueva
                </ThemedText>
            </TouchableOpacity>
        </View>
    )
}

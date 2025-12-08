import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./shared/ThemedText";

export default function CreateAccountButton() {
    return (
        <View style={{ flex: 1, justifyContent: "flex-end", width: "100%" }}>
            <TouchableOpacity style={{
                width: "100%",
                height: 50,
                borderRadius: 500,
                borderWidth: 1,
                borderColor: "#5196f0",
                backgroundColor: 'transparent',
                marginBottom: 20,
                justifyContent: "center"
            }}>
                <ThemedText style={{
                    fontWeight: 600,
                    textAlign: "center",
                    letterSpacing: .3,
                    color: "#5196f0"
                }}>
                    Crear cuenta nueva
                </ThemedText>
            </TouchableOpacity>
        </View>
    )
}



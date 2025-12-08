import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./shared/ThemedText";


export default function LanguageSelector() {

    const language = "Español"

    return (
        <View>
            <TouchableOpacity style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", gap: 4 }} onPress={() => console.log('Cambiar idioma')}>
                <ThemedText style={{ fontSize: 14, color: "#a8a8a8" }}>{language}</ThemedText>
                <Image 
                    source={require("@/assets/icons/arrowdown.svg")} 
                    style={{ width: 14, height: 12, transform: [{ rotate: '180deg' }]}} 
                />
            </TouchableOpacity>
        </View>
    )
}
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { ThemedText } from "./shared/ThemedText";


export default function LanguageSelector() {

    const language = "English"

    return (
        <TouchableOpacity  style={{ flexDirection: "row" }} onPress={() => console.log('Cambiar idioma')}>
            <ThemedText>{language}</ThemedText>
            <Feather name="chevron-down" size={18} color="#98a8b5" />
        </TouchableOpacity>
    )
}
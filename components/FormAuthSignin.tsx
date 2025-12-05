import React from "react"
import { TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-paper"
import { ThemedText } from "./shared/ThemedText"

export default function FormAuthSignin() {
    return (
        <View>
            <View>
                <TextInput label="Email" mode="outlined"  />
                <TextInput label="Password" mode="outlined" secureTextEntry={true} />
            </View>
            <View>
                <TouchableOpacity>
                    <ThemedText >Iniciar sesión</ThemedText>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => console.log('Olvidaste tu contraseña')}>
                    <ThemedText>¿Olvidaste la contraseña?</ThemedText>
                </TouchableOpacity>
            </View>
        </View>
    )
}
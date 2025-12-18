import useSignInForm from '@/hooks/useSignInForm'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useState } from "react"
import { ActivityIndicator, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-paper"
import IconComponent from "./shared/IconComponent"
import { ThemedText } from "./shared/ThemedText"


export default function FormAuthSignin() {
    const { name, password, setName, setPassword, handleLogin, handleSignUp, isLoading } = useSignInForm()
    const [showPassword, setShowPassword] = useState(false)
    const [nameFocused, setNameFocused] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false)

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        >
            <View style={{ width: "100%", flex: 1 }}>
                <View style={{ gap: 16 }}>
                    <View style={{ borderRadius: 16, borderWidth: 1, borderColor: nameFocused ? "#A6B2BC" : "#44515b" }}>
                        <TextInput
                            label="Nombre de usuario, correo o celular"
                            mode="flat"
                            style={styles.input}
                            underlineStyle={styles.underlineStyle}
                            activeUnderlineColor="#9EABBA"
                            theme={{ colors: { onSurfaceVariant: '#9EABBA' } }}
                            value={name}
                            onChangeText={setName}
                            onFocus={() => setNameFocused(true)}
                            onBlur={() => setNameFocused(false)}
                            right={<TextInput.Icon
                                style={{ opacity: name && nameFocused && !isLoading ? 1 : 0 }}
                                icon={() => <IconComponent name="close" color='#9EABBA' />}
                                onPress={isLoading ? undefined : () => setName('')}
                            />}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{ borderRadius: 16, borderWidth: 1, borderColor: passwordFocused ? "#A6B2BC" : "#44515b" }}>
                        <TextInput
                            label="Contraseña"
                            mode="flat"
                            style={styles.input}
                            underlineStyle={styles.underlineStyle}
                            activeUnderlineColor='#9EABBA'
                            theme={{ colors: { onSurfaceVariant: '#9EABBA' } }}
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={() => setPasswordFocused(false)}
                            right={<TextInput.Icon
                                style={{ opacity: passwordFocused && !isLoading ? 1 : 0 }}
                                icon={() => showPassword ? (<Ionicons name="eye-outline" size={24} color="#9EABBA" />) : (<Ionicons name="eye-off-outline" size={24} color="#9EABBA" />)}
                                onPress={isLoading ? undefined : () => setShowPassword(prev => !prev)}
                            />}
                            autoCapitalize="none"
                        />
                    </View>
                </View>
                <View style={{ marginTop: 12 }}>
                    <TouchableOpacity
                        style={[styles.signinButton, { opacity: isLoading ? 0.7 : 1 }]}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <ThemedText style={{ fontWeight: 500 }}>Iniciar sesión</ThemedText>
                        )}
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => console.log('Olvidaste tu contraseña')} disabled={isLoading}>
                        <ThemedText style={{ textAlign: "center", opacity: isLoading ? 0.6 : 1 }} >¿Olvidaste la contraseña?</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'transparent',
        fontSize: 14
    },
    inputWrapper: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#44515b"
    },
    underlineStyle: {
        height: 0
    },
    signinButton: {
        width: '100%',
        height: 50,
        backgroundColor: "#0064E0",
        borderRadius: 500, // Usamos 6px para un look más moderno/plano
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    }
});
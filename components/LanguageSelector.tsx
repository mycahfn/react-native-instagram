import Entypo from '@expo/vector-icons/Entypo';
import { Image } from "expo-image";
import { useRef, useState } from "react";
import { Animated, Dimensions, Modal, PanResponder, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ThemedText } from "./shared/ThemedText";

// Componentes simulados (asumo que existen en tu proyecto real)
import IconComponent from "./shared/IconComponent";
const screenHeight = Dimensions.get('window').height;

export default function LanguageSelector() {

    const [language, setLanguage] = useState("Español");
    const [modalVisible, setModalVisible] = useState(false);

    // **NUEVO:** Estado para saber si la lista está arriba del todo
    const [isScrolling, setIsScrolling] = useState(false);

    // La lista está desplazada 0 (arriba) por defecto
    const scrollY = useRef(0);

   const translateY = useRef(new Animated.Value(0)).current;

    const closeBottomSheet = () => {
        Animated.timing(translateY, {
            toValue: screenHeight,
            duration: 250,
            useNativeDriver: true,
        }).start(() => {
            // ¡CORRECCIÓN CLAVE! Ya no reseteamos translateY aquí.
            // Solo lo reseteamos cuando el modal se abre (handleOpenModal)
            // o cuando el arrastre de cierre falla (onPanResponderRelease/else).
            setModalVisible(false);
        });
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => false, // No iniciar el arrastre estático
            // **CLAVE:** Solo tomar el control si el desplazamiento vertical es CERO 
            onMoveShouldSetPanResponder: (_evt, gestureState) => {
                const isDraggingDown = gestureState.dy > 5;
                // Si está arriba (scrollY.current === 0) Y está arrastrando hacia abajo, 
                // entonces el PanResponder debe tomar el control.
                return isDraggingDown && scrollY.current === 0;
            },
            onPanResponderMove: (_evt, gestureState) => {
                if (gestureState.dy > 0) {
                    translateY.setValue(gestureState.dy);
                }
            },
            onPanResponderRelease: (_evt, gestureState) => {
                const shouldClose = gestureState.dy > 120 || gestureState.vy > 0.7;

                if (shouldClose) {
                    closeBottomSheet();
                } else {
                    Animated.spring(translateY, {
                        toValue: 0,
                        useNativeDriver: true,
                        tension: 80,
                        friction: 12,
                    }).start();
                }
            },
        })
    ).current;

    // **NUEVO:** Función para actualizar la posición de desplazamiento
    const handleScroll = (event: any) => {
        // Almacena la posición Y de desplazamiento
        scrollY.current = event.nativeEvent.contentOffset.y;
    };


    const languages = [
        // ... (tu lista de idiomas)
        { code: "es", label: "Español" },
        { code: "en", label: "English" },
        { code: "fr", label: "Français" },
        { code: "de", label: "Deutsch" },
        { code: "zh", label: "中文" },
        { code: "ja", label: "日本語" },
        { code: "fr", label: "Français" },
        { code: "de", label: "Deutsch" },
        { code: "zh", label: "中文" },
        { code: "ja", label: "日本語" },
        { code: "es", label: "Español" },
        { code: "en", label: "English" },
        { code: "fr", label: "Français" },
        { code: "de", label: "Deutsch" },
        { code: "zh", label: "中文" },
        { code: "zh", label: "中文" },
        { code: "ja", label: "日本語" },
        { code: "fr", label: "Français" },
        { code: "de", label: "Deutsch" },
        { code: "zh", label: "中文" },
        { code: "ja", label: "日本語" }
    ];

    const renderLanguage = (item: { code: string; label: string }, index: number) => {
        const selected = item.label === language;
        return (
            <TouchableOpacity
                key={`${item.code}-${index}`}
                onPress={() => {
                    setLanguage(item.label);
                    closeBottomSheet();
                }}
                style={styles.languageItem}
            >
                <ThemedText style={styles.languageText}>{item.label}</ThemedText>
                {selected ? (
                    <View style={styles.checkBoxFilled}>
                        <Entypo name="check" size={16} color="black" />
                    </View>
                ) : (
                    <View style={styles.checkBoxEmpty} />
                )}
            </TouchableOpacity>
        );
    };

    const handleOpenModal = () => {
        setModalVisible(true);
        translateY.setValue(0);
        // Reiniciar el scroll a 0 al abrir, si es necesario, para la correcta detección
        // Aquí no se necesita porque se inicializa en 0, pero en algunos casos complejos sí.
    };

    return (
        <View>
            <TouchableOpacity
                style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", gap: 4 }}
                onPress={handleOpenModal}>
                <ThemedText style={{ fontSize: 14, color: "#a8a8a8" }}>{language}</ThemedText>
                <Image
                    source={require("@/assets/icons/arrowdown.svg")}
                    style={{ width: 14, height: 12, transform: [{ rotate: '180deg' }] }}
                />
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                onRequestClose={closeBottomSheet}
                animationType="none"
                transparent={true}
            >
                <TouchableWithoutFeedback onPress={closeBottomSheet}>
                    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" }}>

                        <Animated.View
                            style={{
                                backgroundColor: "#162127",
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                                maxHeight: "75%",
                                transform: [{ translateY: translateY }]
                            }}
                            // APLICAMOS PanResponder al contenedor exterior (para el agarre inicial)
                            {...panResponder.panHandlers}
                        >
                            <TouchableWithoutFeedback>
                                <View>
                                    <View style={styles.grabberContainer}>
                                        <View style={styles.grabber} />
                                    </View>

                                    <TouchableOpacity
                                        onPress={closeBottomSheet}
                                        style={{ paddingLeft: 16, paddingRight: 32, width: 60.5, height: 43.8, marginVertical: 2.5, justifyContent: "center" }}>
                                        <IconComponent name="close" />
                                    </TouchableOpacity>

                                    {/* ScrollView con la función de seguimiento de scroll */}
                                    <ScrollView
                                        onScroll={handleScroll} // <-- AQUÍ
                                        scrollEventThrottle={16} // <-- Importante para la fluidez
                                        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 8 }}
                                        showsVerticalScrollIndicator={true}
                                        style={{ maxHeight: screenHeight * 0.75 - 70 }}
                                    >
                                        <View style={{ width: "100%" }}>
                                            <ThemedText style={{ fontWeight: "500" as any, fontSize: 24, paddingVertical: 8 }}>Selecciona tu idioma</ThemedText>
                                        </View>
                                        <View style={styles.listWrapper}>
                                            <View style={styles.borderedList}>
                                                {languages.map((item, idx) => renderLanguage(item, idx))}
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                            </TouchableWithoutFeedback>
                        </Animated.View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    // ... (Mantener los estilos inalterados)
    languageItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    languageText: {
        fontSize: 16
    },
    checkBoxEmpty: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 1.5,
        borderColor: "#758694",
    },
    checkBoxFilled: {
        width: 24,
        height: 24,
        borderRadius: 6,
        backgroundColor: "#0083F8",
        alignItems: "center",
        justifyContent: "center",
    },
    borderedList: {
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#758694",
        borderRadius: 24,
        overflow: "hidden",
        marginBottom: 16
    },
    listWrapper: {
        marginTop: 12,
    },
    grabberContainer: {
        alignItems: "center",
        paddingBottom: 4,
        paddingTop: 8,
        height: 20,
    },
    grabber: {
        width: 42,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#cbd2da",
        opacity: 0.9,
    }
});
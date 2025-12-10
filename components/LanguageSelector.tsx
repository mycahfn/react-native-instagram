import { Image } from "expo-image";
import { useState } from "react";
import { Modal, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import IconComponent from "./shared/IconComponent";
import { ThemedText } from "./shared/ThemedText";

import Entypo from '@expo/vector-icons/Entypo';

export default function LanguageSelector() {

    const [language, setLanguage] = useState("Español");
    const [modalVisible, setModalVisible] = useState(true);

    const languages = [
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
                onPress={() => { setLanguage(item.label); setModalVisible(false); }}
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

    return (
        <View>
            <TouchableOpacity
                style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", gap: 4 }}
                onPress={() => setModalVisible(true)}>
                <ThemedText style={{ fontSize: 14, color: "#a8a8a8" }}>{language}</ThemedText>
                <Image
                    source={require("@/assets/icons/arrowdown.svg")}
                    style={{ width: 14, height: 12, transform: [{ rotate: '180deg' }] }}
                />
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType="slide"
                backdropColor="rgba(0,0,0,0.2)"
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <TouchableWithoutFeedback>
                            <View style={{ backgroundColor: "#162127", borderTopLeftRadius: 24, borderTopRightRadius: 24, maxHeight: "75%", minHeight: "75%" }}>

                                {/* Grabber: barra pequeña centrada para indicar que el modal se puede arrastrar (solo estilo) */}
                                <View style={styles.grabberContainer}>
                                    <View style={styles.grabber} />
                                </View>

                                <TouchableOpacity
                                    onPress={() => setModalVisible(false)}
                                    style={{ paddingLeft: 16, paddingRight: 32, width: 60.5, height: 43.8, marginVertical: 2.5, justifyContent: "center" }}>
                                    <IconComponent name="close" />
                                </TouchableOpacity>
                                {/* ScrollView que contiene header y la lista; el borde se aplica solo a los items */}
                                <ScrollView
                                    contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 8 }}
                                    showsVerticalScrollIndicator={true}
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
                     </View>
                 </TouchableWithoutFeedback>
             </Modal>
         </View>
     )
 }

 const styles = StyleSheet.create({
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
         backgroundColor: "#0083F8", // color para indicar selección
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
     list: {
         // opcional: si quieres limitar la altura de la lista dentro del borde, puedes usar maxHeight aquí
         maxHeight: 320,
     },
     separator: {
         height: 1,
         backgroundColor: "#233238",
         marginHorizontal: 8
     }

    /* Estilos para la barra superior (grabber) */
    ,grabberContainer: {
        alignItems: "center",
        paddingBottom: 4,
        paddingTop: 8,
        height: 20,
    },
    grabber: {
        width: 48,
        height: 5,
        borderRadius: 3,
        backgroundColor: "#cbd2da", // tono gris oscuro sobre el fondo del modal
        opacity: 0.9,
    }
 });
import { Image } from "expo-image";
import { useState } from "react";
import { Modal, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ThemedText } from "./shared/ThemedText";

export default function LanguageSelector() {

    const language = "Español"
    const [modalVisible, setModalVisible] = useState(false);

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
                            <View style={{ backgroundColor: "#162127", borderTopLeftRadius: 24, borderTopRightRadius: 24, minHeight: "75%" }}>
                                <ThemedText>Language Selection Modal</ThemedText>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}
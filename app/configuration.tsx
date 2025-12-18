import { useAuthStore } from "@/utils/authStore";
import { FIREBASE_AUTH } from "@/utils/firebase";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type MenuItemProps = {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress?: () => void;
};

const MenuItem = ({ icon, label, onPress }: MenuItemProps) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <Ionicons name={icon} size={24} color="#fff" />
        <Text style={styles.menuLabel}>{label}</Text>
        <Ionicons name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
);

type MenuSectionProps = {
    title: string;
    children: React.ReactNode;
};

const MenuSection = ({ title, children }: MenuSectionProps) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.sectionContent}>{children}</View>
    </View>
);

export default function ConfigurationScreen() {
    const router = useRouter();
    const { logOut } = useAuthStore();

    const handleLogout = async () => {
        Alert.alert(
            "Cerrar sesión",
            "¿Estás seguro de que quieres cerrar sesión?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Cerrar sesión",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await signOut(FIREBASE_AUTH);
                            logOut();
                            router.replace("/auth");
                        } catch (error) {
                            console.error("Error signing out:", error);
                        }
                    },
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Configuración y actividad</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView style={styles.scrollView}>
                <MenuSection title="Tu cuenta">
                    <MenuItem icon="person-outline" label="Centro de cuentas" />
                    <MenuItem icon="bookmark-outline" label="Guardado" />
                    <MenuItem icon="archive-outline" label="Archivo" />
                    <MenuItem icon="time-outline" label="Tu actividad" />
                    <MenuItem icon="notifications-outline" label="Notificaciones" />
                    <MenuItem icon="timer-outline" label="Tiempo en Instagram" />
                </MenuSection>

                <MenuSection title="Cómo usas Instagram">
                    <MenuItem icon="shield-checkmark-outline" label="Favoritos" />
                    <MenuItem icon="people-outline" label="Seguir e invitar a amigos" />
                </MenuSection>

                <MenuSection title="Para profesionales">
                    <MenuItem icon="analytics-outline" label="Herramientas y controles para creadores" />
                </MenuSection>

                <MenuSection title="Qué ves">
                    <MenuItem icon="eye-off-outline" label="Contenido oculto" />
                    <MenuItem icon="close-circle-outline" label="Bloqueado" />
                </MenuSection>

                <MenuSection title="Tu app y contenido multimedia">
                    <MenuItem icon="language-outline" label="Idioma" />
                    <MenuItem icon="phone-portrait-outline" label="Permisos del dispositivo" />
                </MenuSection>

                <MenuSection title="Más información y asistencia">
                    <MenuItem icon="help-circle-outline" label="Ayuda" />
                    <MenuItem icon="information-circle-outline" label="Centro de privacidad" />
                    <MenuItem icon="document-text-outline" label="Estado de la cuenta" />
                    <MenuItem icon="person-add-outline" label="Información" />
                </MenuSection>

                <MenuSection title="Inicio de sesión">
                    <MenuItem icon="add-circle-outline" label="Añadir cuenta" />
                    <MenuItem
                        icon="log-out-outline"
                        label="Cerrar sesión"
                        onPress={handleLogout}
                    />
                </MenuSection>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>from</Text>
                    <Text style={styles.footerBrand}>Meta</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: "#333",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    scrollView: {
        flex: 1,
    },
    section: {
        marginTop: 24,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        color: "#888",
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 8,
    },
    sectionContent: {
        backgroundColor: "#111",
        borderRadius: 12,
        overflow: "hidden",
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: "#222",
    },
    menuLabel: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        marginLeft: 16,
    },
    footer: {
        alignItems: "center",
        paddingVertical: 32,
    },
    footerText: {
        color: "#666",
        fontSize: 12,
    },
    footerBrand: {
        color: "#666",
        fontSize: 16,
        fontWeight: "600",
    },
});
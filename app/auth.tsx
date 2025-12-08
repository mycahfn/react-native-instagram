import CreateAccountButton from "@/components/CreateAccountButton";
import FormAuthSignin from "@/components/FormAuthSignin";
import ImageLogoComponent from "@/components/ImageLogoComponent";
import LanguageSelector from "@/components/LanguageSelector";

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flex: 1, width: "100%", padding: 16, backgroundColor:"#162127" }}>
                <LanguageSelector />
                <ImageLogoComponent />
                <FormAuthSignin />
                <CreateAccountButton />
            </View>
        </SafeAreaView>
    );
}

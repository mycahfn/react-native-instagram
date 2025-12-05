import CreateAccountButton from "@/components/CreateAccountButton";
import FormAuthSignin from "@/components/FormAuthSignin";
import ImageLogoComponent from "@/components/ImageLogoComponent";
import LanguageSelector from "@/components/LanguageSelector";

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
    return (
        <SafeAreaView>
            <View>
                <LanguageSelector />
                <ImageLogoComponent />
                <FormAuthSignin />
                <CreateAccountButton />
            </View>
        </SafeAreaView>
    );
}

import { Image } from "expo-image";
import { View } from "react-native";

const ImageLogoComponent = () => (
    <View style={{ alignItems: "center", paddingTop: 84.04, paddingBottom: 98.23 }}>
        <Image source={require("@/assets/images/app/instagram.png")} style={{ width: 64, height: 64 }} />
    </View>
)

export default ImageLogoComponent;
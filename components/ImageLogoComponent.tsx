import { Image } from "expo-image";
import { View } from "react-native";

const ImageLogoComponent = () => (
    <View>
        <Image source={require("@/assets/images/app/instagram.png")} style={{ width: 64, height: 64 }} />
    </View>
)

export default ImageLogoComponent;
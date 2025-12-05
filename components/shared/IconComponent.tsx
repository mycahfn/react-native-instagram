import { Image } from "expo-image";
import React from 'react';
import { StyleSheet } from "react-native";

type TabIconName = 'home' | 'reels' | 'message' | 'explore';

export const IconsPath: Record<TabIconName, any> = {
    home: require('@/assets/icons/home.svg'),
    reels: require('@/assets/icons/reels.svg'),
    message: require('@/assets/icons/message.svg'),
    explore: require('@/assets/icons/explore.svg'),
};

interface IconComponentProps {
    name: TabIconName;
}

export default function IconComponent({ name }: IconComponentProps) {

    const src = IconsPath[name]

    return <Image source={src} style={styles.icon} />;
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        tintColor: "#F5F5F5"
    }
})
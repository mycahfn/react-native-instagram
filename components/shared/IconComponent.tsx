import { Image } from "expo-image";
import React from 'react';
import { StyleSheet } from "react-native";

type TabIconName = 'home' | 'reels' | 'message' | 'explore' | 'arrowDown' | "close";

export const IconsPath: Record<TabIconName, any> = {
    home: require('@/assets/icons/home.svg'),
    reels: require('@/assets/icons/reels.svg'),
    message: require('@/assets/icons/message.svg'),
    explore: require('@/assets/icons/explore.svg'),
    arrowDown: require('@/assets/icons/arrowdown.svg'),
    close: require('@/assets/icons/close.svg')
};

interface IconComponentProps {
    name: TabIconName;
    width?: number;
    height?: number;
}

export default function IconComponent({ name, width = 24, height = 24 }: IconComponentProps) {

    const src = IconsPath[name]

    return <Image source={src} style={{width, height}} />;
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        tintColor: "#F5F5F5",
    }
})
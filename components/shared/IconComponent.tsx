import { Image } from "expo-image";
import React from 'react';
import { StyleSheet } from "react-native";

type TabIconName = 'home' | 'reels' | 'message' | 'explore' | 'arrowDown' | "close" | 'home-focus' | 'reels-focus' | 'message-focus' | 'explore-focus';

export const IconsPath: Record<TabIconName, any> = {
    home: require('@/assets/icons/home.svg'),
    reels: require('@/assets/icons/reels.svg'),
    message: require('@/assets/icons/message.svg'),
    explore: require('@/assets/icons/explore.svg'),
    arrowDown: require('@/assets/icons/arrowdown.svg'),
    close: require('@/assets/icons/close.svg'),
    "home-focus": require('@/assets/icons/home_focus.svg'),
    "reels-focus": require('@/assets/icons/reels_focus.svg'),
    "message-focus": require('@/assets/icons/message_focus.svg'),
    "explore-focus": require('@/assets/icons/explore_focus.svg')
};

interface IconComponentProps {
    name: TabIconName;
    width?: number;
    height?: number;
    color?: string;
}

export default function IconComponent({ name, width = 24, height = 24, color = "rgb(245, 245, 245)" }: IconComponentProps) {

    const src = IconsPath[name]

    return <Image source={src} style={{ width, height, tintColor: color }} />;
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
})
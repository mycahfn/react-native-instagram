import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        tintColor: 'rgb(245, 245, 245)',
    },
    profileIcon: {
        width: 24,
        height: 24,
        borderRadius: 9999,
        overflow: 'hidden',
    },
    tabs: {
        padding: 0,
        margin: 0,
        borderTopColor: '#23282b',
        backgroundColor: "#0C0F14"
    },
    tabBarIcon: {
        height: '100%',
    },
    backgroundDarkMode: {
        backgroundColor: "#0C0F14"
    },
    h0: {
        height: 0
    },
    layoutHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrapperHeaderIcon: {
        padding: 16
    }
});

export default styles
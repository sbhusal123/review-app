import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.header}>
            <MaterialIcons
                name="menu"
                size={28}
                onPress={openMenu}
                style={styles.icon}
            />
            <View style={styles.headerTitle}>
                <Image
                    source={require("../assets/images/heart_logo.png")}
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        position: "absolute",
        left: 5
    },
    headerTitle: {
        flexDirection: "row"
    },
    headerImage: {
        width: 20,
        height: 20,
        marginHorizontal: 10
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
    },
    icon: {
        position: "absolute",
        left: 16
    }
});

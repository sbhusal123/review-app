import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Home from "./screens/Home";

export default function App() {
    return <Home />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

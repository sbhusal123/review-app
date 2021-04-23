import React from "react";

import { View, Text, Button } from "react-native";

import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
    const pressHandler = () => {
        navigation.navigate("ReviewDetails");
        // navigation.push("ReviewDetails"); // works same
        // navigation.pop("ReviewDetails"); // pops screen out of stack
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="Goto Review" onPress={pressHandler} />
        </View>
    );
}

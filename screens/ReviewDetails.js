import React from "react";

import { View, Text } from "react-native";
import Card from "../shared/card";

import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam("title")}</Text>
                <Text>{navigation.getParam("body")}</Text>
                <Text>{navigation.getParam("rating")}</Text>
            </Card>
        </View>
    );
}

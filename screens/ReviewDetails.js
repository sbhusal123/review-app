import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import Card from "../shared/card";

import { globalStyles, images } from "../styles/global";

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam("rating");

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam("title")}</Text>
                <Text>{navigation.getParam("body")}</Text>
                <View style={style.rating}>
                    <Text>Movie Rating: </Text>
                    <Image source={images.ratings[rating]}></Image>
                </View>
            </Card>
        </View>
    );
}

const style = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"
    }
});

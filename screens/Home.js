import React from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Card from "../shared/card";

import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
    // Review Datas
    const [reviews, setReviews] = React.useState([
        {
            title: "Rock The Star",
            rating: 5,
            body: "Lorem Ipsim Dolor",
            key: 1
        },
        {
            title: "Nerves Of Steel",
            rating: 3,
            body: "Lorem Ipsim Dolor Nerves",
            key: 2
        }
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("ReviewDetails", { ...item })
                        }
                    >
                        <Card>
                            <Text style={globalStyles.titleText} key={item.key}>
                                {item.title}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

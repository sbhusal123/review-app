import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import { ImageBackground } from "react-native";

// Screens
import About from "../screens/About";

// Header
import Header from "../shared/header";

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                // headerTitle render component
                // title sets title
                headerTitle: () => (
                    <Header title="About Movie" navigation={navigation} />
                )
                // title: "Movie Zone"
                // headerStyle: {     backgroundColor: "#eee" }
            };
        }
    }
};

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: {
            backgroundColor: "#eee",
            height: 70
        },
        headerBackground: () => (
            <ImageBackground
                source={require("../assets/images/game_bg.png")}
                style={{
                    width: "100%",
                    height: "100%"
                }}
            />
        )
    }
});

export default AboutStack;

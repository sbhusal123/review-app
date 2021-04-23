import React from "react";
import { createStackNavigator } from "react-navigation-stack";

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
        }
    }
});

export default AboutStack;

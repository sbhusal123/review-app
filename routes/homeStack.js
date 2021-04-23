import React from "react";
import { createStackNavigator } from "react-navigation-stack";

// Screens
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

// Header
import Header from "../shared/header";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                // headerTitle render component
                // title sets title
                headerTitle: () => (
                    <Header title="Movie Zone" navigation={navigation} />
                )
                // title: "Movie Zone"
                // headerStyle: {     backgroundColor: "#eee" }
            };
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details"
        }
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "teal",
        headerStyle: {
            backgroundColor: "#eee",
            height: 80
        }
    }
});

export default HomeStack;

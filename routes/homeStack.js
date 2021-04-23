import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Screens
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Movie Zone"
        }
        // defaultNavigationOptions can be overridden
        // headerStyle: {
        //     backgroundColor: "#eee"
        // }
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
        headerTintColor: "#444",
        headerStyle: {
            backgroundColor: "#eee",
            height: 70
        }
    }
});

export default createAppContainer(HomeStack);

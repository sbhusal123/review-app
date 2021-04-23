import { createStackNavigator } from "react-navigation-stack";

// Screens
import About from "../screens/About";

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: "About Movie Zone"
            // headerStyle: {     backgroundColor: "#eee" }
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

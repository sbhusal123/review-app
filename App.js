import React from "react";
import * as Font from "expo-font";

import Home from "./screens/Home";
import AppLoading from "expo-app-loading";

// load fonts from assets
const getFonts = () =>
    Font.loadAsync({
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
    });

export default function App() {
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    if (fontsLoaded) {
        return <Home />;
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={console.log("Error loading fonts")}
            />
        );
    }
}

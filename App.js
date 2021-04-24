import React from "react";
import * as Font from "expo-font";

import AppLoading from "expo-app-loading";
import Navigator from "./routes/drawer";

// load fonts from assets
const getFonts = () =>
    Font.loadAsync({
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
    });

export default function App() {
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    if (fontsLoaded) {
        return <Navigator />;
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

console.warn = () => {};
console.log = () => {};
console.error = () => {};

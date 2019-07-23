import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState, Fragment } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./navigation/AppNavigator";
import DrawerComp from "./drawer";
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: "red" }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <View style={styles.container}>
            <DrawerComp />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      opensans: require("./assets/fonts/OpenSans-Regular.ttf"),
      "opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      quicksand: require("./assets/fonts/Quicksand-Regular.ttf"),
      "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf")
    })
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});

import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { UtilityThemeProvider } from "react-native-design-utility";
import Router from "./src/routes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontLoaded] = useFonts({
    Sora: require("./assets/fonts/Sora-Regular.ttf"),
    "Sora-Bold": require("./assets/fonts/Sora-Bold.ttf"),
    "Sora-ExtraBold": require("./assets/fonts/Sora-ExtraBold.ttf"),
    "Sora-Light": require("./assets/fonts/Sora-Light.ttf"),
    "Sora-ExtraLight": require("./assets/fonts/Sora-ExtraLight.ttf"),
    "Sora-Medium": require("./assets/fonts/Sora-Medium.ttf"),
    "Sora-SemiBold": require("./assets/fonts/Sora-SemiBold.ttf"),
    "Sora-Thin": require("./assets/fonts/Sora-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <UtilityThemeProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Router />
        <StatusBar style="auto" />
      </View>
    </UtilityThemeProvider>
  );
};

export default App;

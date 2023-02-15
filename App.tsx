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
    Sora: require("./assets/fonts/sora.ttf"),
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

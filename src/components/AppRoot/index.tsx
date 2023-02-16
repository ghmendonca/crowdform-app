import { UtilityThemeProvider } from "react-native-design-utility";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Router from "../../routes";
import { useComponentState } from "./state";
import Toast from "react-native-toast-message";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const AppRoot = () => {
  const { loading, onLayoutRootView } = useComponentState();

  if (loading) {
    return null;
  }

  return (
    <UtilityThemeProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Router />
        <StatusBar style="auto" />
      </View>
      <Toast />
    </UtilityThemeProvider>
  );
};

export default AppRoot;

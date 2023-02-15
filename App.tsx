import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Router from "./src/routes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Router />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

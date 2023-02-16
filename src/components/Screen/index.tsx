import { FunctionComponent } from "react";
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";
import { ScreenProps } from "./types";

const Screen: FunctionComponent<ScreenProps> = ({ children, scroll }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {scroll ? (
        <ScrollView
          style={styles.screen}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
        </ScrollView>
      ) : (
        <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
      )}
    </TouchableWithoutFeedback>
  );
};

export default Screen;

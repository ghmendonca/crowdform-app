import { FunctionComponent } from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import { ScreenProps } from "./types";

const Screen: FunctionComponent<ScreenProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Screen;

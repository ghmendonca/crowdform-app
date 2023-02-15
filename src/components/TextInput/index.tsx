import { FunctionComponent, useState } from "react";
import {
  TextInput as NativeInput,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";
import { TextInputProps } from "./types";
import { useToggle } from "../../utils/useToggle";
import { Text } from "react-native-design-utility";

const TextInput: FunctionComponent<TextInputProps> = ({
  label,
  password,
  ...props
}) => {
  const [hidden, toggleHidden] = useToggle(password);

  return (
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <NativeInput
          {...props}
          style={styles.input}
          autoCorrect={password ? false : props.autoCorrect}
          textContentType={password ? "password" : props.textContentType}
          autoCapitalize={password ? "none" : "sentences"}
          secureTextEntry={hidden}
        />
        {password && hidden && (
          <TouchableWithoutFeedback
            onPress={toggleHidden}
            hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}
          >
            <Ionicons name="md-eye-outline" style={styles.icon} />
          </TouchableWithoutFeedback>
        )}
        {password && !hidden && (
          <TouchableWithoutFeedback
            onPress={toggleHidden}
            hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}
          >
            <Ionicons name="md-eye-off-outline" style={styles.icon} />
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

export default TextInput;

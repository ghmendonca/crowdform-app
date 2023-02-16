import { FunctionComponent } from "react";
import {
  TextInput as NativeInput,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native-design-utility";
import { Field } from "rc-field-form";
import styles from "./styles";
import { TextInputProps } from "./types";
import { useComponentState } from "./state";

const TextInput: FunctionComponent<TextInputProps> = ({
  label,
  password,
  error,
  name,
  field,
  ...props
}) => {
  const { hidden, toggleHidden } = useComponentState({ password });

  return (
    <Field
      name={name}
      trigger="onChangeText"
      getValueFromEvent={(text) => text}
      {...field}
    >
      {(control, meta) => {
        return (
          <View>
            {!!label && (
              <Text
                style={
                  error || meta.errors.length > 0
                    ? [styles.label, styles.errorLabel]
                    : styles.label
                }
              >
                {label}
              </Text>
            )}
            <View style={styles.container}>
              <NativeInput
                {...props}
                {...control}
                style={styles.input}
                autoCorrect={password ? false : props.autoCorrect}
                textContentType={password ? "password" : props.textContentType}
                autoCapitalize={password ? "none" : props.autoCapitalize}
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
      }}
    </Field>
  );
};

export default TextInput;

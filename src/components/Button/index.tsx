import { FunctionComponent } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native-design-utility";
import styles from "./styles";
import { ButtonProps } from "./types";

const Button: FunctionComponent<ButtonProps> = ({
  title,
  disabled,
  ...props
}) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed && !disabled
          ? [styles.button, styles.buttonPressed]
          : styles.button
      }
      {...props}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;

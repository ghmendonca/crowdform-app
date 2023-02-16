import { FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-design-utility";
import styles from "./styles";
import { ButtonProps } from "./types";

const Button: FunctionComponent<ButtonProps> = ({
  title,
  disabled,
  variant = "primary",
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, styles[variant]]}
      {...props}
    >
      <Text
        color={variant === "outline" ? "#770FDF" : "white"}
        style={styles.text}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

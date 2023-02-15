import { FunctionComponent } from "react";
import {
  Text as BaseText,
  UtilityTextProps,
} from "react-native-design-utility";
import styles from "./styles";

const Text: FunctionComponent<UtilityTextProps> = ({
  style,
  bold,
  ...props
}) => {
  return (
    <BaseText style={[style, bold ? styles.bold : styles.regular]} {...props} />
  );
};

export default Text;

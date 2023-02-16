import { FunctionComponent } from "react";
import { Pressable } from "react-native";
import { Box } from "react-native-design-utility";
import Text from "../Text";
import { useComponentState } from "./state";
import styles from "./styles";
import { ButtonSelectorProps } from "./types";

const ButtonSelector: FunctionComponent<ButtonSelectorProps> = ({
  options,
}) => {
  const { selected, setSelected } = useComponentState();

  return (
    <Box flexDirection="row" justify="between">
      {options.map((option, index) => (
        <Pressable key={index} onPress={() => setSelected(index)}>
          <Box
            style={
              selected === index
                ? [styles.button, styles.buttonSelected]
                : styles.button
            }
          >
            <Text size={15} color={selected === index ? "#770FDF" : "#A0A0A0"}>
              {option.label}
            </Text>
          </Box>
        </Pressable>
      ))}
    </Box>
  );
};

export default ButtonSelector;

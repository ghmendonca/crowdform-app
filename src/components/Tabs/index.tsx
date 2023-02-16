import { FunctionComponent } from "react";
import { Pressable } from "react-native";
import { Box } from "react-native-design-utility";
import Text from "../Text";
import { useComponentState } from "./state";
import styles from "./styles";
import { TabsProps } from "./types";

const Tabs: FunctionComponent<TabsProps> = ({ tabs }) => {
  const { setIndex, index, component } = useComponentState({ tabs });

  return (
    <Box>
      <Box flexDirection="row" align="center" p="md" justify="between">
        {tabs.map(({ title }, i) => (
          <Pressable key={i} onPress={() => setIndex(i)}>
            <Box pb={10} style={index === i ? styles.selectedBorder : {}}>
              <Text
                bold
                size={14}
                style={
                  index === i ? [styles.title, styles.selected] : styles.title
                }
              >
                {title}
              </Text>
            </Box>
          </Pressable>
        ))}
      </Box>
      {component}
    </Box>
  );
};

export default Tabs;

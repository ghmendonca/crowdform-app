import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FunctionComponent } from "react";
import { Image, SafeAreaView } from "react-native";
import { Box } from "react-native-design-utility";
import Ionicons from "@expo/vector-icons/Ionicons";
import NotificationButton from "../NotificationButton";
import ProfileButton from "../ProfileButton";
import Text from "../Text";
import styles from "./styles";

const HomeHeader: FunctionComponent<NativeStackHeaderProps> = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Box style={styles.content}>
        <Box flexDirection="row" alignItems="center" justify="between">
          <ProfileButton />
          <Text size={17} bold thousand>
            Account: $1457.23
          </Text>
          <NotificationButton />
        </Box>

        <Box flexDirection="row" alignItems="end" justify="between" mt="sm">
          <Box>
            <Text size={12}>Portfolio</Text>
            <Box flexDirection="row" alignItems="end">
              <Text bold thousand size={24}>
                $1245.23
              </Text>
              <Box flexDirection="row" alignItems="center" pb={4}>
                <Ionicons
                  style={styles.increase}
                  name="arrow-up-outline"
                  size={20}
                  color="#0FDF8F"
                />
                <Text color="#0FDF8F" size={14}>
                  32.82%
                </Text>
              </Box>
            </Box>
          </Box>
          <Box style={styles.rewards} mb={4}>
            <Image source={require("../../../assets/images/reward.png")} />
            <Text size={11} bold color="#770FDF" ml="xs">
              Earn Rewards
            </Text>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default HomeHeader;

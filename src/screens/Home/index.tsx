import { Box } from "react-native-design-utility";
import { Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import FundCard from "../../components/FundCard";
import styles from "./styles";
import { useComponentState } from "./state";

const Home = () => {
  const { funds } = useComponentState();

  return (
    <Screen scroll>
      <Box p="md">
        <Text size={18} bold>
          Funds
        </Text>
      </Box>
      <Box mt="sm">
        <Carousel
          data={funds}
          loop={true}
          width={200}
          height={190}
          vertical={false}
          style={{ width: "100%" }}
          autoPlay={false}
          renderItem={({ item }) => <FundCard key={item.id} fund={item} />}
        />
      </Box>
      <Box p="md">
        <Box style={styles.carbonCard}>
          <Box flex={1}>
            <Text color="white" bold size={16}>
              Learn more about carbon credits
            </Text>
            <Text color="white" size={12} mt="sm">
              Check out our top tips!
            </Text>
          </Box>
          <Box flex={1} alignItems="end">
            <Image source={require("../../../assets/images/carbon.png")} />
          </Box>
        </Box>

        <Box mt="md" flexDirection="row" flex={1}>
          <Box flex={1} style={styles.emptyCard} marginRight="xs">
            <Text size={12} bold>
              Why should you invest here?
            </Text>
          </Box>
          <Box flex={1} style={styles.emptyCard} marginLeft="xs">
            <Text size={12} bold>
              Why should you invest here?
            </Text>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
};

export default Home;

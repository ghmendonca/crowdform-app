import { Image } from "react-native";
import { Box } from "react-native-design-utility";
import Carousel from "react-native-reanimated-carousel";
import Text from "../Text";
import styles from "./styles";

const FundBreakdown = () => {
  return (
    <Carousel
      data={[...new Array(5).keys()]}
      loop={true}
      width={235}
      height={270}
      vertical={false}
      style={{ width: "100%" }}
      autoPlay={false}
      renderItem={() => (
        <Box style={styles.card}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={require("../../../assets/images/image.jpg")}
          />
          <Box paddingHorizontal="sm" paddingVertical="sm">
            <Text size={12}>
              Aspira is building a modular, direct air capture system with the
              energy supply integrated into the modules.
            </Text>
            <Text size={12} textDecoration="underline" mt="sm">
              Read more
            </Text>
          </Box>
        </Box>
      )}
    />
  );
};

export default FundBreakdown;

import { FunctionComponent } from "react";
import { Box } from "react-native-design-utility";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LineChart } from "react-native-chart-kit";
import FundIcon from "../FundIcon";
import Text from "../Text";
import styles from "./styles";
import { FundCardProps } from "./types";
import { useComponentState } from "./state";

const FundCard: FunctionComponent<FundCardProps> = ({ fund }) => {
  const { color, increased } = useComponentState({ fund });

  return (
    <Box style={styles.card}>
      <Box mb="xs">
        <FundIcon type={fund.type} />
      </Box>
      <Text bold size={12}>
        {fund.title}
      </Text>
      <Box mt="xs">
        <LineChart
          height={80}
          width={156}
          data={{
            labels: [],
            datasets: [
              {
                data: fund.data,
              },
            ],
          }}
          style={styles.chart}
          chartConfig={{
            color: () => color,
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
          }}
          bezier
          withDots={false}
          withHorizontalLabels={false}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLines={false}
          withShadow={false}
          withVerticalLabels={false}
          withScrollableDot={false}
          withVerticalLines={false}
        />
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        mt="xs"
        justifyContent="between"
      >
        <Text size={14} thousand>
          ${fund.balance}
        </Text>
        <Box flexDirection="row" alignItems="center">
          <Ionicons
            style={increased ? styles.increase : styles.decrease}
            name="arrow-up-outline"
            size={20}
            color={color}
          />
          <Text color={color} size={14}>
            {Math.abs(fund.difference)}%
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FundCard;

import { Box } from "react-native-design-utility";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LineChart } from "react-native-chart-kit";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import { useComponentState } from "./state";
import styles from "./styles";
import { Dimensions } from "react-native";
import ButtonSelector from "../../components/ButtonSelector";
import Tabs from "../../components/Tabs";
import FundBreakdown from "../../components/FundBreakdown";
import Button from "../../components/Button";

const width = Dimensions.get("window").width;

const AssetDetails = () => {
  const { fund } = useComponentState();

  return (
    <Screen scroll>
      <Box p="md">
        <Box flexDirection="row" justify="between">
          <Box>
            <Text size={24} bold>
              $18.23
            </Text>
            <Box flexDirection="row" align="center">
              <Ionicons
                style={styles.increase}
                name="arrow-up-outline"
                size={20}
                color="#0FDF8F"
              />
              <Text color="#0FDF8F" size={14}>
                3.51% ($1.21)
              </Text>
            </Box>
          </Box>
          <Box>
            <Text size={24} bold>
              2022
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="xs">
        <LineChart
          height={153}
          width={width + 30}
          data={{
            labels: [],
            datasets: [
              {
                data: fund?.data || [],
              },
            ],
          }}
          style={styles.chart}
          chartConfig={{
            color: () => "#0FDF8F",
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
      <Box paddingHorizontal="md">
        <ButtonSelector
          options={[
            {
              label: "1h",
              value: 0,
            },
            {
              label: "1d",
              value: 1,
            },
            {
              label: "1w",
              value: 2,
            },
            {
              label: "1m",
              value: 3,
            },
            {
              label: "1y",
              value: 4,
            },
            {
              label: "All",
              value: 5,
            },
          ]}
        />

        <Box mt="xl">
          <Text bold size={17}>
            Info & Stats
          </Text>
          <Box flexDirection="row">
            <Box flex={1}>
              <Box mt="md">
                <Box flexDirection="row" alignItems="center">
                  <Text size={14} color="#A0A0A0">
                    AUM
                  </Text>
                  <Ionicons
                    name="md-information-circle-outline"
                    color="#A0A0A0"
                    size={14}
                  />
                </Box>
                <Text size={14}>$430.88m</Text>
              </Box>
              <Box mt="md">
                <Box flexDirection="row" alignItems="center">
                  <Text size={14} color="#A0A0A0">
                    Vintage Range
                  </Text>
                  <Ionicons
                    name="md-information-circle-outline"
                    color="#A0A0A0"
                    size={14}
                  />
                </Box>
                <Text size={14}>2019 - 2022</Text>
              </Box>
              <Box mt="md">
                <Box flexDirection="row" alignItems="center">
                  <Text size={14} color="#A0A0A0">
                    Price at Close
                  </Text>
                  <Ionicons
                    name="md-information-circle-outline"
                    color="#A0A0A0"
                    size={14}
                  />
                </Box>
                <Text size={14}>$17.68</Text>
              </Box>
            </Box>

            <Box flex={1}>
              <Box mt="md">
                <Box flexDirection="row" alignItems="center">
                  <Text size={14} color="#A0A0A0">
                    Issue Date
                  </Text>
                  <Ionicons
                    name="md-information-circle-outline"
                    color="#A0A0A0"
                    size={14}
                  />
                </Box>
                <Text size={14}>18/04/2022</Text>
              </Box>
              <Box mt="md">
                <Box flexDirection="row" alignItems="center">
                  <Text size={14} color="#A0A0A0">
                    TER
                  </Text>
                  <Ionicons
                    name="md-information-circle-outline"
                    color="#A0A0A0"
                    size={14}
                  />
                </Box>
                <Text size={14}>0.15%</Text>
              </Box>
              <Box mt="md">
                <Box flexDirection="row" alignItems="center">
                  <Text size={14} color="#A0A0A0">
                    Price at Open
                  </Text>
                  <Ionicons
                    name="md-information-circle-outline"
                    color="#A0A0A0"
                    size={14}
                  />
                </Box>
                <Text size={14}>$17.74</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt="lg">
          <Text bold size={17}>
            Fund Breakdown
          </Text>
        </Box>
      </Box>
      <Tabs
        tabs={[
          {
            title: "Highlighted",
            component: <FundBreakdown />,
          },
          {
            title: "Value",
            component: null,
          },
          {
            title: "Vintage",
            component: null,
          },
          {
            title: "Registry",
            component: null,
          },
        ]}
      />

      <Box p="md" mt="sm">
        <Box flexDirection="row" align="center">
          <Ionicons name="md-pie-chart-outline" size={17} />
          <Text size={17} bold ml="xs">
            Your Portfolio
          </Text>
        </Box>
        <Box flexDirection="row" justify="between" mt="md">
          <Box flex={1} mr="xs">
            <Text size={24} bold>
              18 credits
            </Text>
            <Box flexDirection="row" align="center" mb="md">
              <Ionicons
                style={styles.increase}
                name="arrow-up-outline"
                size={20}
                color="#0FDF8F"
              />
              <Text color="#0FDF8F" size={14}>
                8.41%
              </Text>
            </Box>
            <Button title="Sell" variant="outline" />
          </Box>
          <Box flex={1} ml="xs" align="end">
            <Text size={24} bold>
              $384.14
            </Text>
            <Text size={14}>Last purchase 28d ago</Text>
            <Box mt="md" width="100%">
              <Button title="Retire credits" variant="success" />
            </Box>
          </Box>
        </Box>

        <Box marginVertical="sm">
          <Text color="#A0A0A0" size={11}>
            You’ve previously retired 28 credits of this asset
          </Text>
        </Box>

        <Box style={styles.noteCard} mt="xl">
          <Text color="#A0A0A0" size={12}>
            Please note that prices are for reference only and may vary at the
            time of excecuting a buy or sell order. The information provided is
            not investment advice, and should not be used as a recommendation to
            buy or sell assets.
          </Text>
        </Box>

        <Box mt="lg">
          <Button title="Buy" />
        </Box>
      </Box>
    </Screen>
  );
};

export default AssetDetails;

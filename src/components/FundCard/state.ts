import { useNavigation } from "@react-navigation/native";
import { HomeStackProp } from "./../../routes/types";
import { FundCardProps } from "./types";

export const useComponentState = ({ fund }: FundCardProps) => {
  const { navigate } = useNavigation<HomeStackProp>();
  const increased = fund.difference > 0;
  const color = increased ? "#0FDF8F" : "#EE8688";

  const navigateToFundDetails = () => {
    navigate("AssetDetails", {
      id: fund.id,
    });
  };

  return {
    increased,
    color,
    navigateToFundDetails,
  };
};

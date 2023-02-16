import { useEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackProp, HomeStack } from "../../routes/types";
import { useFund } from "../../redux/fund/hooks";

export const useComponentState = () => {
  const { setParams } = useNavigation<HomeStackProp>();
  const { params } = useRoute<RouteProp<HomeStack, "AssetDetails">>();
  const fund = useFund(params.id);

  useEffect(() => {
    if (fund) {
      setParams({
        fund,
      });
    }
  }, [setParams, fund]);

  return {
    fund,
  };
};

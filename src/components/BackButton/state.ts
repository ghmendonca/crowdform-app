import { useNavigation } from "@react-navigation/native";

export const useComponentState = () => {
  const { goBack } = useNavigation();

  const onPress = () => goBack();

  return {
    onPress,
  };
};

import { FunctionComponent } from "react";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useComponentState } from "./state";

const BackButton: FunctionComponent<HeaderBackButtonProps> = ({
  canGoBack,
}) => {
  const { onPress } = useComponentState();

  if (!canGoBack) {
    return null;
  }

  return (
    <Pressable onPress={onPress}>
      <Ionicons name="md-arrow-back-outline" size={22} />
    </Pressable>
  );
};

export default BackButton;

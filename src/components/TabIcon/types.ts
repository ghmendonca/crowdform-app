import { RouteProp } from "@react-navigation/native";
import { MainTabs } from "../../routes/types";

export interface TabIconProps {
  route: RouteProp<MainTabs, keyof MainTabs>;
  focused: boolean;
  color: string;
  size: number;
}

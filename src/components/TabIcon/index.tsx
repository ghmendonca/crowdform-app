import { FunctionComponent } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { TabIconProps } from "./types";

const TabIcon: FunctionComponent<TabIconProps> = ({
  route,
  color,
  focused,
  size,
}) => {
  let iconName = "home";

  switch (route.name) {
    case "HomeStack": {
      iconName = "home";
      break;
    }
    case "Portfolio": {
      iconName = "chart-pie";
      break;
    }
    case "Trade": {
      iconName = "exchange-alt";
      break;
    }
    default: {
      iconName = "home";
      break;
    }
  }

  return <FontAwesome size={size} color={color} name={iconName} />;
};

export default TabIcon;

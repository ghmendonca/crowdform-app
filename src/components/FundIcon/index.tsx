import { FunctionComponent } from "react";
import { Image } from "react-native";
import { FundIconProps } from "./types";

const FundIcon: FunctionComponent<FundIconProps> = ({ type }) => {
  let icon;

  switch (type) {
    case "wind": {
      icon = require("../../../assets/images/wind-fund.png");
      break;
    }
    case "solar": {
      icon = require("../../../assets/images/solar-fund.png");
      break;
    }
    case "nature": {
      icon = require("../../../assets/images/nature-fund.png");
      break;
    }
    default: {
      icon = require("../../../assets/images/wind-fund.png");
      break;
    }
  }

  return <Image source={icon} />;
};

export default FundIcon;

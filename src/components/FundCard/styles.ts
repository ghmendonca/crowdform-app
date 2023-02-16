import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    padding: 12,
    display: "flex",
    minWidth: 180,
    flexDirection: "column",
    marginHorizontal: 15,
    borderRadius: 4,
  },
  chart: {
    paddingRight: 0,
  },
  increase: {
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  decrease: {
    transform: [
      {
        rotate: "115deg",
      },
    ],
  },
});

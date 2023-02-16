import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    borderBottomColor: "rgb(216, 216, 216)",
    shadowColor: "rgb(216, 216, 216)",
    shadowOffset: {
      width: 0,
      height: 1 / 3,
    },
    shadowOpacity: 0.85,
    shadowRadius: 0.1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  increase: {
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  rewards: {
    backgroundColor: "#F7EFFF",
    padding: 8,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 10,
    fontFamily: "Sora",
  },
  label: {
    fontSize: 11,
    color: "#A0A0A0",
    marginBottom: 5,
    fontWeight: "500",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 4,
    height: 48,
  },
  icon: {
    color: "#A0A0A0",
    fontSize: 18,
    paddingRight: 10,
  },
});

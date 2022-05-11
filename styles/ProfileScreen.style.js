import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileScreen: {
    display: "flex",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100%",
  },

  logOutButton: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 150,
    backgroundColor: "#FF385C",
  },

  textLogOut: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

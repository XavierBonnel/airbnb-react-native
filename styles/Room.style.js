import { StyleSheet } from "react-native";

export default StyleSheet.create({
  photo: {
    width: "100%",
    height: 190,
  },

  squarePrice: {
    position: "absolute",
    backgroundColor: "black",
    width: 80,
    height: 40,
    zIndex: 456,
    bottom: 430,
  },

  price: {
    color: "white",
    marginTop: 6,
    marginLeft: 8,
    fontSize: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 8,
    width: "100%",
  },

  profilePic: {
    width: 64,
    height: 64,
    borderRadius: 50,
    marginTop: 16,
  },

  description: {
    marginVertical: 16,
  },
});

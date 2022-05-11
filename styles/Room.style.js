import { StyleSheet } from "react-native";

export default StyleSheet.create({
  photoAndPrice: {
    // marginBottom: "auto",
  },

  photo: {
    width: "100%",
    height: 190,
  },

  squarePrice: {
    position: "relative",
    backgroundColor: "black",
    width: 80,
    height: 40,
    zIndex: 456,
    bottom: 50,
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
    // marginVertical: 8,
    width: "100%",
  },

  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 16,
    alignSelf: "flex-end",
  },

  ratingAndProfile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
  },

  description: {
    marginVertical: 16,
  },

  textsAndAvatar: {
    display: "flex",
    marginHorizontal: 16,
    justifyContent: "space-around",
  },
});

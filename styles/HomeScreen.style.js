import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    resizeMode: "contain",
    height: 70,
    width: 50,
    marginVertical: 16,
  },

  roomCard: {
    // marginVertical: 16,
  },

  squarePrice: {
    position: "absolute",
    backgroundColor: "black",
    width: 80,
    height: 40,
    zIndex: 456,
    bottom: 180,
  },

  price: {
    color: "white",
    marginTop: 6,
    marginLeft: 8,
    fontSize: 18,
  },

  photo: {
    flex: 1,
    height: 170,
  },

  details: {
    marginHorizontal: 16,
  },

  titleAndAvatar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 8,
    width: 230,
  },

  profilePic: {
    width: 64,
    height: 64,
    borderRadius: 50,
    marginTop: 8,
  },

  reviews: {
    color: "gray",
  },

  separator: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    marginVertical: 32,
  },
});

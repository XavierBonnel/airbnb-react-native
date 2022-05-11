import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import axios from "axios";

import styles from "../styles/HomeScreen.style";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://express-airbnb-api.herokuapp.com/rooms"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchdata();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 24 }}>
        {/* <Button
          title="Go to Profile"
          onPress={() => {
            navigation.navigate("Profile", { userId: 123 });
          }}
        /> */}
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        {isLoading ? (
          <ActivityIndicator size="large" color="#FF385C" />
        ) : (
          <FlatList
            contentContainerStyle={{ paddingBottom: 60 }}
            data={data}
            renderItem={(obj) => {
              return (
                <View style={styles.roomCard} key={obj.index}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Room", {
                        roomId: obj.item._id,
                      });
                    }}
                  >
                    <View style={styles.squarePrice}>
                      <Text style={styles.price}>{obj.item.price} €</Text>
                    </View>
                    <Image
                      source={{ uri: obj.item.photos[0].url }}
                      style={styles.photo}
                    />
                    <View style={styles.details}>
                      <View style={styles.titleAndAvatar}>
                        <View>
                          <Text
                            style={styles.title}
                            numberOfLines={1}
                            ellipsizeMode={"tail"}
                          >
                            {obj.item.title}
                          </Text>
                          <Text>{obj.item.ratingValue} stars</Text>
                          <Text style={styles.reviews}>
                            {obj.item.reviews} reviews
                          </Text>
                        </View>
                        <Image
                          style={styles.profilePic}
                          source={{ uri: obj.item.user.account.photo.url }}
                        />
                      </View>
                    </View>
                    <View style={styles.separator} />
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item) => {
              return String(item._id);
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

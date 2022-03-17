import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

import styles from "../styles/Room.style";

export default function Room({ route, navigation }) {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { roomId } = route.params;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://express-airbnb-api.herokuapp.com/rooms/${roomId}`
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.message);
      }
    };
    fetchdata();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#FF385C" />
      ) : (
        <View>
          <Image
            source={{ uri: data.photos[0].url }}
            style={styles.photo}
          />
          <View
            style={{
              backgroundColor: "black",
              width: 80,
              height: 40,
            }}
          >
            <Text style={{ color: "white" }}>{data.price}</Text>
          </View>
          <Text>{data.title}</Text>
          <Text>{data.ratingValue} stars</Text>
          <Image
            style={{ width: 64, height: 64 }}
            source={{ uri: data.user.account.photo.url }}
          />
          <Text>{data.description} </Text>
        </View>
      )}
    </View>
  );
}

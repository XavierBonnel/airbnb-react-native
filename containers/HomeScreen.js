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
} from "react-native";
import axios from "axios";

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
    <View>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile", { userId: 123 });
        }}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#FF385C" />
      ) : (
        <FlatList
          data={data}
          renderItem={(obj) => {
            return (
              <View key={obj.index}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Room", {
                      roomId: obj.item._id,
                    });
                    console.log(obj.item._id);
                  }}
                >
                  <Image
                    source={{ uri: obj.item.photos[0].url }}
                    style={{ width: 310, height: 165 }}
                  />
                  <View
                    style={{
                      backgroundColor: "black",
                      width: 80,
                      height: 40,
                    }}
                  >
                    <Text style={{ color: "white" }}>{obj.item.price}</Text>
                  </View>
                  <Text>{obj.item.title}</Text>
                  <Text>{obj.item.ratingValue} stars</Text>
                  <Image
                    style={{ width: 64, height: 64 }}
                    source={{ uri: obj.item.user.account.photo.url }}
                  />
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
  );
}

import { useNavigation } from "@react-navigation/core";
import MapView from "react-native-maps";

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
  ScrollView,
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

  const markers = [
    {
      id: 1,
      // latitude: data.location[1],
      // longitude: data.location[0],
      title: "Le Reacteur",
      description: "La formation des champion·ne·s !",
    },
  ];

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#FF385C" />
      ) : (
        <ScrollView>
          <Image source={{ uri: data.photos[0].url }} style={styles.photo} />
          <View style={styles.squarePrice}>
            <Text style={styles.price}>{data.price} €</Text>
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <Text>{data.ratingValue} stars</Text>
          <Image
            style={styles.profilePic}
            source={{ uri: data.user.account.photo.url }}
          />
          <Text style={styles.description}>{data.description} </Text>
          {console.log(data.location[0])}

          <MapView
            // La MapView doit obligatoirement avoir des dimensions
            style={{ width: "100%", height: 150 }}
            initialRegion={{
              latitude: data.location[1],
              longitude: data.location[0],
              latitudeDelta: 0.07,
              longitudeDelta: 0.07,
            }}
            showsUserLocation={true}
          >
            {markers.map((marker) => {
              return (
                <MapView.Marker
                  key={marker.id}
                  coordinate={{
                    latitude: data.location[1],
                    longitude: data.location[0],
                  }}
                  title={data.title}
                  description={data.description}
                />
              );
            })}
          </MapView>
        </ScrollView>
      )}
    </View>
  );
}

import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapView, { Marker, Callout } from "react-native-maps";
import axios from "axios";

import styles from "../styles/AroundMe.style";

export default function AroundmeScreen({ userToken }) {
  const navigation = useNavigation();

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [coords, setCoords] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState();
  const [actualLat, setActualLat] = useState();
  const [actualLong, setActualLong] = useState();

  useEffect(() => {
    const askPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status);
        if (status === "granted") {
          const location = await Location.getCurrentPositionAsync();
          console.log(location);
          setActualLat(location.coords.latitude);
          setActualLong(location.coords.longitude);
          //on a nos vraies coordonnées, on interroge autour de nous
          //mais comme on fait tourner cela sur un vrai terminal en Isère et qu'il n'y a que des données sur Paris

          setLat(Number(48.866667));
          setLong(Number(2.333333));
          console.log(lat, long);
          response = await axios.get(
            `https://express-airbnb-api.herokuapp.com/rooms/around?latitude=${lat}&longitude=${long}`
          );
        } else {
          //on fait la requete sans les coordonnées
          response = await axios.get(
            "https://express-airbnb-api.herokuapp.com/rooms/around"
          );
        }
        // console.log(response.data);

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    askPermission();
  }, [lat, long]);

  return (
    <View>
      {/* <Text>{userToken}</Text> */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#FF385C" />
      ) : error ? (
        <Text>Permission refusée</Text>
      ) : (
        <>
          <MapView
            // La MapView doit obligatoirement avoir des dimensions
            style={{ width: "100%", height: 600 }}
            initialRegion={{
              latitude: actualLat,
              longitude: actualLong,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            showsUserLocation={true}
          >
            {data.map((restaurant) => {
              return (
                <MapView.Marker
                  key={restaurant._id}
                  title={restaurant.title}
                  // description={restaurant.price}
                  coordinate={{
                    latitude: restaurant.location[1],
                    longitude: restaurant.location[0],
                  }}
                >
                  <Callout
                    onPress={() => {
                      navigation.navigate("Room", {
                        roomId: restaurant._id,
                      });
                    }}
                  ></Callout>
                </MapView.Marker>
              );
            })}
          </MapView>
        </>
      )}
    </View>
  );
}

import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapView from "react-native-maps";

export default function AroundmeScreen() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [coords, setCoords] = useState();

  const markers = [
    {
      //   id: 1,
      // latitude: data.location[1],
      // longitude: data.location[0],
      title: "Le Reacteur",
      description: "La formation des champion·ne·s !",
    },
  ];

  useEffect(() => {
    const askPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});

        const obj = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setCoords(obj);
      } else {
        setError(true);
      }

      setIsLoading(false);
    };
    askPermission();
  }, []);

  return (
    <View>
      {isLoading ? (
        <Text>Chargement...</Text>
      ) : error ? (
        <Text>Permission refusée</Text>
      ) : (
        <>
          <Text>Latitude de l'utilisateur : {coords.latitude}</Text>
          <Text>Longitude de l'utilisateur : {coords.longitude}</Text>
          <MapView
            // La MapView doit obligatoirement avoir des dimensions
            style={{ width: "100%", height: 600 }}
            initialRegion={{
              latitude: coords.latitude,
              longitude: coords.longitude,
              latitudeDelta: 0.07,
              longitudeDelta: 0.07,
            }}
            showsUserLocation={true}
          >
            {markers.map((marker) => {
              return (
                <MapView.Marker
                  key={1}
                  coordinate={{
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                  }}
                  title={"truc"}
                  description={"truc"}
                />
              );
            })}
          </MapView>
        </>
      )}
    </View>
  );
}

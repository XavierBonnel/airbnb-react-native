import { useRoute, useNavigation } from "@react-navigation/core";
import { Text, View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

export default function ProfileScreen({ route, navigation }) {
  const { params } = useRoute();
  return (
    <View>
      {/* problème avec le params Id qui ne passe pas
      <Text>user id : {params.userId}</Text> */}
      <Button
        title="Log Out"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}

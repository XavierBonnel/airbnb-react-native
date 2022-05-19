import { useRoute, useNavigation } from "@react-navigation/core";
import { Text, View, Button, Pressable, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

import styles from "../styles/ProfileScreen.style";

export default function ProfileScreen({ route, setUserToken, userToken }) {
    const navigation = useNavigation();

  const { params } = useRoute();
  return (
    <View style={styles.profileScreen}>
      {/* problème avec le params Id qui ne passe pas
      <Text>user id : {params.userId}</Text> */}
      <Pressable
        style={styles.logOutButton}
        onPress={() => {
          //méthode ci dessous ne fonctionne pas
          setUserToken(null);
          // navigation.navigate("SignIn");
        }}
      >
        <Text style={styles.textLogOut}>Log Out</Text>
      </Pressable>
    </View>
  );
}

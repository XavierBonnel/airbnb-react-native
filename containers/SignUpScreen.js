import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignUpScreen({
  setToken,
  email,
  setEmail,
  setPassword,
  password,
}) {
  const navigation = useNavigation();

  const [errorMessage, setErrorMessage] = useState("");
  const [inputStyle, setInputStyle] = useState("");

  const handleSubmit = async () => {
    {
      setErrorMessage("");

      if (password && email) {
        // const userToken = "secret-token";
        // setToken(userToken);
        console.log("it's working");
      } else {
        setErrorMessage("please fill all the inputs");
      }
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.signInContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.h3}>Name: </Text>
        <TextInput
          style={errorMessage ? styles.redBox : styles.grayBox}
          placeholder="Jane.doe@email.com"
          onChangeText={(newEmail) => setEmail(newEmail)}
          value={email}
        />
        {console.log(email)}

        <Text style={styles.h3}>Username: </Text>
        <TextInput
          style={errorMessage ? styles.redBox : styles.grayBox}
          placeholder="Jane Doe"
          onChangeText={(newEmail) => setEmail(newEmail)}
          value={email}
        />

        {/* {console.log(email)} */}
        <Text style={styles.h3}>Password: </Text>
        <TextInput
          style={errorMessage ? styles.redBox : styles.grayBox}
          placeholder="42"
          secureTextEntry={true}
          onChangeText={(newPassword) => setPassword(newPassword)}
          value={password}
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}> Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text>Create an account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  signInContainer: {
    flex: 1,
    alignItems: "center",
  },
  redBox: {
    textAlign: "center",
    width: 100,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#FF385C",
    fontSize: 16,
  },

  grayBox: {
    textAlign: "center",
    width: 100,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontSize: 16,
  },
  h3: {
    marginTop: 22,
    fontSize: 20,
  },

  error: {
    marginTop: 18,
  },

  logo: {
    height: 120,
    width: 120,
    marginVertical: 16,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#FF385C",
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

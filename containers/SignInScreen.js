import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignInScreen({
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
       <View>
        <TextInput
          style={errorMessage ? styles.redBox : styles.grayBox}
          placeholder="Email"
          onChangeText={(newEmail) => setEmail(newEmail)}
          value={email}
        />
        {console.log(email)}

        <TextInput
          style={errorMessage ? styles.redBox : styles.grayBox}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(newPassword) => setPassword(newPassword)}
          value={password}
        />
        </View>

        <View>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}> Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:150, height:30}}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={{ color:"gray", textAlign:"center" }} >Create an account</Text>
        </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}


const styles = StyleSheet.create({
  scrollViewContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  signInContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  redBox: {
    // textAlign: "center",
    marginTop:16,
    width: 180,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#FF385C",
    fontSize: 16,
  },

  grayBox: {
    // textAlign: "center",
    marginTop:16,
    width: 180,
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
    color: "#FF385C",
    fontSize: 16,
  },

  logo: {
    height: 120,
    width: 120,
    marginVertical: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    borderRadius: 50,
    borderWidth:2,
    borderColor: "#FF385C",
    marginVertical: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});

import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignInScreen({
  setToken,
  email,
  setEmail,
  setPassword,
  password,
  username,
  setUsername,
  confirmPassword,
  setConfirmPassword,
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
      <View style={styles.signUpContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
       <View>
       <TextInput
          style={errorMessage ? styles.redBox : styles.grayBox}
          placeholder="Email"
          onChangeText={(newEmail) => setEmail(newEmail)}
          value={email}
        />
        <TextInput
          style={errorMessage ? styles.redBox : styles.grayBox}
          placeholder="Username"
          onChangeText={(newUsername) => setUsername(newUsername)}
          value={username}
        />
        {console.log(email)}

        <SafeAreaView >
<TextInput style={styles.description} placeholder="describe yourself" multiline
        numberOfLines={6} />
        </SafeAreaView>

        <TextInput
          style={errorMessage ? styles.redBox : styles.grayBox}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(newPassword) => setPassword(newPassword)}
          value={password}
        />
         <TextInput
          style={errorMessage ? styles.redBox : styles.grayBox}
          placeholder="Confirm password"
          secureTextEntry={true}
          onChangeText={(newConfirmPassword) => setConfirmPassword(newConfirmPassword)}
          value={confirmPassword}
        />
        </View>

        <View>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}> Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:150, height:30}}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={{ color:"gray", textAlign:"center" }} >Sign in</Text>
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

  signUpContainer: {
    flex: 1,
    width: 500,
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

  descripton:{
flex:1,
    borderColor:"gray",
    borderWidth:1,
    fontSize:20,
    
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

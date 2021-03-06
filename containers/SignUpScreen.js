import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const loadingNoInputs = () => {
    if (isLoading === true && !errorMessage) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async () => {
    {
      setErrorMessage("");
      setIsLoading(true);

      if (password && confirmPassword && email && username && description) {
        if (password === confirmPassword) {
          try {
            const response = await axios.post(
              "https://express-airbnb-api.herokuapp.com/user/sign_up",
              {
                email,
                username,
                description,
                password,
              }
            );

            setIsLoading(false);

            alert("account created");
            setToken(response.data.token);
          } catch (error) {
            console.log(error.message);
            console.log(error.response.data);
            setErrorMessage(error.message);
          }
        }
        // const userToken = "secret-token";
        // setToken(userToken);
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

          <View style={styles.descriptionView}>
            <TextInput
              placeholder="Describe yourself"
              multiline={true}
              style={styles.description}
              onChangeText={(newDescription) => {
                setDescription(newDescription);
              }}
            />
          </View>

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
            onChangeText={(newConfirmPassword) =>
              setConfirmPassword(newConfirmPassword)
            }
            value={confirmPassword}
          />
        </View>

        <View>
          {errorMessage ? (
            <Text style={styles.error}>{errorMessage}</Text>
          ) : null}
          {loadingNoInputs() === true ? (
            <ActivityIndicator size="large" color="#FF385C" />
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}> Sign up</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={{ width: 150, height: 30 }}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text style={{ color: "gray", textAlign: "center" }}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
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
    marginTop: 16,
    width: 180,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#FF385C",
    fontSize: 16,
  },

  grayBox: {
    // textAlign: "center",
    marginTop: 16,
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

  description: {
    paddingLeft: 12,
    width: 180,
    height: 100,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 30,
  },

  error: {
    marginTop: 18,
    color: "#FF385C",
    fontSize: 16,
  },

  logo: {
    height: 130,
    width: 120,
    marginVertical: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FF385C",
    marginVertical: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});

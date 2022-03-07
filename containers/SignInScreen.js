import { useNavigation } from "@react-navigation/core";
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignInScreen({
  setToken,
  userName,
  setUserName,
  setPassword,
  password,
}) {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView>
      <View>
        <View>
          <Text>Name: </Text>
          <TextInput
            placeholder="Username"
            onChangeText={(newUserName) => setUserName(newUserName)}
            value={userName}
          />
          {/* {console.log(userName)} */}
          <Text>Password: </Text>
          <TextInput
            style={styles.redBox}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(newPassword) => setPassword(newPassword)}
            value={password}
          />
          <Button
            title="Sign in"
            onPress={async () => {
              if (!password && !userName) {
                alert("please enter a username and a password");
              }

              if (!userName) {
                alert("please enter a name");
              }
              if (!password) {
                alert("please enter a password");
              }

              if (password && userName) {
                const userToken = "secret-token";
                setToken(userToken);
                alert("good job");
              }
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  redBox: {
backgroundColor: "red",
  },
])
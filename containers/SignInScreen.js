import { useNavigation } from "@react-navigation/core";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";
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
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(newPassword) => setPassword(newPassword)}
            value={password}
          />
          <Button
            title="Sign in"
            onPress={async () => {
              if (!userName) {
                alert("please enter a name");
              }
              if (!password) {
                console.log(password);
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

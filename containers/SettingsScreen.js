import { Button, Text, View } from "react-native";

export default function SettingsScreen({ setToken }) {
  return (
    <View>
      <Text>Hello Settings</Text>

      <Button
        title="Log ut"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}

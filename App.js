import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./containers/HomeScreen";
import ProfileScreen from "./containers/ProfileScreen";
import SignInScreen from "./containers/SignInScreen";
import SignUpScreen from "./containers/SignUpScreen";
import SettingsScreen from "./containers/SettingsScreen";
import SplashScreen from "./containers/SplashScreen";
import Room from "./containers/Room";
import AroundmeScreen from "./containers/AroundmeScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const setToken = async (token) => {
    if (token) {
      await AsyncStorage.setItem("userToken", token);
    } else {
      await AsyncStorage.removeItem("userToken");
    }

    setUserToken(token);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setUserToken(userToken);

      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading === true) {
    // We haven't finished checking for the token yet
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken === null ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen name="SignIn" options={{ headerShown: false }}>
              {() => (
                <SignInScreen setToken={setToken} setUserToken={setUserToken} />
              )}
            </Stack.Screen>

            <Stack.Screen name="SignUp" options={{ headerShown: false }}>
              {() => <SignUpScreen setToken={setToken} />}
            </Stack.Screen>
          </>
        ) : (
          // User is signed in ! 🎉
          <Stack.Screen name="Tab" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                }}
              >
                <Tab.Screen
                  name="TabHome"
                  options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name={"ios-home"} size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Home"
                        options={{
                          headerShown: false,

                          title: "My App",
                          headerStyle: { backgroundColor: "#FF385C" },
                          headerTitleStyle: { color: "white" },
                        }}
                      >
                        {() => <HomeScreen />}
                      </Stack.Screen>

                      <Stack.Screen
                        name="Room"
                        options={{
                          headerTitleAlign: "center",

                          title: "Selected Room",
                          // headerShown: false,

                          headerStyle: {
                            backgroundColor: "white",
                          },
                          headerTitleStyle: {
                            display: "flex",

                            color: "#FF385C",
                            // fontWeight: "300",
                            fontSize: 18,
                          },
                        }}
                      >
                        {(props) => <Room {...props} />}
                        {/* {() => <Room />} */}
                      </Stack.Screen>

                      <Stack.Screen
                        name="Profile"
                        options={{
                          title: "User Profile",
                        }}
                      >
                        {() => <ProfileScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabMap"
                  options={{
                    tabBarLabel: "Around Me",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name={"location-outline"}
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Around me"
                        options={{
                          title: "Around me",

                          headerTitleAlign: "center",

                          headerStyle: {
                            backgroundColor: "white",
                          },
                          headerTitleStyle: {
                            display: "flex",

                            color: "#FF385C",
                            // fontWeight: "300",
                            fontSize: 18,
                          },
                        }}
                      >
                        {() => <AroundmeScreen setToken={setToken} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabSettings"
                  options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name={"person-outline"}
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Settings"
                        //ne fonctionne pas ci-dessous pour passer setToken à ProfileScreen
                        // component={ProfileScreen}
                        // initialParams={{ setToken: setToken }}
                        options={{
                          title: "Profile",
                          headerTitleAlign: "center",

                          headerStyle: {
                            backgroundColor: "white",
                          },
                          headerTitleStyle: {
                            display: "flex",

                            color: "#FF385C",
                            // fontWeight: "300",
                            fontSize: 18,
                          },
                        }}
                      >
                        {/* méthode ci-dessous ne foncionne pas */}

                        {(props) => <ProfileScreen setToken={setToken} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                {/* <Button
          title="Go to Profile"
          onPress={() => {
            navigation.navigate("Profile", { userId: 123 });
          }}
        /> */}
              </Tab.Navigator>
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

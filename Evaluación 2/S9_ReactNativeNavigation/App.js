// App.js

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import Grupos from "./src/screens/Grupos";
import Login from "./src/screens/Login";
import Signup from "./src/components/signup";
import Search from "./src/screens/Search";
import Profile from "./src/screens/Profile";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3740FE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen name="Signup" component={Signup} options={{ title: "Signup" }} />
      <Stack.Screen name="Grupos" component={Grupos} options={{ title: "Grupos" }} />
      <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
      <Stack.Screen name="Search" component={Search} options={{ title: "Search" }} />
      <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;

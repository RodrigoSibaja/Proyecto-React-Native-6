// App.js

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Blog from "./screens/Blog";
import BlogDetails from "./screens/BlogDetails";
import Grupos from "./screens/Grupos";
import Login from "./screens/Login";
import Search from "./screens/Search";

const Stack = createStackNavigator();
////
/*const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

dotenv.config({path: "./config.env"});

app.use(express.json())

if(process.env.NODE_ENV === "development"){
  app.use(morgan('dev'));
}

app.get('/', (req, res) => res.send("Hello World"));

app.use("/api/v1/profile", require("./routes/profile"));

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server running on port ${port}`));
*/
////
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
      <Stack.Screen name="Blog" component={Blog} options={{ title: "Blog" }} />
      <Stack.Screen name="BlogDetails" component={BlogDetails} options={{ title: "Blog Detail" }}/>
      <Stack.Screen name="Grupos" component={Grupos} options={{ title: "Grupos" }} />
      <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
      <Stack.Screen name="Search" component={Search} options={{ title: "Search" }} />

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

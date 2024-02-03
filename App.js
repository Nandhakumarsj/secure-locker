import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AccessHistory from "./screens/AccessHistory";
import AuthorizedUsers from "./screens/AuthorizedUsers";  
import ItemDetails from "./components/ItemDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    lexend: require("./assets/fonts/lexend.ttf"),
  });
  fontsLoaded && console.log("->Fonts Loaded");
  const SecureLockerNavigator = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <SecureLockerNavigator.Navigator initialRouteName="Home">
          <SecureLockerNavigator.Screen name="Home" component={HomeScreen} options={{'headerShown':false}} />
          <SecureLockerNavigator.Screen
            name="Authorized Users"
            component={AuthorizedUsers}
            options={{'headerShown':false}}
          />
          <SecureLockerNavigator.Screen
            name="Access History"
            component={AccessHistory}
            options={{'headerShown':false}}
          />
          <SecureLockerNavigator.Screen
            name="Item Details"
            component={ItemDetails}
            options={{'headerShown':false}}
          />
        </SecureLockerNavigator.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" backgroundColor="#aff" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aff",
    alignItems: "center",
    justifyContent: "center",
  },
});

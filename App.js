import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
// import AuthorizedUsers from "./screens/AuthorizedUsers";
// import HomeScreen from "./screens/HomeScreen";
// import AccessHistory from "./screens/AccessHistory";
import ItemDetails from "./components/ItemDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    lexend: require("./assets/fonts/lexend.ttf"),
  });
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      {/* <AccessHistory/> */}
      <ItemDetails />
      {/* <AuthorizedUsers/> */}
      <StatusBar style="dark" backgroundColor="#aff" />
    </View>
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

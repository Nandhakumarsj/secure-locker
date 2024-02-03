import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import NaviButton from "../components/NaviButton";
import AccessHistory from "./AccessHistory";
import AuthorizedUsers from "./AuthorizedUsers";

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Secure Locker</Text>
      </View>
      <View style={styles.navigation}>
        <NaviButton label="Authorized Users" navigate={navigation.navigate} />
        <NaviButton label="Access History" navigate={navigation.navigate} />
      </View>
    </SafeAreaView>
  );
}

// export default Home;

export default function HomeScreen() {
  const SecureLockerNavigator = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SecureLockerNavigator.Navigator initialRouteName="Home">
        <SecureLockerNavigator.Screen name="Home" component={Home} />
        <SecureLockerNavigator.Screen
          name="Authorized Users"
          component={AuthorizedUsers}
        />
        <SecureLockerNavigator.Screen
          name="Access History"
          component={AccessHistory}
        />
        <SecureLockerNavigator.Screen />
      </SecureLockerNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTxt: {
    fontFamily: "lexend",
    fontSize: 22,
    fontWeight: "400",
  },
  navigation: {
    flex: 2,
    top: 30,
  },
});

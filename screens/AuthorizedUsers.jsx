import { AntDesign } from "@expo/vector-icons";
import {
  SafeAreaView,
  View,
  Pressable,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import UserDetails from "../components/UserDetails";

export default function AuthorizedUsers({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={styles.headerTxt}>
            <AntDesign name="home" size={25} color="#f89" />
            {" Home"}
          </Text>
        </Pressable>
        <Text style={styles.headerTxt}>Authorized Users</Text>
      </View>
      <ScrollView>
        <UserDetails />
        <UserDetails />
        <UserDetails />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    top: StatusBar.currentHeight + 10,
  },
  header: {
    flexDirection: "row",
    marginTop: 17,
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  headerTxt: {
    fontFamily: "lexend",
    fontSize: 23,
    marginVertical: 10,
  },
});

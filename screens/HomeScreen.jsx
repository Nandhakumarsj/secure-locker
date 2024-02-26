import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import NaviButton from "../components/NaviButton";

export default function HomeScreen({ navigation }) {
  const navHandler = (label) => {
    navigation.navigate(label);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Secure Locker</Text>
      </View>
      <View style={styles.navigation}>
        <NaviButton label="Authorized Users" nav={navHandler} />
        <NaviButton label="Access History" nav={navHandler} />
      </View>
    </SafeAreaView>
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
    minWidth: 30,
  },
  headerTxt: {
    fontFamily: "lexend",
    fontSize: 24,
    fontWeight: "500",
  },
  navigation: {
    flex: 2,
    top: 30,
    alignItems: "center",
  },
});

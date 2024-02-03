import { AntDesign } from "@expo/vector-icons";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AccessItem from "../components/AccessItem";

export default function AccessHistory() {
  // { navigation }
  return (
    <SafeAreaView
      // onTouchStart={navigation.navigate("Home")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Pressable
          onPress={() => console.warn("Yo!")}
          style={{ marginTop: 20 }}
        >
          <Text style={styles.headerTxt}>
            <AntDesign name="home" size={25} color="#f89" />
            {" Home"}
          </Text>
        </Pressable>
        <Text style={styles.headerTxt}>Access History</Text>
      </View>

      <ScrollView style={styles.itemList}>
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
        <AccessItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    top: StatusBar.currentHeight + 10,
    alignSelf: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
  },
  headerTxt: {
    fontFamily: "lexend",
    fontSize: 22,
    marginVertical: 10,
  },
  itemList: {
    flex: 2,
    flexDirection: "column",
    margin: 27,
  },
});

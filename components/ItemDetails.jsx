import { MaterialIcons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ItemDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => console.warn("Yo! Go Back!")}
        style={styles.header}
      >
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTxt}> Back</Text>
      </Pressable>
      <Text style={styles.contentTitle}>Authorized Person Accessed</Text>
      <View
        style={{ alignItems: "center", flex: 1 / 5, justifyContent: "center" }}
      >
        <Text style={styles.contentBody}>Access Time : 12:40 pm</Text>
        <Text style={styles.contentBody}>Date Accessed : 02/02/2024</Text>
      </View>
      <View style={styles.imgContent}>
        <Image
          source={require("../assets/imgs/man2.jpg")}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            resizeMode: "contain",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    top: StatusBar.currentHeight + 10,
    justifyContent: "space-evenly",
  },
  header: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  headerTxt: {
    fontFamily: "lexend",
    fontSize: 22,
  },
  contentTitle: {
    fontFamily: "lexend",
    fontSize: 22,
    color: "#3a5" && "#a01a",
  },
  contentBody: {
    fontFamily: "lexend",
    fontSize: 18,
    color: "#2af",
  },
  imgContent: {
    flex: 2 / 4,
    backgroundColor: "#333",
    marginBottom: 20,
  },
});

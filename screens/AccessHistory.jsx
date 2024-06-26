import { AntDesign } from "@expo/vector-icons";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AccessItem from "../components/AccessItem";
import accessHistory from "../assets/access-history.json";

const history = [];

function appendHistory(newData) {
  history.push(newData);
}

export { appendHistory };
export default function AccessHistory({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{ marginTop: 20 }}
        >
          <Text style={styles.headerTxt}>
            <AntDesign name="home" size={25} color="#f89" />
            {" Home"}
          </Text>
        </Pressable>
        <Text style={styles.headerTxt}>Access History</Text>
      </View>
      <FlatList
        style={styles.itemList}
        data={history}
        renderItem={(timestamp) => (
          <AccessItem
            navigation={navigation}
            time={timestamp.item.time}
            authorized={timestamp.item.authorized}
            date={timestamp.item.date}
          />
        )}
      />
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
    marginHorizontal:15
  },
  itemList: {
    marginLeft: 25,
    marginBottom: 40,
  },
});

import { AntDesign } from "@expo/vector-icons";
import {
  SafeAreaView,
  View,
  Pressable,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import UserDetails from "../components/UserDetails";
import users from "../assets/users.json";

const userAssets = {
  1: require("../assets/imgs/man1.jpg"),
  2: require("../assets/imgs/man2.jpg"),
};
export default function AuthorizedUsers({ navigation }) {
  const { Users } = users;
  const userItems = [];
  for (const user in Users) {
    userItems.push({
      id: Users[user].id,
      name: Users[user].name,
      profile: userAssets[Users[user].id],
      dateEnrolled: Users[user].dateEnrolled,
      dob: Users[user].dob,
    });
  }
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
      <FlatList
        style={{ margin: 4 }}
        data={userItems}
        renderItem={(userItem) => (
          <UserDetails
            key={userItem.item.id}
            profileName={userItem.item.name}
            profileImg={userItem.item.profile}
            dob={userItem.item.dob}
            enrolledDate={userItem.item.dateEnrolled}
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
    marginHorizontal: 15,
  },
});

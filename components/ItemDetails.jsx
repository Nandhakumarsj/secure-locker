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

export default function ItemDetails({route, navigation}) {
  const {date, time, authorized, res} = route.params
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.header}
      >
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTxt}> Back</Text>
      </Pressable>
      { authorized? <Text style={styles.authContentTitle}>Authorized Person Accessed</Text>:
      <Text style={styles.unAuthContentTitle}>UnAuthorized Person Accessed</Text>}
      <View
        style={{ alignItems: "center", flex: 1 / 5, justifyContent: "center" }}
      >
        <Text style={styles.contentBody}>Access Time : {time}</Text>
        <Text style={styles.contentBody}>Date Accessed : {date}</Text>
      </View>
      <View style={styles.imgContent}>
        <Image
          // source={require("../assets/imgs/man2.jpg")}
          source={{uri:`data:image/png;base64,${res}`}}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            resizeMode: "contain",
            borderRadius:50
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
    justifyContent: "space-evenly"
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
  authContentTitle: {
    fontFamily: "lexend",
    fontSize: 22,
    alignSelf:'center',
    color: "#892",
  },
  unAuthContentTitle: {
    fontFamily: "lexend",
    fontSize: 22,
    alignSelf:'center',
    color:'#a01'
  },
  contentBody: {
    fontFamily: "lexend",
    fontSize: 18,
    color: "#2af",
  },
  imgContent: {
    flex: 2 / 4,
    marginBottom: 20,
    borderRadius:50
  },
});

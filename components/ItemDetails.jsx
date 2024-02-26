import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ItemDetails({ route, navigation }) {
  const { date, time, authorized, res } = route.params;
  const [img, setImg] = useState(
    "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"
  );

  useEffect(() => {
    const getImage = async () => {
      fetch(`http://192.168.43.73:8080/${date}-${time}`)
        .then((res) => {
          console.log(res.json());
        })
        .then((data) => console.log(data));
    };
    getImage();
  }, []); // Only run once on mount

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTxt}> Back</Text>
      </Pressable>
      {authorized ? (
        <Text style={styles.authContentTitle}>
          Authorized Person Recognized
        </Text>
      ) : (
        <Text style={styles.unAuthContentTitle}>
          UnAuthorized Person Recognized
        </Text>
      )}
      <View
        style={{ alignItems: "center", flex: 1 / 5, justifyContent: "center" }}
      >
        <Text style={styles.contentBody}>Access Time : {time}</Text>
        <Text style={styles.contentBody}>Date Accessed : {date}</Text>
      </View>
      <View style={styles.imgContent}>
        <Image
          // source={{ uri: `data:image/png;base64,${img}` }}
          source={{ uri: img }}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            resizeMode: "contain",
            borderRadius: 50,
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
  authContentTitle: {
    fontFamily: "lexend",
    fontSize: 22,
    alignSelf: "center",
    color: "#892",
  },
  unAuthContentTitle: {
    fontFamily: "lexend",
    fontSize: 22,
    alignSelf: "center",
    color: "#a01",
  },
  contentBody: {
    fontFamily: "lexend",
    fontSize: 18,
    color: "#2af",
  },
  imgContent: {
    flex: 2 / 4,
    marginBottom: 20,
    borderRadius: 50,
  },
});

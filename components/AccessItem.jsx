import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AccessItem({
  navigation,
  time,
  authorized,
  date,
  res,
}) {
  const applyStyle = authorized ? styles.txt : styles.impTxt;
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.select}
        onPress={() =>
          navigation.navigate("Item Details", {
            time: time,
            authorized: authorized,
            date: date,
            res: res,
          })
        }
      >
        <View>
          {authorized ? (
            <Text style={styles.txt}>Authorized Person Accessed</Text>
          ) : (
            <Text style={styles.impTxt}>UnAuthorized Person Accessed</Text>
          )}
        </View>
        <View>
          <Text style={applyStyle}>{time}</Text>
        </View>
        <View>
          <Text style={applyStyle}>{date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#123",
    borderRadius: 20,
    borderColor: "#2aaa",
    borderWidth: 2,
    marginBottom: 15,
  },
  select: {
    width: 300,
    padding: 20,
    flex: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  txt: {
    fontFamily: "lexend",
    fontSize: 17,
    color: "#afa",
  },
  impTxt: {
    fontFamily: "lexend",
    fontSize: 17,
    color: "#f52f",
  },
});

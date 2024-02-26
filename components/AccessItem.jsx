import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AccessItem({
  navigation,
  time,
  authorized,
  date,
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
          })
        }
      >
        <View>
          {authorized ? (
            <Text style={styles.txt}>Authorized Person Detected</Text>
          ) : (
            <Text style={styles.impTxt}>UnAuthorized Person Detected</Text>
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
    backgroundColor: "#fffa",
    borderRadius: 20,
    borderColor: "#aff8",
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
    color: "#290",
  },
  impTxt: {
    fontFamily: "lexend",
    fontSize: 17,
    color: "#f52f",
  },
});

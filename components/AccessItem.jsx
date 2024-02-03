import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AccessItem({navigation}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.select}
        onPress={() => navigation.navigate("Item Details")}
      >
        <View>
          <Text style={styles.txt}>Authorized Person Accessed</Text>
        </View>
        <View>
          <Text style={styles.txt}>12:40 pm</Text>
        </View>
        <View>
          <Text style={styles.txt}>02/2/2024</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff9",
    borderRadius: 20,
    borderColor: "#4fa",
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
  },
});

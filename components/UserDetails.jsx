import { Image, View, Text, StyleSheet } from "react-native";

export default function UserDetails() {
  return (
    <View style={styles.container}>
      <View style={{justifyContent:'center'}}>
        <Image source={require("../assets/imgs/man1.jpg")} style={styles.img} />
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.detailsTxt}>Man 1</Text>
        </View>
        <View>
          <Text style={styles.detailsTxt}>DOB:</Text>
          <Text style={styles.detailsTxt}>01/01/2003</Text>
        </View>
        <View>
          <Text style={styles.detailsTxt}>Enrolled Date:</Text>
          <Text style={styles.detailsTxt}>02/02/2003</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 440,
    height: 260,
    flexDirection: "row",
    backgroundColor: "#2b9b",
    borderRadius: 10,
    marginVertical: 10,
  },
  img: {
    // width: 180,
    // flex: 1,
    // height: undefined,
    // resizeMode: "contain",
    width: 200,
    height: 200,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#202"
  },
  details: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  detailsTxt: {
    fontFamily: "lexend",
    fontWeight: "400",
    fontSize: 17,
  },
  detailsContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

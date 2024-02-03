import { Pressable, StyleSheet, Text, View } from "react-native";

export default function NaviButton({ label, nav }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={()=>nav(label)}>
        <Text style={styles.btnTxt}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 255,
    height:70,
    margin:15,
},
btn: {
    backgroundColor: "#F8E061",
    borderRadius: 25,
    width: "100%",
    padding: 20,
    height: '100%',
    justifyContent:'center'
},
btnTxt: {
      textAlign: "center",
      fontFamily:'lexend',
    fontSize: 15,
    fontWeight: '300'
  },
});

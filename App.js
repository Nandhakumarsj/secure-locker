import { StatusBar } from "expo-status-bar";
import { loadAsync } from "expo-font";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { Alert, LogBox, Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useRef, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import AccessHistory, { appendHistory } from "./screens/AccessHistory";
import AuthorizedUsers from "./screens/AuthorizedUsers";
import ItemDetails from "./components/ItemDetails";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true, // Explicit Banner
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert(
        "Warning!",
        "Failed to get push token for push notification!",
        [{ text: "OK", style: "destructive" }]
      );
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
  } else {
    Alert.alert(
      "Simulation Device Detected!",
      "Must use physical device for Push Notifications",
      [{ text: "Understood", style: "cancel" }]
    );
  }

  return token.data;
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const loadFonts = async () => {
    await loadAsync("lexend", require("./assets/fonts/lexend.ttf"));
  };
  LogBox.ignoreLogs(["new NativeEventEmitter"]);
  LogBox.ignoreAllLogs();
  useEffect(() => {
    loadFonts().then(() => console.log("-> Fonts Loaded"));
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token, console.log(token))
    );
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(
          notification
          );
        data = notification.request.content.data;
        appendHistory({
          time: data["time"],
          authorized: data["auth"],
          date: data['date'],
          img: data['img']
        });
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response.notification.request.content.data); // Add Access History Item [res.noti.req.con.data]
        data = response.notification.request.content.data;
        appendHistory({
          time: data["time"],
          authorized: data["auth"],
          date: data['date'],
          img: data['img']
        });
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  const SecureLockerNavigator = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <SecureLockerNavigator.Navigator initialRouteName="Home">
          <SecureLockerNavigator.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <SecureLockerNavigator.Screen
            name="Authorized Users"
            component={AuthorizedUsers}
            options={{ headerShown: false }}
          />
          <SecureLockerNavigator.Screen
            name="Access History"
            component={AccessHistory}
            options={{ headerShown: false }}
          />
          <SecureLockerNavigator.Screen
            name="Item Details"
            component={ItemDetails}
            options={{ headerShown: false }}
          />
        </SecureLockerNavigator.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" backgroundColor="#1bbf" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aff",
    alignItems: "center",
    justifyContent: "center",
  },
});

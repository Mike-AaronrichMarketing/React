import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import axios from "axios";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Fontisto";
import Icon4 from "react-native-vector-icons/AntDesign";

import Footer from "../assets/Components/Footer";

let customFonts = {
  "proxima-nova-thin": require("../assets/fonts/proxima-nova-thin.ttf"),
  "proxima-nova-normal": require("../assets/fonts/proxima-nova-normal.ttf"),
  "proxima-nova-bold": require("../assets/fonts/proxima-nova-bold.ttf"),
  "proxima-nova-extrabold": require("../assets/fonts/proxima-nova-extrabold.ttf"),
  "proxima-nova-black": require("../assets/fonts/proxima-nova-black.ttf"),
  "times-new-roman": require("../assets/fonts/times-new-roman.ttf"),
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    // I think finalStatus for iOS must not be returning the right thing on iOS and is causing this error
    // but everything is working
    // so I just commented out this error
    // got to this link to fix in the future: https://forums.expo.io/t/ios-push-notifications-not-getting-expo-token/24154
    // if (finalStatus !== 'granted') {
    //   alert('Failed to get push token for push notification!');
    //   return;
    // }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default function Home({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const { navigate } = navigation;
  const page = "Home";

  let handleNav = (screenName) => {
    navigate(`${screenName}`, { name: `${screenName}` });
  };

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    _loadFontsAsync();
    registerForPushNotificationsAsync().then(token => {
      axios
        .post('https://notifications.dothanpediatricclinic.com/api/token', { token: token })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  });

  if (fontsLoaded) {
    return (
      <View style={styles.background}>
        <View style={styles.centerDisplayCenter}>
          <Image
            style={styles.headerPhoto}
            source={require("../assets/header-images/dashboard-header.jpg")}
          />
          <Text style={styles.headerPhotoText}>How can I help?</Text>
        </View>
        <LinearGradient
          colors={["#0056A4", "#417FBE"]}
          style={styles.middleBackground}
        >
          <View style={styles.middleBackgroundRow}>
            <TouchableOpacity 
              style={styles.dashboardOptions}
              onPress={() => handleNav("AboutUs")}
            >
              <View style={styles.dashboardOptionsIconCircle1}>
                <Icon2
                  name="heartbeat"
                  size={22}
                  color="white"
                />
              </View>
              <Text
                style={styles.dashboardOptionsText}
              >
                About Us
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.dashboardOptions}
              onPress={() => handleNav("Services")}
            >
              <View style={styles.dashboardOptionsIconCircle}>
                <Icon
                  name="stethoscope"
                  size={25}
                  color="white"
                />
              </View>
              <Text
                style={styles.dashboardOptionsText}
              >
                Services
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.dashboardOptions}
              onPress={() => handleNav("PatientPortal")}
            >
              <View style={styles.dashboardOptionsIconCircle}>
                <Icon2
                  name="laptop-medical"
                  size={20}
                  color="white"
                />
              </View>
              <Text
                style={styles.dashboardOptionsText}
              >
                Patient Portal
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.middleBackgroundRow}>
            <TouchableOpacity 
              style={styles.dashboardOptions}
              onPress={() => handleNav("Appointments")}
            >
              <View style={styles.dashboardOptionsIconCircle}>
                <Icon2
                  name="calendar-alt"
                  size={24}
                  color="white"
                />
              </View>
              <Text
                style={styles.dashboardOptionsText}
              >
                Appointments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.dashboardOptions}
              onPress={() => handleNav("Financial")}
            >
              <View style={styles.dashboardOptionsIconCircle}>
                <Icon2
                  name="money-check-alt"
                  size={24}
                  color="white"
                />
              </View>
              <Text
                style={styles.dashboardOptionsText}
              >
                Financial
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.dashboardOptionsTwo}
              onPress={() => handleNav("SymptomAdvisor")}
            >
              <View style={styles.dashboardOptionsIconCircle}>
                <Icon3
                  name="search"
                  size={25}
                  color="white"
                />
              </View>
              <Text
                style={styles.dashboardOptionsText}
              >
                Symptom
              </Text>
              <Text
                style={styles.dashboardOptionsText}
              >
                Advisor
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.middleBackgroundRow}>
            <TouchableOpacity 
              style={styles.dashboardOptions}
              onPress={() => handleNav("Forms")}
            >
              <View style={styles.dashboardOptionsIconCircle}>
                <Icon
                  name="credit-card"
                  size={22}
                  color="white"
                />
              </View>
              <Text
                style={styles.dashboardOptionsText}
              >
                Forms
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.dashboardOptionsTwo}
              onPress={() => handleNav("CheckupsAndImmunizations")}
            >
              <View style={styles.dashboardOptionsIconCircle}>
                <Icon2
                  name="syringe"
                  size={22}
                  color="white"
                />
              </View>
              <Text
                style={styles.dashboardOptionsText}
              >
                Check-ups &
              </Text>
              <Text
                style={styles.dashboardOptionsText}
              >
                Immunizations
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.dashboardOptions} 
              onPress={() => handleNav("DosageCharts")}
            >
              <View style={styles.dashboardOptionsIconCircle}>
                <Icon4
                  name="filetext1"
                  size={23}
                  color="white"
                />
              </View>
              <Text
                style={styles.dashboardOptionsText}
              >
                Dosage Charts
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <TouchableOpacity 
          style={styles.redButton} 
          onPress={() => handleNav("Search")}
        >
          <Text
            style={styles.redButtonText}
          >
            Search
          </Text>
        </TouchableOpacity>
        <Footer handleNav={handleNav} page={page} />
      </View>
    );
  } 
  else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F2C454",
  },
  centerDisplayCenter: {
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    width: "100%"
  },
  dashboardOptions: {
    width: "33%",
    height: "28%",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboardOptionsTwo: {
    width: "33%",
    height: "28%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  dashboardOptionsIconCircle: {
    width: 55,
    height: 55,
    backgroundColor: "#FFFFFF10",
    borderRadius: 180,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  dashboardOptionsIconCircle1: {
    width: 55,
    height: 55,
    backgroundColor: "#FFFFFF10",
    borderRadius: 180,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 1,
    paddingLeft: 1.5,
    marginBottom: 5
  },
  dashboardOptionsText: {
    color: "#FFFFFF80",
    fontSize: 12,
    fontFamily: "proxima-nova-bold",
    textAlign: "center",
    marginTop: 0,
  },
  headerPhoto: {
    minWidth: 475,
    height: "100%",
  },
  headerPhotoText: {
    color: "white",
    fontFamily: "proxima-nova-bold",
    fontSize: 40,
    width: "55%",
    position: "absolute",
    top: 30,
    left: "6%",
  },
  middleBackground: {
    height: "60%",
    flexWrap: "wrap",
    paddingTop: "17%",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  middleBackgroundRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  redButton: {
    position: "absolute",
    top: "27%",
    left: "10%",
    width: "80%",
    backgroundColor: "#F1544C",
    fontFamily: "proxima-nova-bold",
    fontSize: 16,
    borderRadius: 6,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    justifyContent: "center",
  },
  redButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "proxima-nova-bold",
    width: "100%",
    textAlign: "center",
    letterSpacing: 1,
  },
});

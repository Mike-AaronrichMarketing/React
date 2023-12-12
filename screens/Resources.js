import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";

import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";

export default class Resources extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
      headerShown: false,
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    const page = "Resources";

    let handleNav = (screenName) => {
      navigate(`${screenName}`, { name: `${screenName}` });
    };

    return (
      <View style={styles.background}>
        <Header backFunc={() =>
            navigate("Home", {
              name: "Home",
            })}/>
        <View style={styles.middleBackground}>
          <ScrollView>
            <Image
              style={styles.headerPhoto}
              source={require("../assets/header-images/header4.jpeg")}
            />
            <View style={styles.middleBackgroundBottom}>
              <Text style={styles.headingText}>Resources</Text>
              <Text style={styles.subheadingText}>Tap a link below:</Text>

              <View style={styles.verticalMenu}>
                <Text
                  style={styles.bodyText}
                  onPress={() => handleNav("PaymentOptions")}
                >
                  PAYMENT OPTIONS
                </Text>
              </View>
              <View style={styles.verticalMenu}>
                <Text
                  style={styles.bodyText}
                  onPress={() => handleNav("PatientPortalFAQ")}
                >
                  PATIENT PORTAL FAQ
                </Text>
              </View>
              <View style={styles.verticalMenu}>
                <Text
                  style={styles.bodyText}
                  onPress={() => handleNav("FormsAndPolicies")}
                >
                  FORMS AND POLICIES
                </Text>
              </View>
              <View style={styles.verticalMenu}>
                <Text
                  style={styles.bodyText}
                  onPress={() => handleNav("CheckupInfo")}
                >
                  CHECKUP INFO
                </Text>
              </View>
              <View style={styles.verticalMenu}>
                <Text
                  style={styles.bodyText}
                  onPress={() => handleNav("ImmunizationSchedule")}
                >
                  IMMUNIZATION SCHEDULE
                </Text>
              </View>
              <View style={styles.verticalMenu}>
                <Text
                  style={styles.bodyText}
                  onPress={() => handleNav("EmergencyInfo")}
                >
                  EMERGENCY INFO
                </Text>
              </View>
              <View style={styles.verticalMenu}>
                <Text
                  style={styles.bodyText}
                  onPress={() => handleNav("AppointmentInfo")}
                >
                  APPOINTMENT INFO
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <Footer handleNav={handleNav} page={page} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    paddingTop: 20,
    backgroundColor: "#417FBE",
  },
  backArrowCircle: {
    width: 44,
    height: 44,
    backgroundColor: "#FFFFFF75",
    borderRadius: 180,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    left: 20,
    zIndex: 10,
  },
  backButton: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  bodyText: {
    color: "white",
    fontFamily: "proxima-nova-bold",
    fontSize: 20,
  },
  header: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#417FBE",
  },
  headerPhoto: {
    width: 475,
    height: 300,
  },
  headingText: {
    color: "#0056A4",
    fontSize: 24,
    fontFamily: "proxima-nova-bold",
  },
  middleBackground: {
    height: "80%",
    justifyContent: "space-between",
    alignContent: "space-between",
    backgroundColor: "#F8F8F8",
  },
  middleBackgroundBottom: {
    paddingTop: "5%",
    paddingRight: "8%",
    paddingLeft: "8%",
    paddingBottom: "5%",
  },
  subheadingText: {
    color: "#252425",
    fontFamily: "proxima-nova-normal",
    fontSize: 16,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontFamily: "proxima-nova-bold",
    width: 200,
    textAlign: "center",
    marginTop: -6,
    marginBottom: -10,
  },
  text2: {
    color: "white",
    fontSize: 14.5,
    fontFamily: "proxima-nova-bold",
    width: 200,
    textAlign: "center",
    margin: 0,
  },
  verticalMenu: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F1544C",
    borderRadius: 6,
    padding: 20,
    marginBottom: 20,
  },
});

import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  Linking,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/MaterialIcons";

import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";

export default class Locations extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
      headerShown: false,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      bodyInfo: [],
    };
  }

  componentDidMount() {
    this.setState({
      bodyInfo: [
        ...this.state.bodyInfo,
        {
          locationName: "Dothan Pediatric Clinic",
          locationAddress: `126 Clinic Drive \nDothan, AL 36303`,
          phone: "334.793.1881",
          contactPage: "DothanPedContactForLocations",
          locationLink: "https://goo.gl/maps/FnjWPSdnLeVNCeuK8",
        },
        {
          locationName: "Dothan Pediatric Subspecialty Clinic",
          locationAddress: `5565 Montgomery Highway \nDothan, AL 36303`,
          phone: "334.699.3733",
          contactPage: "DothanSubContactForLocations",
          locationLink: "https://goo.gl/maps/MHZCxuwbWZyeLxtJ6",
        },
        {
          locationName: "Enterprise",
          locationAddress: `526 Boll Weevil Cir \nEnterprise, AL 36330`,
          phone: "334.308.1166",
          contactPage: "EnterprisePedContactForLocations",
          locationLink: "https://goo.gl/maps/KgCMfCG3BKRm5CG98",
        },
        {
          locationName: "Eufaula",
          locationAddress: `323 E Barbour St \nEufaula, AL 36027`,
          phone: "334.308.1166",
          contactPage: "EufaulaPedContactForLocations",
          locationLink: "https://goo.gl/maps/md8WHsmp94ZbhvPFA",
        },
        {
          locationName: "Ozark",
          locationAddress: `2125 W Roy Parker Rd \nOzark, AL 36360`,
          phone: "334.793.1881",
          contactPage: "OzarkPedContactForLocations",
          locationLink: "https://goo.gl/maps/WK3xzQRo4u1z6DLU7",
        },
      ],
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const page = "Locations";
    let index = 0;

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
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
            }}
            width="100%"
          >
            <Image
              style={styles.headerPhoto}
              source={require("../assets/header-images/locations-header.jpeg")}
            />
            <Text style={styles.headingText}>Locations</Text>

            <View style={styles.middleBackgroundBottom}>
              {this.state.bodyInfo !== []
                ? this.state.bodyInfo.map((el) => {
                    index++;

                    return (
                      <View style={styles.locationContainer} key={index}>
                        <Icon name="map-marker" size={42} color="#0056A4" />
                        <View style={styles.locationText}>
                          <Text style={styles.locationName}>
                            {el.locationName}
                          </Text>
                          <Text
                            style={styles.locationAddress}
                            onPress={() =>
                              Linking.openURL(`${el.locationLink}`)
                            }
                          >
                            <Text style={styles.locationBoldText}>
                              Address:{" "}
                            </Text>
                            <Text style={styles.locationAddressLink}>
                              {el.locationAddress}
                            </Text>
                          </Text>
                          <Text style={styles.locationBoldText}>Phone: </Text>
                          <Text style={styles.locationPhone}>{el.phone}</Text>
                          <View style={styles.redButton}>
                            <Text
                              style={styles.redButtonText}
                              onPress={() => handleNav(el.contactPage)}
                            >
                              Location Info
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })
                : null}
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
    backgroundColor: "#417FBE",
    paddingTop: 20,
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
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#417FBE",
  },
  headerPhoto: {
    width: 475,
    height: 300,
    resizeMode: "stretch",
  },
  headingText: {
    color: "#0056A4",
    fontSize: 24,
    fontFamily: "proxima-nova-bold",
    marginTop: 25,
    marginLeft: "20%",
    width: "100%",
    textAlign: "left",
  },
  locationAddress: {
    marginBottom: 20,
    fontSize: 14,
  },
  locationAddressLink: {
    marginBottom: 20,
    fontSize: 14,
    textDecorationLine: "underline",
    textDecorationColor: "#0056A4",
    color: "#0056A4",
  },
  locationBoldText: {
    fontFamily: "proxima-nova-bold",
  },
  locationContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#707070",
    borderRadius: 20,
    marginBottom: 20,
    padding: 25,
    shadowColor: "#000000",
    elevation: 2,
  },
  locationName: {
    color: "#0056A4",
    fontFamily: "proxima-nova-bold",
    marginBottom: 15,

    fontSize: 18,
  },
  locationPhone: {
    marginBottom: 20,
    fontSize: 14,
    color: "#F1544C",
  },
  locationText: {
    marginLeft: 25,
  },
  middleBackground: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  middleBackgroundBottom: {
    width: "100%",
    paddingTop: "5%",
    paddingRight: "8%",
    paddingLeft: "8%",
    paddingBottom: "5%",
  },
  redButton: {
    width: 150,
    backgroundColor: "#F1544C",
    fontFamily: "proxima-nova-bold",
    fontSize: 16,
    borderRadius: 6,
    paddingTop: 12.5,
    paddingBottom: 12.5,
  },
  redButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "proxima-nova-black",
    width: "100%",
    textAlign: "center",
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
});

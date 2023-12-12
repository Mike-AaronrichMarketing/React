import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/MaterialIcons";

import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";

export default class ContactUs extends React.Component {
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
          contactPage: "DothanPedContactUs",
        },
        {
          locationName: "Dothan Pediatric Subspecialty Clinic",
          locationAddress: `5565 Montgomery Highway \nDothan, AL 36303`,
          phone: "334.699.3733",
          contactPage: "DothanSubContactUs",
        },
        {
          locationName: "Enterprise",
          locationAddress: `526 Boll Weevil Cir \nEnterprise, AL 36330`,
          phone: "334.308.1166",
          contactPage: "EnterprisePedContactUs",
        },
        {
          locationName: "Eufaula",
          locationAddress: `323 E Barbour St \nEufaula, AL 36027`,
          phone: "334.308.1166",
          contactPage: "EufaulaPedContactUs",
        },
        {
          locationName: "Ozark",
          locationAddress: `2125 W Roy Parker Rd \nOzark, AL 36360`,
          phone: "334.793.1881",
          contactPage: "OzarkPedContactUs",
        },
      ],
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const page = "ContactUs";
    let index = 0;

    const { title } = this.state;

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
              source={require("../assets/header-images/header1.jpeg")}
            />
            <Text style={styles.headingText}>Contact Us</Text>
            <Text style={styles.subheadingText}>Choose a Location:</Text>
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
                          <Text style={styles.locationAddress}>
                            <Text style={styles.locationBoldText}>
                              Address:{"\n"}
                            </Text>
                            {el.locationAddress}
                          </Text>
                          <Text style={styles.locationBoldText}>Phone: </Text>
                          <Text style={styles.locationPhone}>{el.phone}</Text>
                          <View style={styles.redButton}>
                            <Text
                              style={styles.redButtonText}
                              onPress={() => handleNav(el.contactPage)}
                            >
                              Contact
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
    width: 200,
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
    width: 120,
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
  subheadingText: {
    color: "#252425",
    fontFamily: "proxima-nova-normal",
    fontSize: 16,
    marginLeft: "20%",
    width: "100%",
    textAlign: "left",
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

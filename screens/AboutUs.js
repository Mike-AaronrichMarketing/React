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
import Icon2 from "react-native-vector-icons/Ionicons";

import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";

export default class AboutUs extends React.Component {
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
          contactPage: "DothanProv",
          locationLink: "https://goo.gl/maps/FnjWPSdnLeVNCeuK8",
          image: require("../assets/other-images/dothan-location-app.jpg"),
          hours: [
            "Mon - Fri: 8:00am - 12:00pm; 1:00pm - 5:00pm",
            "Saturday: 8:00am - 11:00am",
            "Sunday: 8:00am - 11:00am"
          ],
          phoneHours: [
            "Mon - Fri: 7:30am - 5:30pm",
          ],
        },
        {
          locationName: "Dothan Pediatric Subspecialty Clinic",
          locationAddress: `5565 Montgomery Highway \nDothan, AL 36303`,
          phone: "334.699.3733",
          contactPage: "DothanSubProv",
          locationLink: "https://goo.gl/maps/MHZCxuwbWZyeLxtJ6",
          image: require("../assets/other-images/dpsc.png"),
          hours: [
            "Mon - Fri: 7:30am-12:00pm; 1:00pm-5:30pm",
            "Friday: 7:30am - 12:00pm",
            "Sat - Sun: Closed",
          ],
          phoneHours: [
            "Mon - Fri: 7:30am - 5:30pm",
            "Sat - Sun: Closed",
          ],
        },
        {
          locationName: "Enterprise",
          locationAddress: `526 Boll Weevil Cir \nEnterprise, AL 36330`,
          phone: "334.308.1166",
          contactPage: "EnterpriseProv",
          locationLink: "https://goo.gl/maps/KgCMfCG3BKRm5CG98",
          image: require("../assets/other-images/epc.png"),
          hours: [
            "Mon - Fri: 8:00am - 12:00pm; 1:00pm - 5:00pm",
            "Sat - Sun: Closed",
          ],
          phoneHours: [
            "Mon - Fri: 7:30am - 5:30pm",
            "Sat - Sun: Closed",
          ],
        },
        {
          locationName: "Eufaula",
          locationAddress: `323 E Barbour St \nEufaula, AL 36027`,
          phone: "334.619.0940",
          contactPage: "EufaulaProv",
          locationLink: "https://goo.gl/maps/md8WHsmp94ZbhvPFA",
          image: require("../assets/other-images/eufaula-location-app.jpg"),
          hours: [
            "Mon - Thurs: 8:00am - 12:00pm; 1:00pm - 5:00pm",
            "Friday: 8:00am - 12:00pm",
            "Sat - Sun: Closed",
          ],
          phoneHours: [
            "Mon - Fri: 7:30am - 5:30pm",
            "Sat - Sun: Closed",
          ],
        },
        {
          locationName: "Ozark",
          locationAddress: `2125 W Roy Parker Rd \nOzark, AL 36360`,
          phone: "334.445.7337",
          contactPage: "OzarkProv",
          locationLink: "https://goo.gl/maps/WK3xzQRo4u1z6DLU7",
          image: require("../assets/other-images/ozark-location-app.jpg"),
          hours: [
            "Mon - Fri: 8:00am - 12:00pm; 1:00pm - 5:00pm;",
            "Sat - Sun: Closed",
          ],
          phoneHours: [
            "Mon - Fri: 7:30am - 5:30pm",
            "Sat - Sun: Closed",
          ],
        },
      ],
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const page = "AboutUs";
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
              source={require("../assets/header-images/header3.jpeg")}
            />

            <Text style={styles.headingText}>About Us</Text>
            <Text style={styles.headingPars}>
            Caring for the medical needs of children in the Wiregrass region has been the mission of Dothan Pediatric Clinic since its inception in 1953. At 27 years old, Dr. William Lies, III made his way to Dothan, Alabama. As one of only three pediatricians in the city, he opened his first office and shortly thereafter became the first Board Certified Pediatrician in Dothan.
            </Text>
            <Text style={styles.headingPars}>
            Several years later, Dr. Roy Driggers and Dr. Jim Duke joined Dr. Lies and the practice became Lies, Duke and Driggers until its incorporation as Dothan Pediatric Clinic, P.A. in 1968. Due to the immense success and growth of the practice, in 1982, Dothan Pediatric Clinic decided to build and relocate to a larger office near Southeast Health (formerly known as Southeast Alabama Medical Center).
            </Text>
            <Text style={styles.headingPars}>
            In 1983, Dr. William R. Barron, Jr. joined Dothan Pediatric Clinic, followed by Dr. Robert J. Benak in 1989, two highly-respected pediatricians who continue to practice at the clinic today. With continued growth, Dothan Pediatric Clinic moved again in 1996 to its current location on Clinic Drive, near Flowers Hospital. Seven years later, the founder, Dr. Lies, retired, after 50 years of pediatric service.
            </Text>
            <Text style={styles.headingPars}>
            Over the course of the next several years, Dothan Pediatric Clinic added more pediatricians to its staff and opened three satellite offices: Eufaula Pediatric Clinic (2008), Dothan Pediatric Subspecialty Clinic (2010), Enterprise Pediatric Clinic (2012), and Ozark Pediatric Clinic (2016). With a current staff of pediatricians, pediatric subspecialists, nurse practitioners, and over 100 members of support staff, the future of Dothan Pediatric Healthcare Network is as bright today as when it first put down its roots in 1953.
            </Text>

            <Text style={styles.headingText}>Our Mission</Text>
            <Text style={styles.headingPars}>
            To place our patients first as we advance our leadership position in pediatric healthcare, providing child healthcare with compassion, excellence, and value to the communities we serve. 
            </Text>
            <Text style={styles.headingPars}>
            Each healthcare provider and employee plays a vital role in the common goal of providing the highest quality of patient care possible. Inherent in this task is the necessity of a professional team subscribing to the following characteristics: courtesy, compassion, promptness, efficiency, and excellence.
            </Text>
            <Text style={styles.headingPars}>
            As service providers in a medical atmosphere, our physicians, nurse practitioners, and employees will strive to ensure your trust and confidence in our providers and facilities. 
            </Text>
            <Text style={styles.headingPars}>
            Thank you for choosing Dothan Pediatric Healthcare Network as your child’s healthcare provider.
            </Text>
            

            <Text style={styles.headingText}>Locations</Text>

            <View style={styles.middleBackgroundBottom}>
              {this.state.bodyInfo !== []
                ? this.state.bodyInfo.map((el) => {
                    index++;

                    return (
                      <View style={styles.locationContainer} key={index}>
                        <Image style={styles.locationPhoto} source={el.image}/>
                        
                        <View style={styles.locationText}>
                          <Text style={styles.locationName}>
                            {el.locationName}
                          </Text>
                          <View
                            style={styles.locationAddress}
                            onPress={() =>
                              Linking.openURL(`${el.locationLink}`)
                            }
                          >
                          <View style={styles.locationAddressHeader}>
                            <Icon name="map-marker" size={12} color="#0056A4" style={styles.icon}/>
                            <Text style={styles.locationBoldText}>Address:</Text>
                          </View>
                          <Text style={styles.locationAddressLink}>
                            {el.locationAddress}
                          </Text>
                          </View>

                          <View style={styles.locationAddressHeader}>
                            <Icon name="phone" size={12} color="#0056A4" style={styles.icon}/>
                            <Text style={styles.locationBoldText}>Phone Number:</Text>
                          </View>                          
                          <Text style={styles.locationPhone}>{el.phone}</Text>

                          
                          <View style={styles.locationAddressHeader}>
                            <Icon2 name="ios-time" size={12} color="#0056A4" style={styles.icon}/>
                            <Text style={styles.locationBoldText}>Clinic Hours:</Text>
                          </View>  
                          <Text style={styles.locationHoursText}>{el.hours.join("\n")}</Text>                    
                          

                          <View style={styles.locationAddressHeader}>
                            <Icon2 name="md-time" size={12} color="#0056A4" style={styles.icon}/>
                            <Text style={styles.locationBoldText}>Phone Hours:</Text>
                          </View>                          
                          <Text style={styles.locationHoursText}>{el.phoneHours.join("\n")}</Text> 

                          <View style={styles.redButton}>
                            <Text
                              style={styles.redButtonText}
                              onPress={() => handleNav(el.contactPage)}
                            >
                              See Providers
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
  headingPars: {
    color: "#252425",
    fontFamily: "proxima-nova-normal",
    fontSize: 16,
    padding: "10%",
    paddingTop: 20,
    paddingBottom: 0,
    width: "100%",
    textAlign: "left",
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
  icon: {
    marginRight: 5,
  },
  locationAddress: {
    fontSize: 14,
  },
  locationAddressHeader: {
    flexDirection: "row",
    alignItems: "center",
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
    backgroundColor: "white",
    borderColor: "#707070",
    borderRadius: 3,
    marginBottom: 20,
    paddingBottom: 20,
    shadowColor: "#000000",
    elevation: 2,
  },
  locationHoursText: {
    marginBottom: 20,
  },
  locationName: {
    color: "#0056A4",
    fontFamily: "proxima-nova-bold",
    marginBottom: 20,
    fontSize: 18,
  },
  locationPhone: {
    marginBottom: 20,
    fontSize: 14,
    color: "#F1544C",
  },
  locationPhoto: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  locationText: {
    marginLeft: 20,
    marginRight: 20,
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
    marginTop: 20,
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
    marginBottom: 20,
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
  verticalMenu: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F1544C",
    borderRadius: 6,
    padding: 20,
    marginBottom: 20,
  },
});

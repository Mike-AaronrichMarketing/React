import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";

import Footer from "../assets/Components/Footer";

export default class CareProviders extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
      headerShown: false,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      bodyInfo: [],
    };
  }

  // search feature would take another 10 hours to figure out.

  // need to give componentDidMount access database for page info.

  componentDidMount() {
    this.setState({
      title: "Care Providers",
      bodyInfo: [
        ...this.state.bodyInfo,
        {
          thumbnail: require("../assets/other-images/woman.jpg"),
          name: "Amy Marshal, CRNP",
          specialties: `Emergency Medicine Undersea and Hyperbaric Medicine \nPediatric Care`,
          location: "126 Clinic Drive \nDrive Dothan, AL 36303",
          phone: "334.793.1881",
        },
      ],
    });
  }

  list = () => {
    let index = 0;

    return this.state.bodyInfo.map((el) => {
      index++;

      return (
        <View style={styles.providerContainer} key={index}>
          <Image style={styles.bodyThumbnails} source={el.thumbnail} />
          <View style={styles.providerTextContainer}>
            <Text style={styles.providerName}>{el.name}</Text>
            <Text style={styles.providerBoldText}>Specialties: </Text>
            <Text style={styles.providerText}>{el.specialties}</Text>
            <Text style={styles.providerBoldText}>Location: </Text>
            <Text style={styles.providerText}>{el.location}</Text>
            <Text style={styles.providerPhone}>{el.phone}</Text>
          </View>
        </View>
      );
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    const page = "CareProviders";

    const { title } = this.state;

    let handleNav = (screenName) => {
      navigate(`${screenName}`, { name: `${screenName}` });
    };

    return (
      <View style={styles.background}>
        <Image
          style={styles.headerPhoto}
          source={require("../assets/header-images/checkups-and-immunizations-header.jpg")}
        />
        <View style={styles.backArrowCircle}>
          <Icon2
            name="keyboard-arrow-left"
            size={22}
            color="white"
            onPress={() =>
              navigate("Home", {
                name: "Home",
              })
            }
          />
        </View>
        <View style={styles.middleBackground}>
          <ScrollView>
            <Text style={styles.headingText}>{title}</Text>
            <View style={styles.bodyText}>
              {this.state.bodyInfo !== [] ? this.list() : null}
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
  },
  backArrowCircle: {
    width: 44,
    height: 44,
    backgroundColor: "#FFFFFF30",
    borderRadius: 180,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
    left: 20,
  },
  bodyText: {
    color: "#252425",
    fontFamily: "proxima-nova-normal",
    fontSize: 16,
  },
  bodyThumbnails: {
    height: "60%",
    width: "40%",
    borderRadius: 10,
  },
  headerPhoto: {
    width: 475,
    height: "40%",
  },
  headingText: {
    color: "#0056A4",
    fontSize: 24,
    fontFamily: "proxima-nova-bold",
    marginBottom: 20,
  },
  middleBackground: {
    height: "50%",
    paddingTop: "5%",
    paddingRight: "8%",
    paddingLeft: "8%",
    paddingBottom: "5%",
    justifyContent: "space-between",
    alignContent: "space-between",
    backgroundColor: "#F8F8F8",
  },
  providerContainer: {
    flexDirection: "row",
  },
  providerTextContainer: {
    marginLeft: "5%",
    width: "55%",
  },
  providerName: {
    color: "#0056A4",
    fontFamily: "proxima-nova-bold",
  },
  providerPhone: {
    fontFamily: "proxima-nova-normal",
    color: "#F1544C",
  },
  providerText: {
    fontFamily: "proxima-nova-normal",
    flexWrap: "wrap",
  },
  providerBoldText: {
    fontFamily: "proxima-nova-bold",
    marginTop: 10,
  },
});

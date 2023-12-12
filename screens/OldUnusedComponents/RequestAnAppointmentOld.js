import React from "react";
import axios from "axios";

import { StyleSheet, View, Image, Text, Picker, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";

import Footer from "../../assets/Components/Footer";

export default class RequestAnAppointment extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
      headerShown: false,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      additionalComments: "",
    };
  }

  handleStateChange = (state, value) => {
    this.setState({
      [state]: value,
    });
  };

  handleEmailPost = () => {
    console.log("handleEmail Post Fired");
    const {
      fullName,
      email,
      phoneNumber,
      location,
      additionalComments,
    } = this.state;
    console.log("test: ", email);

    axios
      .post(`https://formspree.io/mnqgwnqz`, {
        _replyto: email,
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        location: location,
        additionalComments: additionalComments,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const { navigate } = this.props.navigation;
    const {
      fullName,
      email,
      phoneNumber,
      location,
      additionalComments,
    } = this.state;
    const page = "RequestAnAppointment";

    let handleNav = (screenName) => {
      navigate(`${screenName}`, { name: `${screenName}` });
    };

    return (
      <View style={styles.background}>
        <Image
          style={styles.headerPhoto}
          source={require("../assets/header-images/request-an-appointment-header.jpg")}
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
            <Text style={styles.headingText}>Request an Appointment</Text>
            <TextInput
              placeholder={"Child's Full Name"}
              style={styles.defaultInput}
              placeholderTextColor={"black"}
              onChangeText={(text) => this.handleStateChange("fullName", text)}
              value={fullName}
            />
            <TextInput
              placeholder={"E-mail Address"}
              style={styles.defaultInput}
              placeholderTextColor={"black"}
              onChangeText={(text) => this.handleStateChange("email", text)}
              value={email}
            />
            <TextInput
              placeholder={"Phone Number"}
              style={styles.defaultInput}
              placeholderTextColor={"black"}
              onChangeText={(text) =>
                this.handleStateChange("phoneNumber", text)
              }
              value={phoneNumber}
            />
            <View style={styles.defaultPicker}>
              <Picker
                style={{ width: "100%", height: "100%" }}
                selectedValue={location}
                onValueChange={(itemValue, itemIndex) =>
                  this.handleStateChange("location", itemValue)
                }
                itemStyle={{ width: "100%", height: "100%" }}
                mode="dropdown"
              >
                <Picker.Item label="Location" value="no-location" />
                <Picker.Item label="Dothan" value="dothan" />
                <Picker.Item
                  label="Dothan Subspecialty"
                  value="dothan-subspecialty"
                />
                <Picker.Item label="Enterprise" value="enterprise" />
                <Picker.Item label="Eufaula" value="eufaula" />
                <Picker.Item label="Ozark" value="ozark" />
              </Picker>
            </View>
            <TextInput
              placeholder={"Additional Comments"}
              style={styles.defaultInput}
              placeholderTextColor={"black"}
              onChangeText={(text) =>
                this.handleStateChange("additionalComments", text)
              }
              value={additionalComments}
            />
            <View style={styles.blueButton}>
              <Text
                style={styles.blueButtonText}
                onPress={this.handleEmailPost}
              >
                Submit Appointment Request
              </Text>
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
  defaultInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DDDDDD",
    backgroundColor: "white",
    color: "black",
    marginBottom: 20,
    paddingLeft: 15,
  },
  defaultPicker: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DDDDDD",
    backgroundColor: "white",
    color: "black",
    marginBottom: 20,
    paddingLeft: 15,
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
  blueButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#0056A4",
    fontFamily: "proxima-nova-bold",
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 20,
  },
  blueButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "proxima-nova-black",
    height: "100%",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

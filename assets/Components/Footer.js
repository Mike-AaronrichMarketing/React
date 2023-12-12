import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";

function Footer(props) {
  console.log(props.page);
  console.log(props.handleNav);

  let color1 = "";
  let color2 = "";
  let color3 = "";

  if (props.page === "Home") {
    color1 = "#417FBE";
    color2 = "#BBBBBB";
    color3 = "#BBBBBB";
  } else if (props.page === "News" || props.page === "SearchNews") {
    color1 = "#BBBBBB";
    color2 = "#417FBE";
    color3 = "#BBBBBB";
  } else if (props.page === "ContactUs" || props.page === "SearchContactUs") {
    color1 = "#BBBBBB";
    color2 = "#BBBBBB";
    color3 = "#417FBE";
  } else {
    color1 = "#BBBBBB";
    color2 = "#BBBBBB";
    color3 = "#BBBBBB";
  }

  // if (
  //   props.page !== "Home" &&
  //   props.page !== "News" &&
  //   props.page !== "Contact"
  // )

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity 
        style={styles.footerIconContainers}
        onPress={() => props.handleNav("Home")}
      >
        <Icon
          name="home"
          size={26}
          color={color1}
        />
        <Text
          style={{
            color: color1,
            fontSize: 10,
            fontFamily: "proxima-nova-normal",
            fontWeight: "400",
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.footerIconContainers}
        onPress={() => props.handleNav("News")}
      >
        <Icon
          name="newspaper-o"
          size={26}
          color={color2}
        />
        <Text
          style={{
            color: color2,
            fontSize: 10,
            fontFamily: "proxima-nova-normal",
            fontWeight: "400",
          }}
        >
          News
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.footerIconContainers}
        onPress={() => props.handleNav("ContactUs")}
      >
        <Icon2
          name="user-circle"
          size={24}
          color={color3}
        />
        <Text
          style={{
            color: color3,
            fontSize: 10,
            fontFamily: "proxima-nova-normal",
            fontWeight: "400",
          }}
        >
          Contact
        </Text>
      </TouchableOpacity>
      {/* <View style={styles.footerIconContainers}>
        <Icon2
          name="heartbeat"
          size={24}
          color="#BBBBBB"
          onPress={() => props.handleNav("AboutUs")}
        />
        <Text
          style={styles.footerText}
          onPress={() => props.handleNav("AboutUs")}
        >
          About Us
        </Text>
      </View> */}
      {/* <View style={styles.footerIconContainers}>
        <Icon2
          name="calendar-alt"
          size={22}
          color="#BBBBBB"
          onPress={() => props.handleNav("RequestAnAppointment")}
        />
        <Text
          style={styles.footerText}
          onPress={() => props.handleNav("RequestAnAppointment")}
        >
          Appointments
        </Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    height: "10%",
    minHeight: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: "1%",
    paddingBottom: "6%",
    borderTopWidth: 1,
    borderColor: "#DCDCDC",
  },
  footerText1: {
    color: "#BBBBBB",
    fontSize: 10,
    fontFamily: "proxima-nova-normal",
    fontWeight: "400",
  },
  footerText2: {
    color: "#BBBBBB",
    fontSize: 10,
    fontFamily: "proxima-nova-normal",
    fontWeight: "400",
  },
  footerText3: {
    color: "#BBBBBB",
    fontSize: 10,
    fontFamily: "proxima-nova-normal",
    fontWeight: "400",
  },
  footerIconContainers: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 42,
    marginTop: 10,
  },
});

const footer1 = StyleSheet.create({
  footerText1: {
    color: "#BBBBBB",
    fontSize: 10,
    fontFamily: "proxima-nova-normal",
    fontWeight: "400",
  },
});

const footer2 = StyleSheet.create({
  footerText2: {
    color: "#BBBBBB",
    fontSize: 10,
    fontFamily: "proxima-nova-normal",
    fontWeight: "400",
  },
});

const footer3 = StyleSheet.create({
  footerText3: {
    color: "#BBBBBB",
    fontSize: 10,
    fontFamily: "proxima-nova-normal",
    fontWeight: "400",
  },
});

export default Footer;

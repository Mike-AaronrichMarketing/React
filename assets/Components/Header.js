import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Icon2 from "react-native-vector-icons/MaterialIcons";

export default class PatientPortal extends React.Component {
  render() {
    return (
        <View style={styles.header}>
          <TouchableOpacity style={styles.backArrowCircle}
            onPress={() => this.props.backFunc()}
          >
            <Icon2
              name="keyboard-arrow-left"
              size={22}
              color="white"
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>DOTHAN PEDIATRIC</Text>
            <Text style={styles.text2}>HEALTHCARE NETWORK</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
  header: {
    height: "10%",
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "proxima-nova-bold",
    width: 200,
    textAlign: "center",
    marginBottom: -5,
  },
  text2: {
    color: "white",
    fontSize: 15,
    fontFamily: "proxima-nova-bold",
    width: 200,
    textAlign: "center",
    margin: 0,
  }
});

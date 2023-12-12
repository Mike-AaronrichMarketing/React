import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";

import Icon2 from "react-native-vector-icons/MaterialIcons";

import Header from "../../../assets/Components/Header";
import Footer from "../../../assets/Components/Footer";

export default class DothanPedContact extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
      headerShown: false,
    };
  };

  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    const { navigate } = this.props.navigation;
    const page = "DothanPedContact";

    let handleNav = (screenName) => {
      navigate(`${screenName}`, { name: `${screenName}` });
    };

    return (
      <View style={styles.background}>
        <Header backFunc={() =>
          navigate("CareProviders", {
            name: "CareProviders",
          })}/>
        <WebView
          onLoad={() => this.hideSpinner()}
          source={{
            uri: "https://www.dothanpediatricclinic.com/meet-our-providers",
          }}
          style={styles.webView}
          injectedJavaScript={`
              function hideFooter() {
                var elementToHide = document.getElementsByClassName("footer-above"), i;
                for (i = 0; i < elementToHide.length; i += 1) {
                  elementToHide[i].style.display = "none";
                };
              }; 
              hideFooter();
            `}
          ref={( webView ) => this.webView = webView}
          onMessage={() => console.log("onMessage fired!")}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
            size="large"
          />
        )}
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
  header: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  webView: {
    height: "90%",
    width: "100%",
  },
});

import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { WebView } from "react-native-webview";

import Header from "../../assets/Components/Header";
import Footer from "../../assets/Components/Footer";

let topMargin = -100;

export default class Appointments extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
      headerShown: false,
    };
  };

  constructor(props) {
    super(props);
    this.state = { 
      visible: true
    };
  }

  hideSpinner = () => {
    this.setState({ visible: false });
  }

  handleNavigationStateChange = navState => {
    console.log(navState.url);

    if(navState.url == "https://www.dothanpediatricclinic.com/appointment-info") {
      topMargin = -100;
    } else {
      topMargin = 0;
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const page = "Appointments";

    let handleNav = (screenName) => {
      navigate(`${screenName}`, { name: `${screenName}` });
    };

    return (
      <View style={styles.background}>
        <Header backFunc={() =>
            navigate("Home", {
              name: "Home",
            })}/>
        <WebView
          onLoad={() => this.hideSpinner()}
          source={{
            uri:
              "https://www.dothanpediatricclinic.com/appointment-info",
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
          userAgent={"https://dothanpediatricclinic.followmyhealth.com/Login/Home/Index?authproviders=0&returnArea=PatientAccess#!/default"}
          onNavigationStateChange={this.handleNavigationStateChange}
          style={{ marginTop: topMargin }}
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
  backButton: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  webView: {
    height: "90%",
    width: "100%",
  },
});

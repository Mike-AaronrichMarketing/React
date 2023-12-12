import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

import Header from "../../../assets/Components/Header";
import Footer from "../../../assets/Components/Footer";

import CheckupsJPG from "./CheckupsJPG";

export default class CheckupsAndImmunizations extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
      headerShown: false,
    };
  };

  constructor(props) {
    super(props);
    this.state = { 
      visible: true,
      showJPG: false,
    };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  handleNavigationStateChange = navState => {
    console.log(navState.url);
    const endOfUrl = navState.url.slice(navState.url.length - 4).toLowerCase();
    console.log("endOfUrl: ", endOfUrl);

    if(endOfUrl == ".jpg") {
      this.setState({
        uri: navState.url
      }, () => {
        this.setState({
          showJPG: true,
          visible: true
        })
      })
    } 
  }

  updateState = (param) => {
    this.setState({
      showJPG: param
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const page = "CheckupsAndImmunizations";

    let handleNav = (screenName) => {
      navigate(`${screenName}`, { name: `${screenName}` });
    };

    return (
      <View>
        {this.state.showJPG
          ? <CheckupsJPG uri={this.state.uri} handleNav={handleNav} navigate={navigate} updateState={this.updateState} />
          : <View style={styles.background}>
              <Header backFunc={() =>
                  navigate("Search", {
                    name: "Search",
                  })}/>
              <WebView
                onLoad={() => this.hideSpinner()}
                source={{
                  uri:
                    "https://www.dothanpediatricclinic.com/checkup-info-app",
                }}
                style={styles.webView}
                injectedJavaScript={`
                    function hideFooter() {
                      var elementToHide = document.getElementsByClassName("footer-above"), i;
                      var elementToHide2 = document.getElementsByClassName("nav-wrapper"), i;
                      for (i = 0; i < elementToHide.length; i += 1) {
                        elementToHide[i].style.display = "none";
                      };
                      for (j = 0; j < elementToHide2.length; j += 1) {
                        elementToHide2[j].style.display = "none";
                      };
                    }; 
                    hideFooter();
                  `}
                ref={( webView ) => this.webView = webView}
                onNavigationStateChange={this.handleNavigationStateChange}
                onMessage={() => console.log("onMessage fired!")}
                allowFileAccess={true}
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
        }
        
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

import React from "react";
import { StyleSheet, View, Text, Button, Dimensions, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { AppLoading } from "expo";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Fontisto";
import Icon4 from "react-native-vector-icons/AntDesign";

import Header from "../../assets/Components/Header";
import Footer from "../../assets/Components/Footer";

// search keywords first to see if it includes an exact match
// forLoop through all keywords one at a time by character to see if the characters match. If 3 - 5 of the characters match, push the result into the state results array
// if there is a match, return that.
// else, if ther is not a keyword match, for loop through descriptions to see if there is a match.
// if no search matches: "Sorry, we don't have any matches for that keyword."

// use .includes to search keywords.

// change everything to lowercase letters before running the searching function.

// every onkeydown that is a 'space' key code, run the keyword search function.

// you could have each page preloaded set to display false so that it doesn't take time to search on load, then if there is a match, change display to true.
// or have them all set to display true, then display false if they do not have a match.

const allPages = require('./data.json');

export default class Search extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam("name"),
          headerShown: false,
        };
      };

      constructor(props) {
        super(props);
        this.state = {
          allPages: [],
          matchedPages: [],
        };
      }

      componentDidMount = () => {
        console.log(allPages);
        this.setState({ allPages: allPages });
      }

      handleSearch = (text) => {
        text = text.toLowerCase();
        console.log(text);
        let { matchedPages } = this.state;

        if(text.length == 0) {
          return this.setState({ matchedPages: [] });
        } else if(text.length > 2) {
          allPages.forEach(e => {
            if(e.keywords.includes(text)){
              let doesInclude = false;
              for (let i = 0; i < matchedPages.length; i++) {
                if(matchedPages[i].keywords.includes(text)){
                  doesInclude = true;
                }
              }
              
              if(doesInclude === true) {
                console.log("already included in matchedPages");
              } else {
                return this.setState({ matchedPages: [...this.state.matchedPages, e]})
              }  
            }
          })
        }        
      }
    
      render() {
        const { navigate } = this.props.navigation;
        const page = "Search";
    
        let handleNav = (screenName) => {
          navigate(`${screenName}`, { name: `${screenName}` });
        };

        let { allPages, matchedPages } = this.state;
    
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
                <TextInput
                 style={styles.searchCont} 
                 onChangeText={(text) => setTimeout(() => { this.handleSearch(text); }, 500) }
                 placeholder={"Search..."}
                 placeholderTextColor={"#6e6d6c"}
                 />

                <View style={styles.middleBackgroundBottom}>
                  {matchedPages.length > 0
                    ?  matchedPages.map((e, i) => {
                      console.log("e: ", e);
                      return (
                        <View key={i}>
                            <TouchableOpacity style={styles.locationContainer} onPress={() => handleNav(e.screenName)}>
                              <View style={styles.searchResultIcon}>
                                {e.iconImport === "Icon" ? <Icon name={e.iconName} size={42} color="#0056A4" /> : null}
                                {e.iconImport === "Icon2" ? <Icon2 name={e.iconName} size={42} color="#0056A4" /> : null}
                                {e.iconImport === "Icon3" ? <Icon3 name={e.iconName} size={42} color="#0056A4" /> : null}
                                {e.iconImport === "Icon4" ? <Icon4 name={e.iconName} size={42} color="#0056A4" /> : null}
                              </View>
                              
                              <View style={styles.searchResult}>
                                <Text style={styles.screenTitle}>
                                    {e.title}
                                </Text>
                                <Text style={styles.description}>
                                    {e.description}
                                </Text>
                              </View>
                            </TouchableOpacity> 
                          </View>
                      );
                    })
                    : allPages.map((e, i) => {
                        console.log("e: ", e);
                        return (
                            <View key={i}>
                              <TouchableOpacity style={styles.locationContainer} onPress={() => handleNav(e.screenName)}>
                              <View style={styles.searchResultIcon}>
                                {e.iconImport === "Icon" ? <Icon name={e.iconName} size={42} color="#0056A4" /> : null}
                                {e.iconImport === "Icon2" ? <Icon2 name={e.iconName} size={42} color="#0056A4" /> : null}
                                {e.iconImport === "Icon3" ? <Icon3 name={e.iconName} size={42} color="#0056A4" /> : null}
                                {e.iconImport === "Icon4" ? <Icon4 name={e.iconName} size={42} color="#0056A4" /> : null}
                              </View>
                                
                                <View style={styles.searchResult}>
                                  <Text style={styles.screenTitle}>
                                      {e.title}
                                  </Text>
                                  <Text style={styles.description}>
                                      {e.description}
                                  </Text>
                                </View>
                              </TouchableOpacity> 
                            </View>
                            );
                        })
                    }
                      
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
      searchCont: {
        backgroundColor: "#fff",
        width: "84%",
        borderRadius: 6,
        padding: 15,
        marginTop: 30,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      description: {
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
      screenTitle: {
        color: "#0056A4",
        fontFamily: "proxima-nova-bold",
        marginBottom: 15,
        fontSize: 18,
        width: 200,
      },
      locationPhone: {
        marginBottom: 20,
        fontSize: 14,
        color: "#F1544C",
      },
      searchResultIcon: {
        width: 50,
      },
      searchResult: {
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
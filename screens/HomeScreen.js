import React from 'react';
import {
    Image,
    TextInput,
    Platform,
    ScrollView,
    CheckBox,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';
// import { CheckBox } from 'react-native-elements';
import { MonoText } from '../components/StyledText';
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props){
        super(props);
        this.state={isShowingText: true, seatCount: 0, PhoneChecked: false, TVChecked: false,
            WhiteBoardChecked: false, Zoom: false}
    }
    PhoneCheckedChange = () => {
        this.setState({PhoneChecked : !this.state.PhoneChecked})
    }
    TVCheckedChange = () => {
        this.setState({TVChecked : !this.state.TVChecked})
    }
    WhiteBoardCheckedChange = () => {
        this.setState({WhiteBoardChecked : !this.state.WhiteBoardChecked})
    }
    ZoomCheckedChange = () => {
        this.setState({ZoomChecked : !this.state.ZoomChecked})
    }
    render() {
        return (
            <View style={styles.container}>
              <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                  <Image
                      source={
                          __DEV__
                              ? require('../assets/images/vertafore.png')
                              : require('../assets/images/vertafore.png')
                      }
                      style={styles.welcomeImage}
                  />
                </View>
                <View style={styles.getStartedContainer}>
                    {this._maybeRenderDevelopmentModeWarning()}
                  <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>

                  </View>
                  <Text style={styles.getStartedText}>How many seats:</Text>
                  <TextInput
                      style={{height: 10}}
                      onChangeText={(seatCount) => this.setState({seatCount})}
                      value = {this.state.text}
                  />
                  <Text style={styles.getStartedText}>
                    Phone:
                  </Text>
                  <CheckBox
                      title='Phone:'
                      checked={this.state.PhoneChecked}
                      onValueChange={() => this.PhoneCheckedChange()}
                      value={this.state.PhoneChecked}
                  />
                  <Text style={styles.getStartedText}>
                    TV:
                  </Text>
                  <CheckBox
                      title='TV:'
                      checked={this.state.TVChecked}
                      onValueChange={() => this.TVCheckedChange()}
                      value={this.state.TVChecked}
                  />
                  <Text style={styles.getStartedText}>
                    WhiteBoard:
                  </Text>
                  <CheckBox
                      title='WhiteBoard:'
                      checked={this.state.WhiteBoardChecked}
                      onValueChange={() => this.WhiteBoardCheckedChange()}
                      value={this.state.WhiteBoardChecked}
                  />
                  <Text style={styles.getStartedText}>
                    Zoom:
                  </Text>
                  <CheckBox
                      title='Zoom:'
                      checked={this.state.ZoomChecked}
                      onValueChange={() => this.ZoomCheckedChange()}
                      value={this.state.ZoomChecked}
                  />
                </View>
              </ScrollView>
              <View style={styles.tabBarInfoContainer}>
                <Text style={styles.tabBarInfoText}>Rooms available:</Text>

              </View>
            </View>
        );
    }
    // filter list
    // compstate compare to json obj
    // beefcake function filter return [] = lenght 0 display
    // push map.shityo for(ele has Componentthat is list)
    _maybeRenderDevelopmentModeWarning() {
        if (__DEV__) {

            return (
                <Text style={styles.developmentModeText}>
                  Welcome! Where are you going?
                </Text>
            );
        } else {
            return (
                <Text style={styles.developmentModeText}>
                  You are not in development mode, your app will run at full speed.
                </Text>
            );
        }
    }
    _handleLearnMorePress = () => {
        WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
    };
    _handleHelpPress = () => {
        WebBrowser.openBrowserAsync(
            'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
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
    Switch
} from 'react-native';
import {
    WebBrowser,
    Svg
} from 'expo';

import { RoomList } from '../components/RoomList'
// import { CheckBox } from 'react-native-elements';
import { MonoText } from '../components/StyledText';

const rooms = [
    {name: 'Aspen', area: 'Kitchen', tv: true, phone: false, whiteBoard: true, seats: 24, zoom: true},
    {name: 'Alma', area: 'Kitchen', tv: true, phone: false, whiteBoard: true, seats: 24, zoom: true},
    {name: 'Basalt', area: 'Kitchen', tv: true, phone: true, whiteBoard: false, seats: 10, zoom: true},
    {name: 'Breckenridge', area: 'Kitchen', tv: true, phone: false, whiteBoard: false, seats: 24, zoom: true},
    {name: 'Buena Vista', area: 'Kitchen', tv: true, phone: false, whiteBoard: true, seats: 6, zoom: true},
    {name: 'Carbondale', area: 'Kitchen', tv: true, phone: false, whiteBoard: true, seats: 6, zoom: true},
    {name: 'Castle Rock', area: 'Coffee Shop', tv: true, phone: true, whiteBoard: false, seats: 10, zoom: true},
    {name: 'Crested Butte', area: 'Coffee Shop', tv: true, phone: false, whiteBoard: true, seats: 14, zoom: true},
    {name: 'Estes Park', area: 'Coffee Shop', tv: true, phone: true, whiteBoard: true, seats: 10, zoom: true},
    {name: 'Frisco', area: 'Arcade', tv: true, phone: true, whiteBoard: false, seats: 12, zoom: true},
    {name: 'Gunnison', area: 'Arcade', tv: true, phone: false, whiteBoard: false, seats: 8, zoom: true},
    {name: 'Leadville', area: 'Grove', tv: true, phone: true, whiteBoard: true, seats: 10, zoom: true},
    {name: 'Lyons', area: 'Grove', tv: true, phone: false, whiteBoard: false, seats: 6, zoom: false},
    {name: 'Morrison', area: 'Grove', tv: true, phone: false, whiteBoard: true, seats: 20, zoom: true},
    {name: 'Palisade', area: 'Grove', tv: false, phone: false, whiteBoard: true, seats: 2, zoom: false},
    {name: 'Silverthorne', area: 'Grove', tv: false, phone: false, whiteBoard: true, seats: 5, zoom: false},
    {name: 'Steamboat Springs', area: 'Grove', tv: true, phone: false, whiteBoard: false, seats: 4, zoom: false},
    {name: 'Telluride', area: 'Grove', tv: true, phone: false, whiteBoard: true, seats: 10, zoom: true},
    {name: 'Yuma', area: 'Grove', tv: false, phone: false, whiteBoard: false, seats: 2, zoom: false}
]


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
        if(this.state.ZoomChecked) {
          filterKeys.Zoom = true
        } else {
          delete filterKeys.Zoom
        }
        console.log(filterKeys)
        console.log('Zoom changed')
    }

    fullFilterFunction(room) {
      if(this.state.PhoneChecked) {
        if(!room.phone) {
          return false
        }
      }
        if(this.state.TVChecked) {
            if(!room.tv) {
                return false
            }
        }
        if(this.state.WhiteBoardChecked) {
            if(!room.whiteBoard) {
                return false
            }
        }
        if(this.state.ZoomChecked) {
            if(!room.zoom) {
                return false
            }
        }
        if(room.seats < this.state.seatCount) {
            return false
        }
        return true
    }
    render() {
        return (
            <View style={styles.container}>
              <ScrollView  contentContainerStyle={styles.contentContainer}>
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


                  <View style={styles.row}>
                    <Text style={styles.getStartedText2}>How many seats needed:</Text>
                    <TextInput
                        style={styles.inputBox}
                        onChangeText={(seatCount) => this.setState({seatCount})}
                        value = {this.state.text}
                    />
                  </View>
                  <Svg width="410" height="10">
                    <Svg.Path d="M 35 5 L 375 5 L 375 7 L 35 7 Z" fill="#ff7134" />
                  </Svg>
                  <View style={styles.row}>
                    <Text style={styles.getStartedText}>
                      Phone:
                    </Text>
                    <Switch
                        title='Phone:'
                        thumbTintColor="#ff7134"
                        onTintColor="#ffa781"
                        checked={this.state.PhoneChecked}
                        onValueChange={() => this.PhoneCheckedChange()}
                        value={this.state.PhoneChecked}
                    />
                  </View>
                  <Svg width="410" height="10">
                    <Svg.Path d="M 35 3 L 375 3 L 375 5 L 35 5 Z" fill="#ff7134" />
                  </Svg>
                  <View style={styles.row}>
                    <Text style={styles.getStartedText}>
                      TV:
                    </Text>
                    <Switch
                        title='TV:'
                        thumbTintColor="#ff7134"
                        onTintColor="#ffa781"
                        checked={this.state.TVChecked}
                        onValueChange={() => this.TVCheckedChange()}
                        value={this.state.TVChecked}
                    />
                  </View>
                  <Svg width="410" height="10">
                    <Svg.Path d="M 35 3 L 375 3 L 375 5 L 35 5 Z" fill="#ff7134" />
                  </Svg>
                  <View style={styles.row}>
                    <Text style={styles.getStartedText}>
                      WhiteBoard:
                    </Text>
                    <Switch
                        title='WhiteBoard:'
                        thumbTintColor="#ff7134"
                        onTintColor="#ffa781"
                        checked={this.state.WhiteBoardChecked}
                        onValueChange={() => this.WhiteBoardCheckedChange()}
                        value={this.state.WhiteBoardChecked}
                    />
                  </View><Svg width="410" height="10">
                  <Svg.Path d="M 35 3 L 375 3 L 375 5 L 35 5 Z" fill="#ff7134" />
                </Svg>
                  <View style={styles.row}>
                    <Text style={styles.getStartedText}>
                      Zoom:
                    </Text>
                    <Switch
                        title='Zoom:'
                        thumbTintColor="#ff7134"
                        onTintColor="#ffa781"
                        checked={this.state.ZoomChecked}
                        onValueChange={() => this.ZoomCheckedChange()}
                        value={this.state.ZoomChecked}
                    />
                  </View>

                </View>
              </ScrollView>
              <View>
                <Text style={styles.tabBarInfoText}>Rooms available:</Text>

              </View>
              <RoomList area={this.state.area} dataList={rooms.filter((room) =>
              this.fullFilterFunction(room))}/>

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
        fontFamily: 'space-mono'
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
        flex: 1,
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
        paddingTop: 3
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
    row: {
        display: 'flex',
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBox: {
        top: 5,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#727278',
        height: 19,
        fontFamily: 'space-mono',
        textAlign: 'center',
        marginRight: 15

    },
    getStartedText2: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        paddingTop: 0
    },
    checkBoxStyle: {
      backgroundColor: '#2e78b7',
      borderColor: '#2e78b7'
    },

});
const filterKeys = {

}
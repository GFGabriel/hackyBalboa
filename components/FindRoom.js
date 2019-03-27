import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class FindRoom extends React.Component {
  <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>How many seats:</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Fifth Floor roomFinder
            </Text>

            
  </View>
  // renderItems = () => {
//       return (
//         <ul>
//           {this.props.items.map(item => (
//             <li key={item.getElementById}>{item.text}</li>
//           ))}
//         </ul>
//       );
//     }
  }
   
// ReactDOM.render(React.createElement(FifthFloorRoomsApp, null),
    // document.getElementById('find-room'));
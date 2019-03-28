import React from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { Svg } from 'expo'
import { FullMap } from '../components/FullMap'
import { RoomList } from '../components/RoomList'


import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      area: 'Select an area'
    }
  }
  static navigationOptions = {
    title: 'Floor Map',
  };

  changeArea(area) {
    this.setState({area})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FullMap changeArea={this.changeArea.bind(this)}/>
        <RoomList area={this.state.area} dataList={dataList.filter((item) => item.area == this.state.area)}/>
      </ScrollView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

//name: '', area: '', tv: , phone: , whiteBoard: , seats: , zoom:
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

dataList = rooms


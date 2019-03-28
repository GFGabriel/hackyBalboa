import React  from 'react'
import { StyleSheet, ScrollView, Text, FlatList, View} from 'react-native'
import { Icon } from 'expo'
import { Svg } from 'expo'

export class RoomList extends React.Component {

    renderSeparator = () => {
        return (
            <Svg width="410" height="10">
                <Svg.Path d="M 30 3 L 380 3 L 380 5 L 30 5 Z" fill="#ff7134" />
            </Svg>
        )
    }


    render() {
        return (
        <ScrollView >
            <Text style={styles.title}>{this.props.area}</Text>

            <FlatList
                style={styles.container}
                data={ this.props.dataList}
                keyExtractor={item => item.name}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={({item}) =>
                    <View>
                        <View style={styles.row}>

                            {item.tv ?
                                <Icon.Ionicons name='md-tv' style={styles.iconBoxTV}/> : <Text style={styles.iconBox}/>
                            }
                            {item.phone?
                                <Icon.Ionicons name='md-call' style={styles.iconBox}/> : <Text style={styles.iconBox}/>
                            }
                            {item.whiteBoard?
                                <Icon.Ionicons name='md-create' style={styles.iconBox} /> : <Text style={styles.iconBox}/>
                            }
                            <Text style={styles.roomName}>{item.name}</Text>
                            {item.zoom ?
                                <Icon.Ionicons name='md-videocam' style={styles.iconBox}/> : <Text style={styles.iconBox}/>
                            }
                                <Text style={styles.seats}> Seats: {item.seats}</Text>

                        </View>

                    </View>
                }
            />

        </ScrollView>


        );
    }



}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    roomName: {
        fontSize: 20,
        width: 265
    },
    iconBox: {
        width: 20,
        paddingTop: 9,
        paddingLeft: 8
    },
    iconBoxTV: {
        width: 20,
        paddingTop: 9,
        paddingLeft: 8
    },
    seats: {
        paddingTop: 6
    },
    container: {
        backgroundColor: '#fbf9f5',
        fontFamily: 'space-mono'
    },
    bottomPad: {
        height: 15,
        backgroundColor: '#fbf9f5'
    }

})



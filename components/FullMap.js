import React  from 'react'
import { Alert, ScrollView } from 'react-native'
import { Svg } from 'expo'

export class FullMap extends React.Component {
    _onPressKitchen(e) {

        this.handleChange('Kitchen')
    }

    handleChange(area) {
        //const area = e.target
        //console.log(e.target)
        this.props.changeArea(area)
    }

    _onPressCoffeeShop() {
        this.handleChange('Coffee Shop')
    }

    _onPressArcade() {
        this.handleChange('Arcade')
    }

    _onPressGrove() {
        this.handleChange('Grove')
    }


    render() {
        return (
                <Svg width="410" height="300">
                    <Svg.Path onPress={this._onPressKitchen.bind(this)} name='Kitchen' d="M 39.36 0 L 111.52 0 L 111.52 59.04 L 59.04 111.52 L 0 111.52 L 0 39.36 Z" fill="#dcdcdc" />
                    <Svg.Text
                        rotation='-45'
                        fill="none"
                        stroke='#ff7134'
                        fontSize="20"
                        fontWeight="bold"
                        x="0"
                        y="85"
                        textAnchor="middle"
                    >KITCHEN</Svg.Text>
                    <Svg.Path onPress={this._onPressCoffeeShop.bind(this)} d="M 111.52 29.52 L 282.08 29.52 L 380.48 113.49 L 380.48 134.48 L 321.44 134.48 L 268.96 91.84 L 111.52 91.84 Z" fill="#d3d3d3" />
                    <Svg.Text
                        rotation='0'
                        fill="none"
                        stroke='#ff7134'
                        fontSize="20"
                        fontWeight="bold"
                        x="210"
                        y="65"
                        textAnchor="middle"
                    >COFFEE SHOP</Svg.Text>
                    <Svg.Path onPress={this._onPressArcade.bind(this)} d="M 350.96 134.48 L 410 134.48 L 410 206.64 L 370.64 246 L 298.48 246 L 298.48 173.84 Z" fill="#dcdcdc" />
                    <Svg.Text
                        rotation='-40'
                        fill="none"
                        stroke='#ff7134'
                        fontSize="20"
                        fontWeight="bold"
                        x="150"
                        y="375"
                        textAnchor="middle"
                    >ARCADE</Svg.Text>
                    <Svg.Path onPress={this._onPressGrove.bind(this)} d="M 298.48 216.48 L 127.92 216.48 L 29.52 132.51 L 29.52 111.52 L 88.56 111.52 L 141.04 154.16 L 298.48 154.16 Z" fill="#d3d3d3" />
                    <Svg.Text
                        rotation='0'
                        fill="none"
                        stroke='#ff7134'
                        fontSize="20"
                        fontWeight="bold"
                        x="200"
                        y="190"
                        textAnchor="middle"
                    >GROVE</Svg.Text>

                </Svg>
        );
    }


}
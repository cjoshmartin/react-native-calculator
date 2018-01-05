import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NumberButton from './NumberButton.js';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
    ['c', 'ce']
];
export default class App extends React.Component {


    state = { sum: "", buttons: [] };

    componentDidMount() {
        let makeButtons = [];
        for (let i =1; i <= 3; i ++)
        {
            makeButtons.push(<NumberButton number={i.toString()} updateSum={this.setSum.bind(this)}  key={i}/>) 
        }
        this.setState({buttons: makeButtons})
    }

    setSum = (inc) => {
        const settersum =this.state.sum + inc;
        this.setState({sum: settersum})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>The sum of is: {this.state.sum}</Text>
                {this.state.buttons}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

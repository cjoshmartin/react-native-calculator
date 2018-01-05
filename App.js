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
    
    renderButtons() {
        let grid = [];
        
        for (let i =0; i < inputButtons.length; i++)
        {
            let loadRows = [];
            for (let j =0; j < inputButtons[i].length; j++)
                loadRows.push( <NumberButton number={inputButtons[i][j]} updateSum={this.setSum.bind(this)}  key={`${i} - ${j}`}/>) 
            console.log(loadRows)
            //grid.push(<View style={styles.inputRow} key={"row-" + i}>{loadRows} </View>)
        } // end of outer loop

        return grid;
    }
    
    setSum = (inc) => {
        const settersum =this.state.sum + inc;
        this.setState({sum: settersum})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 2, backgroundColor: '#193441'}}></View>
                <View style={{flex: 8, backgroundColor: '#3E606F'}}>
                    {this.renderButtons()}
                </View>
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
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

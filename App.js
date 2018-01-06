import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NumberButton from './NumberButton.js';
import InputButton from './InputButton.js';

export default class App extends React.Component {
    state = { sum: 0, operands: [], oporators: [], readOnly: false };

    componentDidMount() {
    }

    _calculate(){
        let checkvalue =  parseFloat(this.state.sum)
        if (this.state.operands[this.state.operands.length -1] != checkvalue)
            this.state.operands.push(checkvalue)
        if (this.state.operands >=2)
        {
            // TODO
        }
        // ...
    }
    _addOp(oporator){
        this._calculate()
        this.state.oporators.push(oporator) 
        this.setState({readOnly: true})
    }
    _buttonPress (pressed) {
        if (typeof pressed === 'number')
        {
            this.setState({sum: (this.state.sum != 0 && !this.state.readOnly ) ? this.state.sum +""+pressed : pressed})
            this.setState({readOnly: false})
        }
        else
            switch (pressed){
                case '.':
                    if (this.state.sum.indexOf('.')==-1)
                    this.setState({sum: this.state.sum + '.' })
                    break;
                case 'c':
                    this.setState({oporators: [], operands: []})
                case 'ce':
                    this.setState({sum: 0})
                break;
                case '=':
                    this._calculate() // TODO
                    this.setState({oporators: [], operands: []})
                    this.setState({readOnly: true})
                    break;
                default:
                    this._addOp(pressed) 
                    break;
            }
    }

    _renderInputButtons() {
        let j =0;
        const inputButtons = [
            ['c', ' ', 'ce', '/'],
            [1, 2, 3, '*'],
            [4, 5, 6, '-'],
            [7, 8, 9, '+'],
            [0, '.', '=']
        ];
        return inputButtons.map((row) => {
            let i = 0;
            return(
                <View style={Style.inputRow} key={"row-" + j++}>
                {
                    row.map((col) => {
                            return <InputButton value={col} onPress={this._buttonPress.bind(this, col)} key={i++ + "-" } />
                    })
                }
                </View>
            )
        })
    } // end of _renderInputButtons

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText} >{ this.state.sum}</Text>
                </View>
                <View style={{flex: 8, backgroundColor: '#3E606F'}}>
                    {this._renderInputButtons()}
                </View>
            </View>

        );
    }


} // end of class 

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
        displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },

    displayText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
});

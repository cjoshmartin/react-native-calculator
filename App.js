import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NumberButton from './NumberButton.js';
import InputButton from './InputButton.js';

export default class App extends React.Component {
    state = { sum: 0, operands: [], oporators: [], readOnly: false };

    componentDidMount() {
    }

    _calculate(){
        let checkvalue =  parseFloat(this.state.sum).toPrecision(6)
            this.state.operands.push(checkvalue)
        if (this.state.operands.length >=2)
        {
            const num1 = this.state.operands[0];
            this.state.operands.shift();
            const num2 = this.state.operands[0];
            this.state.operands.shift();
            
            switch(this.state.oporators[0]){
                case '/':
                    if ( num2 == 0){
                        this.setState({readOnly:true})
                        throw 'Unable to divide by zero'
                    }
                    this.state.operands.push( num1 / num2)
                    break;
                case '*':
                    this.state.operands.push( num1 * num2)
                    break;
                case '-':
                    this.state.operands.push(num1 - num2)
                    break;
                case '+':
                    this.state.operands.push(num1 + num2)
                    break;
                default:
                    alert('Unexpected input! ' + this.state.oprators[0])
                    break;
            } // end of switch
            this.state.oporators.shift()
        } // end of checking for size of operands array
        const sum = parseFloat(this.state.operands[0])
            this.setState({sum: sum.toPrecision(6) })
    } // end of _calculate

    _addOp(oporator){
        this._calculate()
        this.state.oporators.push(oporator) 
        this.setState({readOnly: true})
    } // end of _addOp

    _buttonPress (pressed) {
        if (typeof pressed === 'number')
        {
            this.setState({sum: (this.state.sum != 0 && this.state.sum && !this.state.readOnly ) ? this.state.sum +""+pressed : pressed})
            this.setState({readOnly: false})
        }
        else
            switch (pressed){
                case '.':
                    if (this.state.sum.toString().indexOf('.')==-1)
                        this.setState({sum: this.state.sum + '.' })
                    break;
                case 'ce':
                    this.setState({oporators: [], operands: []})
                case 'c':
                    this.setState({sum: 0})
                    break;
                case '=':
                    this._calculate() 
                    this.setState({oporators: [], operands: []})
                    this.setState({readOnly: true})
                    break;
                case '+/-':
                    if(this.state.sum != 0)
                    this.setState({sum: parseFloat(this.state.sum) * -1 })
                    break;
                default:
                    this._addOp(pressed) 
                    break;
            } // end of switch
    } // end of _buttonPress

    _renderInputButtons() {
        let j =0;
        const inputButtons = [
            ['c', '+/-', 'ce', '/'],
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
                            return <InputButton value={col} onPress={this._buttonPress.bind(this, col)} key={j + "-" + i++ } />
                        })
                    }
                </View>
            )
        })
    } // end of _renderInputButtons

    render() {
        console.log(this.state)

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

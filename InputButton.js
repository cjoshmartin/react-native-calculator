// InputButton.js
import React from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native';


const InputButton = (props) => {
    
        return (
            <TouchableHighlight style={Style.inputButton} underlayColor="#193441" onPress={props.onPress}>
                <Text style={Style.inputButtonText}>{props.value}</Text>
            </TouchableHighlight>
        )
    }

export default InputButton;

var Style = StyleSheet.create({
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
});

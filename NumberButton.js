
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

 const NumberButton = (props) => {
    return (
        <View style={style.inputButton}>
            <Text  onPress={() => props.updateSum(props.number)} style={style.inputButtonText} >
                {props.number}
            </Text>
    </View>
    );
  }
export default NumberButton;

let style = StyleSheet.create({
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
})

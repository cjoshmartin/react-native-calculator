
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

 const NumberButton = (props) => {
    return (
        <Button title={props.number} color="red" onPress={() => props.updateSum(props.number)} /> 
    );
  }
export default NumberButton;
// onPress={props.setSum(props.number)} />

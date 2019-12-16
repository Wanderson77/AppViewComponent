import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function components() {
  return (
    <View style={Styles.view} />
  );
}

const Styles = StyleSheet.create({
   view: {
       flex:1,
       borderColor: 'blue'
   }, 
})
